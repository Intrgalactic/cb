import SectionH2 from "src/components/sectionH2";
import Pricing from "./pricing";



const Hero = () => {
    
    return (
        <section className="choose-package-hero">
            <SectionH2 content="Choose Your Ideal Package: Tailored Options at Your Fingertips"/>
            <Pricing/>
        </section>
    )
}

export default Hero;