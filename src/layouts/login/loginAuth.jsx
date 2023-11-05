import { useEffect, useReducer, useRef, useState } from "react";
import AuthForm from "../forms/authForm";
import AuthInput from "../forms/authInput";
import ValidateErr from "src/components/validateError";
import { errInitialState, errReducer, getValidateErrors, validateFormInputs } from "src/utilities/auth";
import { processGoogleAuth } from "src/utilities/thidPartyAuth";
import { useNavigate } from "react-router-dom";
import LoadingModal from "../loadingModal";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AxiosFacade } from "src/lib/axios";

const LoginAuth = () => {
    const navigate = useNavigate();
    const appleAction = () => {

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
                if (user.isPaying) {
                    navigate("/dashboard");
                }
                else {
                    navigate("/choose-package");
                }
            }).catch(err => {
                console.log(err);
                errDispatch({ type: "validateErr", payload: { err: err.message ? err.message : "Something Went Wrong" } });
                setIsProcessing(false);
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
        processGoogleAuth(setIsProcessing, navigate, errDispatch);
    }
    return (
        <>
            <ValidateErr ref={errRef} err={errState.err} />
            <section className="auth login-auth">
                <AuthForm blocked={errState.blocked} action={loginToAccount} heading="Login To An Account" gAction={googleAction} aAction={appleAction} authType="login" btnText="Login">
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