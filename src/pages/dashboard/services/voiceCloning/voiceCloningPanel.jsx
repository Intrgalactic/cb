import VCServiceInputSection from "src/components/services/voiceCloning/vcServiceInputSection";
import ServiceHeading from "src/layouts/dashboard/services/serviceHeading";

const VoiceCloningPanel = () => {
    return (
        <div className="voice-cloning__panel service-panel">
            <ServiceHeading heading="Voice Cloning" description="Clone Your Voice Within Minutes"/>
            <VCServiceInputSection/>
        </div>
    )
}

export default VoiceCloningPanel;