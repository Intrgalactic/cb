import { useRef } from "react";
import audio from 'src/assets/images/audio.png';
import check from 'src/assets/images/check.png';

const Recording = ({src,index,selectedRecordingFile,setSelectedRecordingFile}) => {
    const audioRef = useRef();
    const playPauseAudio = () => {
        if (audioRef.current) {
            setSelectedRecordingFile({type: "selectedRecordingFile",payload:index})
            audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
        }
    }
    console.log(selectedRecordingFile);
    return (
        <div className="recording" onClick={playPauseAudio}>
            <audio src={src} ref={audioRef}/>
            <p>Recording {index}</p>
            <img src={audio} alt="audio"/>
            {selectedRecordingFile === index &&
                <img src={check} className="selected-recording"/>
            }
        </div>

    )
}

export default Recording