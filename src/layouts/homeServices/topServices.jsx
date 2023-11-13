import ServiceSectionHeading from "./serviceSectionHeading"
import SingleService from "./singleService"
import topServicesOrb from 'src/assets/images/icons/home/top-services-orb.png';

const TopServices = () => {
    return (
        <div className="top-services">
            <ServiceSectionHeading src={topServicesOrb} alt="Tools Orb" subHeading="Explore a New Era of Content Creation with AI: Experience Unparalleled Efficiency, Quality, and Innovation" heading="Revolutionize Your Content Creation with AI-Powered Tools" description="Explore a New Era of Content Creation with AI: Experience Unparalleled Efficiency, Quality, and Innovation" />
            <div className="services__container">
                <SingleService autoPlay={false} heading="Text To Speech" type="video/mp4" src="" description="In a world driven by technological innovation, our Text-to-Speech services represent the very essence of cutting-edge AI. Through the seamless fusion of advanced algorithms and state-of-the-art neural networks, we have harnessed the power of artificial intelligence to transform plain text into an immersive auditory experience" />
                <SingleService autoPlay={false} heading="Speech To Text" description="In a future where voice communication is infinitely powerful, our Speech-to-Text services represent the cutting edge of AI innovation. Modern neural networks and cutting-edge algorithms have been effortlessly combined by us, allowing us to use artificial intelligence's revolutionary powers to turn spoken language into flawlessly accurate text transcriptions" type="video/mp4" src="" />
            </div>
        </div>
    )
}

export default TopServices;