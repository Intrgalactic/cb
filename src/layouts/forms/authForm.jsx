import AppleAuthBtn from "src/components/appleAuthBtn"
import GoogleAuthBtn from "src/components/googleAuthBtn"

const AuthForm = ({ btnText, authType, gAction,aAction,children,heading,action,blocked }) => {
    const checkIsBlockedAndPass = (e) => {
        e.preventDefault();
        if (blocked === false) action();
    }
    return (
        <article className="auth-form">
            <h3 className="auth-form-heading">{heading}</h3>
            <form>
                {children}
                <button className="auth-form__form-btn" onClick={checkIsBlockedAndPass}>{btnText}</button>
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