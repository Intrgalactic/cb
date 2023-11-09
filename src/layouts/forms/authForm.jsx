import { forwardRef, useReducer, useRef, useState } from "react";
import AppleAuthBtn from "src/components/appleAuthBtn"
import GoogleAuthBtn from "src/components/googleAuthBtn"
import AuthInput from "./authInput";
import ButtonLoader from "src/components/buttonLoader";

const AuthForm = forwardRef((props, ref) => {
    const { btnText, authType, gAction, aAction, children, errDispatch, heading, action, hasScndBtn, blocked, scndBtnText } = props;
    const checkIsBlockedAndPass = (e) => {
        e.preventDefault();
        if (blocked === false) action();
    }

    const passwordInitialState = {
        passwordReset: undefined,
        emailSent: false,
        isLoading: false,
        resetDone: undefined
    }
    const passwordReducer = (state, action) => {
        for (const key of Object.keys(passwordInitialState)) {
            if (action.type === key) {
                return { ...state, [key]: action.payload };
            }
        }
    }
    const [passwordState, passwordDispatch] = useReducer(passwordReducer, passwordInitialState);

    const newPassword = useRef("");
    const resetCode = useRef("");
    const passwordResetEmail = useRef("");
    const requestPasswordChange = async (e) => {
        e.preventDefault();
        (await import("src/utilities/auth")).PasswordAuthUtilities.requestChangeOfPassword(passwordResetEmail,passwordDispatch,errDispatch,ref);
    }
    const resetPassword = async (e) => {
        e.preventDefault();
        (await import("src/utilities/auth")).PasswordAuthUtilities.resetUserPassword(resetCode,passwordResetEmail,passwordDispatch,errDispatch,newPassword,ref);
    }
  
    return (
        <article className="auth-form">
            <h3 className="auth-form-heading">{heading}</h3>
            <form>
                {children}
                {passwordState.passwordReset === true &&
                    <AuthInput disabled={passwordState.emailSent === true ? true : false} label="Enter Email For Password Reset" ref={passwordResetEmail} type="email" />
                }
                {passwordState.emailSent === true &&
                    <>

                        <AuthInput label="Enter Reset Code" ref={resetCode} type="text" />
                        <AuthInput label="Enter New Password" ref={newPassword} type="password" />
                    </>
                }
                <div className="action-btns__container">
                    <button className="auth-form__form-btn" disabled={blocked ? true : false} onClick={passwordState.passwordReset && passwordState.passwordReset !== 'blocked' && passwordState.emailSent === false ? requestPasswordChange : passwordState.emailSent === true ? resetPassword : checkIsBlockedAndPass}>{passwordState.passwordReset && passwordState.passwordReset !== 'blocked' ? "Reset" : btnText}</button>
                    {hasScndBtn === false || passwordState.passwordReset === 'blocked' ? <></> : passwordState.resetDone === undefined && <button className="auth-form__form-btn" disabled={passwordState.passwordReset ? true : false} onClick={(e) => { e.preventDefault(); passwordDispatch({ type: "passwordReset", payload: true }) }}>{passwordState.isLoading === false ? scndBtnText : <ButtonLoader />}</button>
                    }
                </div>

            </form>
            <div className="third-party__container">
                {authType === "register" ?
                    <>

                        <GoogleAuthBtn action={gAction} btnText="Sign Up With Google" />
                        <AppleAuthBtn action={aAction} btnText="Sign Up With Apple" />
                    </> :
                    <>
                        <GoogleAuthBtn action={gAction} btnText="Sign In With Google" />
                        <AppleAuthBtn action={aAction} btnText="Sign In With Apple" />
                    </>
                }
            </div>
        </article>
    )
})


export default AuthForm