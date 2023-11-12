import { useWindowSize } from "@uidotdev/usehooks";
import NavDetector from "../../navDetector";
import SpeechToTextPanel from "./speechToTextPanel";
import 'src/styles/services/stt.css';

const SpeechToText = () => {
    const windowSize = useWindowSize();
    return (
        <div className="speech-to-speech service-page">
            <NavDetector windowSize={windowSize} />
            <SpeechToTextPanel />
        </div>
    )
}

export default SpeechToText;