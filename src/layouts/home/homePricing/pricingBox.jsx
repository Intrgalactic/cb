import pricingCheck from 'src/assets/images/pricing-check.png';
import scrollDown from 'src/assets/images/scroll-down.png';

const PricingBox = ({ heading, price, items, description,href,btn }) => {
    return (
        <article className="pricing__box">
            <h3>{heading}</h3>
            <p className="pricing__box-description">{description}</p>
            <div className="pricing__box-pricing">
                <p><span>{price}</span> / Month</p>
            </div>
            <h4>Includes:</h4>
            <div className="pricing__box-items__container">
                {items.map((item, index) => (
                    <div className="pricing__box-item" key={index}>
                        <img src={pricingCheck} width="35px" height="26.83px" />
                        <p>{item}</p>
                    </div>
                ))}
            </div>
            <div className="pricing__box-scroll">
                <img src={scrollDown} width="35px" />
                <p>Scroll To See More</p>
            </div>
            <button className="pricing__box-btn" onClick={() => {window.open(`${href}`,"_blank")}}>{btn}</button>        
        </article>
    )
}

export default PricingBox;