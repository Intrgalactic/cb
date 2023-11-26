
const SettingsBtn = ({ disable,disableText,enableText,action}) => {
    return (
        <button className="settings-btn" style={!disable ? { backgroundColor: "#0057FF" } : { backgroundColor: "#5F0101" }} onClick={action}>
            {disable ?  disableText : enableText}
        </button>
    )
}

export default SettingsBtn;