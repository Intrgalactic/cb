import { memo } from "react";

const ServiceHeading = memo(function ServiceHeading({heading,description}) {
    return (
        <div className="service-heading">
            <h1>{heading}</h1>
            <p>{description}</p>
        </div>
    )  
});

export default ServiceHeading;