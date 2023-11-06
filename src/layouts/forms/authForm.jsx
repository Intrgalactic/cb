import { useRef, useState } from "react";
import AppleAuthBtn from "src/components/appleAuthBtn"
import GoogleAuthBtn from "src/components/googleAuthBtn"
import AuthInput from "./authInput";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const AuthForm = ({ btnText, authType, gAction, aAction, scndAction, children, heading, action, hasScndBtn, blocked, scndBtnText }) => {
    const checkIsBlockedAndPass = (e) => {
        e.preventDefault();
        if (blocked === false) action();
    }
    const [passwordReset,setPasswordReset] = useState();
    const passwordResetEmail = useRef("");
    const resetPassword = (e) => {
        e.preventDefault();
        if (checkResetEmailValidity()) {
            const auth = getAuth();
            sendPasswordResetEmail(auth,passwordResetEmail.current.value).then(() => {
                alert("The Reset Email Has Been Sent");
                setPasswordReset('blocked');
            })
        }
    }
    const checkResetEmailValidity = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(passwordResetEmail.current.value)) {
            passwordResetEmail.current.classList.add("wrong-auth-input");
            return false;
        }
        else {
            passwordResetEmail.current.classList.remove("wrong-auth-input");
            return true;
        }
    }
    return (
        <article className="auth-form">
            <h3 className="auth-form-heading">{heading}</h3>
            <form>
                {children}
                {passwordReset === true &&
                    <AuthInput label="Enter Email For Password Reset" ref={passwordResetEmail} type="email"/>
                }
                <div className="action-btns__container">
                    <button className="auth-form__form-btn" onClick={passwordReset && passwordReset !== 'blocked' ? resetPassword : checkIsBlockedAndPass}>{passwordReset && passwordReset !== 'blocked' ? "Reset" : btnText}</button>
                    {hasScndBtn === false || passwordReset === 'blocked' ? <></> : <button className="auth-form__form-btn" disabled={passwordReset ? true : false} onClick={(e) => {e.preventDefault();setPasswordReset(true)}}>{scndBtnText}</button>
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
}

export default AuthForm