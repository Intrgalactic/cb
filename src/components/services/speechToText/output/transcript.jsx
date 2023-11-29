import { useRef } from "react";

const Transcript = ({transcription}) => {
    const transcriptRef = useRef();
    const toggleTranscript = () => {
        console.log('si')
        transcriptRef.current.classList.toggle("active-transcript");
    }
    return (
        <p onClick={toggleTranscript} className="transcript" ref={transcriptRef}>
            {transcription}
        </p>
    )
}

export default Transcript;