import { pricingItems } from "src/utilities/utils";
import PricingBox from "../home/homePricing/pricingBox";

const Pricing = () => {
    return (
        <div className="choose-package-pricing">
             <div className="pricing__pricing-items__container">
                {pricingItems.map((pricingItem, index) => (
                    <PricingBox heading={pricingItem.heading} src={pricingItem.src} alt={pricingItem.alt} href={pricingItem.href} btn={pricingItem.btn} description={pricingItem.description} key={index} price={pricingItem.price} items={pricingItem.items} />
                ))}
            </div>
        </div>
    )
}

export default Pricing;