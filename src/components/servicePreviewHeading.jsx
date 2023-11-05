
const ServicePreviewHeading = ({img,alt,width,height,subHeading,heading}) => {
    return (
        <>
            <div className="service-preview__heading">
                <img src={img} alt={alt} width={width} height={height} />
                <h3>{heading}</h3>
            </div>
            <p className="service-preview__sub-heading">{subHeading}</p>
        </>
    )
}

export default ServicePreviewHeading;