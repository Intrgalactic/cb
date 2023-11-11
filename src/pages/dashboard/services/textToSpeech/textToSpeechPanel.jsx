import TTSServiceInputSection from "src/components/services/textToSpeech/ttsServiceInputSection";
import ServiceHeading from "src/layouts/dashboard/services/serviceHeading"

const TextToSpeechPanel = () => {
    return (
        <div className="text-to-speech__panel service-panel">
            <ServiceHeading heading="Text To Speech" description="Easily Convert Your Text To Speech With Hassle-Free Process"/>
            <TTSServiceInputSection/>
        </div>
    )
}

export default TextToSpeechPanel;