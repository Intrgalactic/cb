import { useWindowSize } from "@uidotdev/usehooks";
import NavDetector from "../../navDetector";
import VoiceCloningPanel from "./voiceCloningPanel";
import "src/styles/services/vc.css";

const VoiceCloning = () => {
    const windowSize = useWindowSize();
    return (
        <div className="voice-cloning service-page">
            <NavDetector windowSize={windowSize}/>
            <VoiceCloningPanel/>
        </div>
    )
}

export default VoiceCloning