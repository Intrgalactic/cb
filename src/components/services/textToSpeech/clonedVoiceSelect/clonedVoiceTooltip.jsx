import { forwardRef } from "react";

const ClonedVoiceTooltip = forwardRef((props, ref) => {
    const closeTooltip = () => {
        ref.current.classList.toggle("visible-cloned-voice-tooltip")
    }
    return (
        <div className='cloned-voice-tooltip' ref={ref}>
            <span onClick={closeTooltip}>Close</span>
            <p>Cloned Voice Will Be Used As First If In-Built Voice Is Chosen</p>
        </div>
    )
});

export default ClonedVoiceTooltip;