
export function updateProgress(audio,setCurrentTime) {
    let percent = (audio.current.currentTime / audio.current.duration) * 100;
    progressBar.current.style.width = `${percent}%`;
    updateCurrentTime(setCurrentTime,audio);
}

export function updateDuration(setDuration,audio) {
    setDuration(formatTime(audio.current.duration));
}

export function updateCurrentTime(setCurrentTime,audio) {
    setCurrentTime(formatTime(audio.current.currentTime));
}

export function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
}
export function togglePlayPause(setIsPlaying,audio) {
    if (audio.current.paused || audio.current.ended) {
        setIsPlaying(true);
        audio.current.play();
    } else {
        setIsPlaying(false);
        audio.current.pause();
    }
}
export const getSecondsFromTimeString = (timeString) => {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return (minutes * 60) + seconds;
};


export const handleMouseUp = (setIsDragging) => {
    setIsDragging(false);
};