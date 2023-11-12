import VoiceSlider from "./voiceSlider"

const VoiceSlidersSection = () => {
    return (
        <div className="voice-sliders-section">
            <VoiceSlider type="stability" leftScale="More Variable" heading="Stability" rightScale="More Stable" defaultValue="30%"/>
            <VoiceSlider type="clarity" leftScale="Low" rightScale="High" heading="Clarity + Similiarity Enhancement" defaultValue="50%"/>
        </div>
    )
}

export default VoiceSlidersSection;