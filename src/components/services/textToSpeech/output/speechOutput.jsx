import { useEffect, useRef, useState } from 'react';
import playImg from 'src/assets/images/play.png';
import pauseImg from 'src/assets/images/pause-audio.png';

const Speech = ({ file }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const playPause = () => {
        setIsPlaying(!isPlaying);
        !isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
    const audioRef = useRef();
    const [duration, setDuration] = useState();
    useEffect(() => {
        listenForMetadata();
        if (audioRef.current) {
            listenForMetadata();
            audioRef.current.addEventListener('loadedmetadata', listenForMetadata);

        }
        return () => {
            audioRef.current.removeEventListener('loadedmetadata', listenForMetadata);

        }
    }, []);

    const listenForMetadata = () => {
        setDuration(formatTime(audioRef.current.duration));
    }
    const formatTime = (seconds) => {
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        setDuration(`${formattedMinutes}:${formattedSeconds}`)
    }
    return (
        <div className="speech-output">
            <h5>Speech</h5>
            <audio ref={audioRef}>
                <source src={URL.createObjectURL(file)} type="audio/mpeg" />
            </audio>
            <div className='speech-output-metrics'>
                <img src={isPlaying ? pauseImg : playImg} alt="play" onClick={playPause} />
                <p>Total Duration: <span>{duration || "00:01"}</span></p>
                <p>Characters Used: <span>1000</span></p>
            </div>
        </div>
    )
}

export default Speech;