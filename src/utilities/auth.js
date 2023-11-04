
export const errInitialState = {
    validateErr: false,
    err: "",
    blocked: false,
}

export const errReducer = (state,action) => {
    for (const key of Object.keys(errInitialState)) {
        console.log(key);
        if (key === action.type) {
            return {...state,[key]:action.payload};
        }
    }
}

export const getValidateErrors = (errState,errDispatch,errRef) => {
    const errKey = Object.keys(errState.validateErr)[0];
    const err = errState.validateErr[errKey];
    errRef.current.classList.add('visible-validate-err');
    errDispatch({type:"err",payload:err})
    errDispatch({type:"blocked",payload:true});
    setTimeout(() => {
        errDispatch({type:"blocked",payload:false});
        errRef.current.classList.remove('visible-validate-err');
    },3000);    
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
