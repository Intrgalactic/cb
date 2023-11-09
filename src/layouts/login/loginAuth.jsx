import { useEffect, useReducer, useRef, useState } from "react";
import AuthForm from "../forms/authForm";
import AuthInput from "../forms/authInput";
import ValidateErr from "src/components/validateError";
import { errInitialState, errReducer, getValidateErrors, redirectOnAuth, validateFormInputs } from "src/utilities/auth";
import { processThirdPartyAuth } from "src/utilities/thidPartyAuth";
import { useNavigate } from "react-router-dom";
import LoadingModal from "../loadingModal";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AxiosFacade } from "src/lib/axios";
import { OAuthProvider } from "firebase/auth";
import { FirebaseFacade } from "src/lib/firebase";


const LoginAuth = () => {
    const navigate = useNavigate();
    const appleAction = () => {
        const provider = new OAuthProvider('apple.com');
        provider.addScope('email');
        provider.addScope('name');
        processThirdPartyAuth(setIsProcessing, navigate, errDispatch, provider);
    }
    const auth = getAuth();
    const [errState, errDispatch] = useReducer(errReducer, errInitialState);
    const [isProcessing, setIsProcessing] = useState(false);
    const errRef = useRef();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const formInpts = [{
        type: "email",
        ref: emailRef,
        label: "Email"
    }, {
        type: "password",
        ref: passwordRef,
        label: "Password"
    }];
    const loginToAccount = () => {
        const formValidity = validateFormInputs(formInpts);
        if (formValidity.isValid) {
            setIsProcessing(true);
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then(() => {
                const user = AxiosFacade.getUser(emailRef.current.value, true);
                if (user.isPaying === "true") {
                    navigate("/dashboard");
                }
                else {
                    navigate("/choose-package");
                }
            }).catch(err => {
                const errMsg = FirebaseFacade.getErrorMessage(err.message);
                throwAndUnload({ error: errMsg });
            })
        }
        else {
            errDispatch({ type: "validateErr", payload: formValidity.errors })
        }
    }
    useEffect(() => {
        if (errState.validateErr) {
            getValidateErrors(errState, errDispatch, errRef);
        }
        else {
            errDispatch({ type: "err", payload: false })
        }
    }, [errState.validateErr]);
    const googleAction = () => {
        const provider = new GoogleAuthProvider();
        processThirdPartyAuth(setIsProcessing, navigate, errDispatch, provider);
    }
    const throwAndUnload = (err) => {
        setIsProcessing(false);
        errDispatch({ type: "validateErr", payload: err })
    }
    return (
        <>
            <ValidateErr ref={errRef} err={errState.err} />
            <section className="auth login-auth">
                <AuthForm ref={errRef} errDispatch={errDispatch} scndAction={() => {}} scndBtnText="Password Forgot" hasScndText={false} blocked={errState.blocked} action={loginToAccount} heading="Login To An Account" gAction={googleAction} aAction={appleAction} authType="login" btnText="Login">
                    {formInpts.map((input, index) => (
                        <AuthInput label={input.label} ref={input.ref} type={input.type} key={index} />
                    ))}
                </AuthForm>
            </section>
            <LoadingModal isProcessing={isProcessing} />
        </>
    )

}

export default LoginAuth;