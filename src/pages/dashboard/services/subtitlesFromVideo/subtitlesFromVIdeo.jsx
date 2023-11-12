import NavDetector from "../../navDetector"
import { useWindowSize } from "@uidotdev/usehooks"
import SubtitlesFromVideoPanel from "./subtitlesFromVideoPanel"
import "src/styles/services/sfv.css";
import ServiceChooseContainer from "src/components/services/subtitlesFromVideo/serviceChooseContainer";
import { useState } from "react";

const SubtitlesFromVideo = () => {
    const windowSize = useWindowSize();
    const [blur,setBlur] = useState("20px");
    const webAction = () => {
        setBlur("0px");
    }
    return (
        <div className="subtitles-to-video service-page">
            <NavDetector windowSize={windowSize}/>
            <SubtitlesFromVideoPanel blur={blur}/>
            {blur === "20px" && <ServiceChooseContainer webAction={webAction}/>}
        </div>
    )
}

export default SubtitlesFromVideo;