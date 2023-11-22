import { memo} from "react";
import VoiceSample from "./voiceSampleBtn";

const VoiceBox = memo(function VoiceBox({ voice, setSelectedVoice, selectedVoice }) {
    const selectVoice = () => {
        setSelectedVoice(voice)
    }
    return (
        <div className="voice-box">
            <h5>{voice.name}</h5>
            <p>{voice.category}</p>
            <p>{voice.description}</p>
            <div className="voice-box-btn__container">
                <button className="voice-box-btn" onClick={selectVoice}>
                    {selectedVoice !== undefined && selectedVoice.name === voice.name ? "Using" : "Use"}
                </button>
                <VoiceSample name={voice.name}/>
            </div>
        </div>
    )
});

export default VoiceBox;