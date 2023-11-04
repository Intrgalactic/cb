import BenefitsAside from "./benefitsAside";
import moneyBag from 'src/assets/images/money-bag.png';

const Benefits = () => {
    return (
        <section className="benefits">
            <img src={moneyBag} width="270px" height="200px"/>
            <BenefitsAside/>
        </section>
    )
}

export default Benefits;