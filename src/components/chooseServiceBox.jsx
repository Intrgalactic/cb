import ChooseServiceRow from "./chooseServiceRow";
import enhance from 'src/assets/images/icons/video.png';
import microhpone from 'src/assets/images/icons/microphone.png';
import quotes from 'src/assets/images/icons/white-services/quotes.png';
import subtitles from 'src/assets/images/icons/white-services/subtitles.png';
import camera from 'src/assets/images/icons/white-services/camera.png';
import clone from 'src/assets/images/icons/white-services/clone.png';

const ChooseServiceBox = () => {
    const services = [{
        name: "Text To Speech",
        img: microhpone,
        link: "/dashboard/services/text-to-speech",
    },
    {
        name: "Speech To Text",
        link: "/dashboard/services/speech-to-text",
        img: quotes,
    },
    {
        name: "Video Enhancer",
        img: enhance,
        link: "/dashboard/services/video-enhancer",
    },
    {
        name: "Subtitles To Video",
        img: subtitles,
        link: "/dashboard/services/subtitles-to-video",
    },
    {
        name: "Subtitles From Video",
        img: camera,
        link: "/dashboard/services/subtitles-from-video",
    },
    {
        name: "Voice Cloning",
        img: clone,
        link: "/dashboard/services/voice-cloning",
    }]
    return (
        <div className="dashboard-box__choose-service__box">
            <ChooseServiceRow items={services.slice(0,3)}/>
            <ChooseServiceRow items={services.slice(3)}/>
        </div>
    )
}

export default ChooseServiceBox;