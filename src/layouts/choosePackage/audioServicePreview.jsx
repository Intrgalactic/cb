import ServicePreviewHeading from "src/components/servicePreviewHeading"
import TextOutput from "./textOutput";
import { useEffect, useRef, useState } from "react";
import pause from 'src/assets/images/pause-audio.png';
import play from 'src/assets/images/play.png';


const AudioServicePreview = ({ alt, img, heading, subHeading, width, height, src }) => {
    const audio = useRef();
    const playPauseBtn = useRef();
    const progressContainer = useRef();
    const progressBar = useRef();
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState("00:00");
    const [isPlaying, setIsPlaying] = useState();
    const [isDragging,setIsDragging] = useState(); 
    useEffect(() => {
        if (audio.current) {
            audio.current.addEventListener('loadedmetadata', function () {
                updateDuration();
            });

            audio.current.addEventListener('timeupdate', function () {
                updateProgress();
            });
        }
    }, [audio])
    function updateProgress() {
        let percent = (audio.current.currentTime / audio.current.duration) * 100;
        progressBar.current.style.width = `${percent}%`;
        updateCurrentTime();
    }

    function updateDuration() {
        setDuration(formatTime(audio.current.duration));
    }

    function updateCurrentTime() {
        setCurrentTime(formatTime(audio.current.currentTime));
    }

    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return minutes + ":" + seconds;
    }
    function togglePlayPause() {
        if (audio.current.paused || audio.current.ended) {
            setIsPlaying(true);
            audio.current.play();
        } else {
            setIsPlaying(false);
            audio.current.pause();
        }
    }
    const getSecondsFromTimeString = (timeString) => {
        const [minutes, seconds] = timeString.split(':').map(Number);
        return (minutes * 60) + seconds;
    };
    function setProgress(event) {
        const durationInSeconds = getSecondsFromTimeString(duration);
        const rect = progressContainer.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const progressWidth = progressContainer.current.offsetWidth;
        const newTime = (x / progressWidth) * durationInSeconds;
        audio.current.currentTime = newTime;
    }
    const handleMouseDown = (event) => {
        setIsDragging(true);
        updateCurrentTime(event);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            updateCurrentTime(event);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };
    return (
        <article className="audio-service-preview">
            <div className="audio-service-preview__left-aside">
                <ServicePreviewHeading alt={alt} heading={heading} subHeading={subHeading} img={img} width={width} height={height} />
                <div className="audio-service-preview__audio-container">
                    <p className="audio-service-preview__audio-container__heading">Audio Input</p>
                    <div className="audio-service-preview__audio-inner-container">
                        <audio controls ref={audio}>
                            <source src={src} type="audio/mpeg" />
                        </audio>
                        <div ref={progressContainer} className="progress-container" onClick={(e) => { setProgress(e) }}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp} 
                        >
                            <div className="progress" ref={progressBar}></div>
                        </div>
                        <button className="video-btn" ref={playPauseBtn} onClick={togglePlayPause}><img src={isPlaying ? pause : play} width="25px" height="25px" alt={isPlaying ? "pause button" : "play button"}/></button>
                        <p className="current-time">{currentTime}</p><br />
                        <p className="duration">{duration}</p>
                    </div>
                </div>
            </div>
            <TextOutput heading="Text Output" />
        </article>
    )
}

export default AudioServicePreview;