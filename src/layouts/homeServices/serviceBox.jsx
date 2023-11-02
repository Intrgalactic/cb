import { Link } from "react-router-dom";

const ServiceBox = ({ heading, image, alt, description,href }) => {
    return (
        <article className="services__service-box">
            <div className="services__service-box__container">
                <img src={image} alt={alt} loading="lazy" width="80"/>
                <h3 className="service-box__h3">{heading}</h3>
                <p className="service-box__p">{description}</p>
                <button className="service-box__btn" onClick={() => {window.open(`${href}`,"_blank")}}>Try</button>
            </div>
        </article>
    )
}

export default ServiceBox;