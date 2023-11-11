import { getAuth } from "firebase/auth";
import { AxiosFacade } from "src/lib/axios";

export const errInitialState = {
    validateErr: false,
    err: "",
    blocked: false,
}

export const errReducer = (state, action) => {
    for (const key of Object.keys(errInitialState)) {
        if (key === action.type) {
            return { ...state, [key]: action.payload };
        }
    }
}

export const getValidateErrors = (errState, errDispatch, errRef) => {
    const errKey = Object.keys(errState.validateErr)[0];
    const err = errState.validateErr[errKey];
    errRef.current.classList.add('visible-validate-err');
    errDispatch({ type: "err", payload: err })
    errDispatch({ type: "blocked", payload: true });
    setTimeout(() => {
        errDispatch({ type: "blocked", payload: false });
        errRef.current.classList.remove('visible-validate-err');
    }, 3000);
}


export const checkInputValidity = (regex, ref) => {
    console.log(ref);
    if (!regex.test(ref.current.value)) {
        ref.current.classList.add("wrong-auth-input");
        return false;
    }
    else {
        ref.current.classList.remove("wrong-auth-input");
        return true;
    }
}
export function validateFormInputs(formInputs) {
    let isValid = true;
    const errors = {};
    const passwordsInputs = formInputs.filter(input => input.type === "password");
    const hasToRepeatPassword = passwordsInputs.length === 2 ? true : false;
    formInputs.forEach(input => {
        const value = input.ref.current.value;
        switch (input.type) {
            case 'email':
                // Simple email regex, for example purposes only.
                const emailRegex = /\S+@\S+\.\S+/;
                if (!emailRegex.test(value)) {
                    errors[input.label.toLowerCase()] = 'Invalid email address';
                    isValid = false;
                }
                break;
            case 'text':
                // Example: username must be between 4 and 24 characters.
                if (value.length < 4 || value.length > 24) {
                    errors[input.label.toLowerCase()] = 'Username must be between 4 and 24 characters';
                    isValid = false;
                }
                break;
            case 'password':
                // Example: password must be at least 8 characters.
                if (value.length < 8) {
                    errors[input.label.toLowerCase()] = 'Password must be at least 8 characters';
                    isValid = false;
                }
                break;
            default:
                errors[input.label.toLowerCase()] = 'Invalid input type';
                isValid = false;
                break;
        }
    });

    // Extra check to ensure 'Password' and 'Repeat Password' match
    if (hasToRepeatPassword) {
        const passwordValue = formInputs.find(input => input.label === 'Password')?.ref.current.value;
        const repeatedPasswordValue = formInputs.find(input => input.label === 'Repeat Password')?.ref.current.value;
        if (passwordValue !== repeatedPasswordValue) {
            errors['repeat password'] = 'Passwords do not match';
            isValid = false;
        }
    }

    return {
        isValid,
        errors
    };
}

export const redirectOnAuth = (rejectRoute, authRoute, navigate) => {
    const auth = getAuth();
    if (auth.currentUser === null) {
        if (rejectRoute) {
            navigate(rejectRoute);
        }
    }
    else {
        navigate(authRoute);
    }
}

export const PasswordAuthUtilities = {
    requestChangeOfPassword: (passwordResetEmail, passwordDispatch,errDispatch, ref) => {
        if (checkInputValidity(/\S+@\S+\.\S+/, passwordResetEmail)) {
            passwordDispatch({ type: "isLoading", payload: true });
            AxiosFacade.requestUserPasswordReset(passwordResetEmail.current.value).then(() => {
                alert("An Email With Reset Code Has Been Sent To You")
                passwordDispatch({ type: "emailSent", payload: true });
                passwordDispatch({ type: "isLoading", payload: false });
            }).catch(() => {
                getValidateErrors({ validateErr: { err: "Something Went Wrong" } }, errDispatch, ref)
                passwordDispatch({ type: "isLoading", payload: false });
            })
        }
    },
    resetUserPassword: (resetCode, passwordResetEmail, passwordDispatch,errDispatch, newPassword,ref) => {
        if (checkInputValidity(/^[A-Za-z0-9]{6}$/, resetCode) && checkInputValidity(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, newPassword)) {
            AxiosFacade.resetUserPassword(passwordResetEmail.current.value, resetCode.current.value.toUpperCase(), newPassword.current.value).then(() => {
                alert("Password Changed");
                passwordDispatch({ type: "passwordReset", payload: false });
                passwordDispatch({ type: "emailSent", payload: false });
                passwordDispatch({ type: "resetDone", payload: false });
            }).catch(() => {
                getValidateErrors({ validateErr: { err: "The Provided Code Is Invalid" } }, errDispatch, ref)
            })
        }
    }
}

