import SettingsBtn from "../../settingsBtn";

const ManagePaymentDetail = ({ btnSettingsArr }) => {
    return (
        <div className="manage-payment-detail">
            {btnSettingsArr.map((settings, index) => (
                <SettingsBtn disable={settings.disable} disableText={settings.disableText} enableText={settings.enableText} action={settings.action} key={index} />
            ))}
        </div>
    )
}

export default ManagePaymentDetail;