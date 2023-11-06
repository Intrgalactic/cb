import SectionH2 from "src/components/sectionH2";
import ServiceBox from "./serviceBox";
import camera from "src/assets/images/camera.png"
import subtitles from 'src/assets/images/subtitles.png'
import qoutes from 'src/assets/images/quotes.png';
import microphone from 'src/assets/images/microphone.png'
import enhance from 'src/assets/images/enhance.png';
import SectionContainer from "src/components/sectionContainer";

const Services = () => {
    const services = [{
        img: camera,
        heading: "Getting Subtitles from Video ",
        href: "/try-it-out/sfv",
        alt: "camera",
        description: "Easily generate precise subtitles to broaden video content accessibility and engagement",
    }, {
        img: subtitles,
        heading: "Adding Subtitles to Video",
        href: "/try-it-out/stv",
        alt: "subtitles",
        description: "Improve viewer experience with professional, inclusive subtitles"
    }, {
        img: qoutes,
        href: "/try-it-out/stt",
        heading: "Speech To Text",
        description: "Quickly convert spoken words to text, boosting efficiency in interviews and meetings."
    }, {
        img: microphone,
        heading: "Text To Speech",
        alt: "microphone",
        href: "/try-it-out/tts",
        description: "Turn text into engaging audio with varied voice options for diverse content"
    }, {
        img: enhance,
        heading: "Video Enhance",
        alt: "video",
        href: "/try-it-out/ve",
        description: "Upgrade video clarity and detail effortlessly for various types of footage"
    }]
    return (
        <section className="services">
                <SectionH2 content={`Save Time and Streamline Your Workflow with Our Services`} />
                {services.map((service, index) => (
                    <ServiceBox heading={service.heading} description={service.description} href={service.href} key={index} image={service.img} />
                ))}
        </section>
    )
}

export default Services;    