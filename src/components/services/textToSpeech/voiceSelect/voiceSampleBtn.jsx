import { AxiosFacade } from "src/lib/axios";
import loading from 'src/assets/images/loading.png';
import { useEffect, useRef, useState } from "react";

const VoiceSample = ({name}) => {
    const audioRef = useRef();
    const [voicePreviewUrl, setVoicePreviewUrl] = useState();
    const [isPlaying, setIsPlaying] = useState();
    const [isFetching, setIsFetching] = useState(false);
    const getVoicePreviewUrl = async () => {
        setIsFetching(true);
        await AxiosFacade.getServiceFile(encodeURIComponent(`voicesPreviews/${name}`), "mp3").then((blob) => {
            ;
            setVoicePreviewUrl(blob);
            setIsFetching(false);
        }).catch(err => {
            setVoicePreviewUrl(false);
        })
    }
    useEffect(() => {
        if (!isPlaying && audioRef.current) {
            playPause();
        }
    }, [voicePreviewUrl])
    const playPause = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(voicePreviewUrl);
        }
    },[])
    return (
        <>
            <button className="voice-box-btn" onClick={voicePreviewUrl ? () => { playPause() } : getVoicePreviewUrl}>
                {isFetching ? <img src={loading} alt="loader" /> : isPlaying ? "Stop" : "Sample"}
            </button>
            {voicePreviewUrl !== undefined &&
                <audio ref={audioRef} onEnded={playPause}>
                    <source src={voicePreviewUrl} type="audio/mpeg" />
                </audio>
            }
        </>
    )
}

export default VoiceSample;