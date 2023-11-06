import { useEffect, useReducer, useRef, useState } from "react"
import AuthForm from "../forms/authForm"
import AuthInput from "../forms/authInput"
import RegisterBenefits from "./registerBenefits"
import ValidateErr from "src/components/validateError"
import LoadingModal from "../loadingModal"
import { errInitialState, errReducer, getValidateErrors, validateFormInputs } from "src/utilities/auth"
import { AxiosFacade } from "src/lib/axios"
import { GoogleAuthProvider, OAuthProvider, createUserWithEmailAndPassword, getAuth, } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { processThirdPartyAuth } from "src/utilities/thidPartyAuth"
import { FirebaseFacade } from "src/lib/firebase"

const RegisterAuth = () => {

    const [errState, errDispatch] = useReducer(errReducer, errInitialState);
    const auth = getAuth();
    const navigate = useNavigate();
    const appleAction = () => {
        const provider = new OAuthProvider('apple.com');
        provider.addScope('email');
        provider.addScope('name');
        processThirdPartyAuth(setIsProcessing, navigate, errDispatch, provider);
    }
    const registerAccount = () => {
        const formValidity = validateFormInputs(formInputs);
        if (formValidity.isValid) {
            setIsProcessing(true);
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((user) => {
                AxiosFacade.createUser("user", usernameRef.current.value, emailRef.current.value).then(() => {
                    navigate('/choose-package');
                    setIsProcessing(false);
                }).catch(err => {
                    throwAndUnload({ error: err });
                })
            }).catch(err => {
                const errMsg = FirebaseFacade.getErrorMessage(err.message);
                throwAndUnload({ error: errMsg });
            })
        }
        else {
            errDispatch({ type: "validateErr", payload: formValidity.errors })
        }
    }
    const [isProcessing, setIsProcessing] = useState(false);

    const errRef = useRef();
    const emailRef = useRef("");
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const repeatedPasswordRef = useRef("");
    const formInputs = [{
        type: "email",
        ref: emailRef,
        label: "Email"
    }, {
        type: "text",
        ref: usernameRef,
        label: "Username"
    }, {
        type: "password",
        ref: passwordRef,
        label: "Password"
    }, {
        type: "password",
        ref: repeatedPasswordRef,
        label: "Repeat Password"
    }]

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
            <section className="auth register-auth">
                <AuthForm blocked={errState.blocked} hasScndBtn={false} action={registerAccount} heading="Create An Account" btnText="Join" gAction={googleAction} aAction={appleAction} authType="register">
                    {formInputs.map((input, index) => (
                        <AuthInput label={input.label} ref={input.ref} type={input.type} key={index} />
                    ))}
                </AuthForm>
                <RegisterBenefits heading="Upgrade Your Content Speed Creation" subHeading="Get All Tools The Content Creator Needs With Only One Click" />
            </section>
            <LoadingModal isProcessing={isProcessing} />
        </>
    )
}

export default RegisterAuth;