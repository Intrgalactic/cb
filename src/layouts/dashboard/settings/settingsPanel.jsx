import Details from "src/components/dashboard/settings/account/details"
import PaymentDetails from "src/components/dashboard/settings/payments/paymentDetails/paymentDetails";
import SettingsBox from "src/components/dashboard/settings/settingsBox"

const SettingsPanel = () => {
    return (
        <div className="settings-panel">
            <SettingsBox heading="Account" subHeading="Here you can manage personalized account settings">
                <Details/>
            </SettingsBox>
            <SettingsBox heading="Payments" subHeading="Here you can customize secure payment settings">
                <PaymentDetails/>
            </SettingsBox>
        </div>
    )
}

export default SettingsPanel;