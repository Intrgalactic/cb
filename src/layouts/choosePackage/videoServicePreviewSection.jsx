import enhance from 'src/assets/images/enhance.png';
import microphone from 'src/assets/images/microphone.png';
import VideoServicePreview from './videoServicePreview';

const VideoServicePreviewSection = () => {
    const items = [{
        img: enhance,
        alt: "video",
        heading: "Ultra Smooth And Interpolated",
        subHeading: "Provide seamless motion and sharp transitions that enhance the visual appeal and captivate your audience's attention, enriching their viewing experience.",
        src: "",
        width: "54px",
        height: "39px"
    }, {
        img: microphone,
        alt: "microphone",
        heading: "Cutting-Edge And Studio Quality",
        subHeading: "Elevate your audiovisual endeavors to the realm of artistry, transforming each project into a cinematic masterpiece that resonates with your audience",
        src: "",
        width: "19px",
        height: "37.5px"
    }]
    return (
        <section className="video-service-preview-section">
            <div className='preview-section__container'>
                {items.map((item, index) => (
                    <VideoServicePreview width={item.width} height={item.height} src={item.src} alt={item.alt} heading={item.heading} subHeading={item.subHeading} img={item.img} key={index} />
                ))}
            </div>
        </section>
    )
}

export default VideoServicePreviewSection;