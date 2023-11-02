import SectionH2 from "src/components/sectionH2";
import BenefitsBox from "./benefitsBox";

const BenefitsAside = () => {
    const benefits = [{
        heading: "Time-Saving Efficiency",
        description: "Streamline your workflow and save valuable time with automated speech conversion, eliminating tedious manual transcription."
    }, {
        heading: "Enhanced Accessibility",
        description: "Reach a wider audience by adding professional subtitles or converting text to speech, ensuring inclusivity and engagement."
    }, {
        heading: "High Accuracy",
        description: "Experience precise transcriptions and conversions with our cutting-edge technology, guaranteeing the fidelity of your content."
    }, {
        heading: "Boosted Productivity",
        description: "Maximize output and efficiency by eliminating manual transcription, repurposing content, and navigating through files effortlessly."
    }]

    return (
        <section className="benefits__aside">
            <SectionH2 content="Discover the Advantages of Our Speech Conversion Services" />
            <div className="benefits__aside-boxes__container">
                {benefits.map((benefit, index) => (
                    <BenefitsBox heading={benefit.heading} description={benefit.description} key={index} />
                ))}
            </div>
        </section>
    )
}

export default BenefitsAside;