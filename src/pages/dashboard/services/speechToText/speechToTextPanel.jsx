import STTServiceInputSection from "src/components/services/speechToText/sttServiceInputSection";
import ServiceHeading from "src/layouts/dashboard/services/serviceHeading";

const SpeechToTextPanel = () => {
    return (
        <div className="speech-to-text__panel service-panel">
            <ServiceHeading heading="Speech To Text" description="Easily Retrieve Text From Any File With Details"/>
            <STTServiceInputSection/>
        </div>
    )
}

export default SpeechToTextPanel;