
const BenefitsBox = ({heading,description}) => {
    return (
        <article className="benefits__aside-box">
            <h3 className="benefits__aside-box__h3">{heading}</h3>
            <p className="benefits__aside-box__p">{description}</p>
        </article>
    )
}

export default BenefitsBox;