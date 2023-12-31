
const ServiceMainInput = ({children,heading}) => {
    return (
        <div className="serivce-main-input">
            <p className="input-heading">{heading}</p>
            <div className="serivce-main-input__container">
                {children}
            </div>
        </div>
    )
}

export default ServiceMainInput;