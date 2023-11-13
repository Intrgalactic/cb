const ServiceSectionHeading = ({src,alt,heading,subHeading}) => {
    return (
        <div className="service-section__heading">
            <img src={src} alt={alt}/>
            <h2>{heading}</h2>
            <p>{subHeading}</p>
        </div>
    )
}

export default ServiceSectionHeading;