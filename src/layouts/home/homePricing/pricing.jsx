import SectionH2 from "src/components/sectionH2";
import PricingBox from "./pricingBox";
import { pricingItems } from "src/utilities/utils";

const Pricing = () => {
    return (
        <section className="pricing">
            <SectionH2 content="Find Your Ideal Fit: Flexible Pricing for Every Content Creator's Journey!" />
            <div className="pricing__pricing-items__container">
                {pricingItems.map((pricingItem, index) => (
                    <PricingBox isLogged={true} heading={pricingItem.heading} src={pricingItem.src} alt={pricingItem.alt} href={pricingItem.href} btn={pricingItem.btn} description={pricingItem.description} key={index} price={pricingItem.price} items={pricingItem.items} />
                ))}
            </div>
        </section>
    )
}

export default Pricing;