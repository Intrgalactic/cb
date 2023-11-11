import { useWindowSize } from "@uidotdev/usehooks";
import NavDetector from "../../navDetector";
import "src/styles/service.css";
import 'src/styles/services/tts.css';
import TextToSpeechPanel from "./textToSpeechPanel";

const TextToSpeech = () => {
    const windowSize = useWindowSize();
    return (
        <div className="text-to-speech service-page">
            <NavDetector windowSize={windowSize}/>
            <TextToSpeechPanel/>
        </div>
    )
}

export default TextToSpeech;