import ServiceChoose from "./serviceChoose"

const ServiceChooseContainer = ({desktopAction,webAction}) => {
    return (
        <div className="service-choose__container">
            <ServiceChoose
                heading="Classic"
                contentHeading="An AI Subtitle Extraction Tool"
                contentDescription="a sophisticated solution for extracting subtitles from video content. It's designed to seamlessly handle both burned-in subtitles, which are permanently displayed on the video, and embedded subtitle tracks, which can be toggled on and off. This tool leverages AI to intelligently scan and interpret the text within videos, regardless of its placement or format." contentSubMsg="Only Available On Desktop App"
                btnText="Download" 
                action={desktopAction}
            />
             <ServiceChoose
                heading="Web"
                contentHeading="An AI-Powered Speech Retrieval Tool"
                contentDescription="highly efficient solution designed to extract all spoken words from video content. This innovative tool utilizes advanced AI algorithms to listen to and accurately transcribe spoken dialogue in videos. It's capable of processing any video file, extracting the audio, and then converting this audio into a written transcript" contentSubMsg="Available On All Devices "
                btnText="Continue On Web"
                action={webAction} 
            />
        </div>
    )
}

export default ServiceChooseContainer;