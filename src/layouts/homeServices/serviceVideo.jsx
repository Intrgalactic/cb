import { useState } from "react";
import playImg from 'src/assets/images/play-video.png';
import {motion} from 'framer-motion'

const ServiceVideo = ({src,type,autoPlay}) => {
    const [isPlaying,setIsPlaying] = useState(false);
    const videoAnimState = {
        hidden: {opacity: 0},
        visible: {opacity:1}
    }
    return (
        <motion.div initial="hidden" variants={videoAnimState} viewport={{once:true}} transition={{type:"spring",duration:0.8}} whileInView="visible" className="service-video" onClick={() => {setIsPlaying(!isPlaying)}}>
            <video autoPlay={autoPlay === true ? true : false}>
                <source src={src} type={type}/>
            </video>
            {!isPlaying && <div className="play-video"><img src={playImg} alt="play"/></div>}
        </motion.div>
    )
}

export default ServiceVideo;