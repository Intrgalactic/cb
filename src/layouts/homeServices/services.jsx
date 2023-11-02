import SectionH2 from "src/components/sectionH2";
import ServiceBox from "./serviceBox";


const Services = () => {
    const services = [{
        img:'src/assets/images/camera.png',
        heading: "Getting Subtitles from Video ",
        href:"/try-it-out/sfv",
        description: "Easily generate precise subtitles to broaden video content accessibility and engagement",
    },{
        img:'src/assets/images/subtitles.png',
        heading:"Adding Subtitles to Video",
        href:"/try-it-out/stv",
        description: "Improve viewer experience with professional, inclusive subtitles"
    },{
        img: "src/assets/images/quotes.png",
        href:"/try-it-out/stt",
        heading: "Speech To Text",
        description: "Quickly convert spoken words to text, boosting efficiency in interviews and meetings."
    },{
        img: "src/assets/images/microphone.png",
        heading: "Text To Speech",
        href:"/try-it-out/tts",
        description: "Turn text into engaging audio with varied voice options for diverse content"
    },{
        img: 'src/assets/images/enhance.png',
        heading: "Video Enhance",
        href:"/try-it-out/ve",
        description: "Upgrade video clarity and detail effortlessly for various types of footage"
    }]
    return (
        <section className="services">
            <SectionH2 content={`Save Time and Streamline Your Workflow with Our Services`}/>
            {services.map((service,index) => (
                <ServiceBox heading={service.heading} description={service.description} href={service.href} key={index} image={service.img}/>
            ))}
        </section>
    )
}

export default Services;    