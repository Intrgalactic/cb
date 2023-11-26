import twoStep from 'src/assets/images/icons/gradient-details/twoStep.png';
import SettingsBtn from '../settingsBtn';

const TwoStepAuth = ({action,isEnabled}) => {
    return (
        <div className="two-step-auth">
            <div className="two-step-auth__heading">
                <img src={twoStep} alt="shield"/>
                <div className='two-step-auth__heading__inner'>
                    <h4>2 Step Authentication</h4>
                    <p>{isEnabled ? "Enabled" : "Disabled"}</p>
                </div>
            </div>
            <SettingsBtn disable={false} enableText="Enable" disableText="Remove" action={action}/>
        </div>
    )
}

export default TwoStepAuth;