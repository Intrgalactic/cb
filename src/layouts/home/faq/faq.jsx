import SectionH2 from "src/components/sectionH2";
import FaqQuestions from "./faqQuestions";

const Faq = () => {
    return (
        <div className="faq">
            <SectionH2 content="Frequently Asked Questions"/>
            <FaqQuestions/>
        </div>
    )
}

export default Faq;