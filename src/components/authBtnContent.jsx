
const AuthBtnContent = ({source,btnText}) => {
    return (
        <>
            <img src={source} alt="google" width="30px" height="30px" />
            <p>{btnText}</p>
        </>
    )
}

export default AuthBtnContent;