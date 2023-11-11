import { memo } from "react";

const VoiceBox = memo(function VoiceBox({name,category,description}) {
    return (
        <div className="voice-box">
            <h5>{name}</h5>
            <p>{category}</p>
            <p>{description}</p>
            <div className="voice-box-btn__container">
                <button className="voice-box-btn">
                    Use
                </button>
                <button className="voice-box-btn">
                    Sample
                </button>
            </div>
        </div>
    ) 
});

export default VoiceBox;