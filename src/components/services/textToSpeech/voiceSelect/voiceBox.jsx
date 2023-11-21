import { memo } from "react";

const VoiceBox = memo(function VoiceBox({voice,setSelectedVoice,selectedVoice}) {
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
                <button className="voice-box-btn">
                    Sample
                </button>
            </div>
        </div>
    ) 
});

export default VoiceBox;