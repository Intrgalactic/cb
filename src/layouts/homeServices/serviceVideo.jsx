import { useState } from "react";
import playImg from 'src/assets/images/play-video.png';

const ServiceVideo = ({src,type,autoPlay}) => {
    const [isPlaying,setIsPlaying] = useState(false);
    return (
        <div className="service-video" onClick={() => {setIsPlaying(!isPlaying)}}>
            <video autoPlay={autoPlay === true ? true : false}>
                <source src={src} type={type}/>
            </video>
            {!isPlaying && <div className="play-video"><img src={playImg} alt="play"/></div>}
        </div>
    )
}

export default ServiceVideo;