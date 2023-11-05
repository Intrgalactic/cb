import AudioServicePreview from "./audioServicePreview";
import quotes from 'src/assets/images/quotes.png';
import audio from 'src/assets/13.01.mp3';
const AudioServicePreviewSection = () => {
    const items = [{
        alt: "quotes",
        img: quotes,
        heading: "Achieve near-perfect precision",
        subHeading: "ensure your spoken ideas are transcribed faithfully, streamlining your workflow and enhancing productivity",
        width:"50.5px",
        height: "37.5px",
        src: audio,
    }]
    return (
        <section className="audio-service-preview-section">
            {items.map((item,index) => (
                <AudioServicePreview img={item.img} src={item.src} alt={item.alt} width={item.width} height={item.height} heading={item.heading} subHeading={item.subHeading} key={index}/>
            ))}
        </section>
    )
}

export default AudioServicePreviewSection;