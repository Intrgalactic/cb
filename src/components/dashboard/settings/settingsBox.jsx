
const SettingsBox = ({heading,subHeading,children}) => {
    return (
        <div className="settings-box">
            <div className="settings-box__heading">
                <h3>{heading}</h3>
                <p>{subHeading}</p>
            </div>
            {children}
        </div>
    )
}

export default SettingsBox;