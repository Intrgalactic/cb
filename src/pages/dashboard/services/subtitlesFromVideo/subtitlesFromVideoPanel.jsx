import { memo } from "react";
import SFVServiceInputSection from "src/components/services/subtitlesFromVideo/sfvServiceInputSection";
import ServiceHeading from "src/layouts/dashboard/services/serviceHeading";

const SubtitlesFromVideoPanel = memo(({blur}) => {
    return (
        <div className="subtitles-from-video__panel service-panel" style={{filter:`blur(${blur})`}}>
            <ServiceHeading heading="Subtitles From Video" description="Easily Retrieve Subtitles From Any Video With Details" />
            <SFVServiceInputSection/>
        </div>
    )
})

export default SubtitlesFromVideoPanel;