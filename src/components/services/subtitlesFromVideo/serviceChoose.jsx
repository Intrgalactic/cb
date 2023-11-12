
const ServiceChoose = ({ heading,gradientSpan, contentHeading, contentSubMsg, contentDescription, btnText, action }) => {
    return (
        <div className="service-choose">
            <div className="service-choose-heading__container">
                <p className="service-choose-heading">{heading}</p>
            </div>
            <div className="service-choose__content">
                <h3>{contentHeading}</h3>
                <p>{contentDescription}</p>
                <h3>{contentSubMsg}</h3>
                <button onClick={action}>{btnText}</button>
            </div>
        </div>
    )
}

export default ServiceChoose;