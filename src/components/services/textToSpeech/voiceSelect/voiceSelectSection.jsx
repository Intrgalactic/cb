import { availableVoices } from "src/utilities/utils"
import VoiceBox from "./voiceBox"
import { useEffect, useRef, useState } from "react"
import { useWindowScroll } from "@uidotdev/usehooks";
import { SessionStorage } from "src/utilities/sessionStorage";

const VoiceSelectSection = () => {
    const [visibleCount,setVisibleCount] = useState(14);
    const [{x,y},scrollTo] = useWindowScroll();
    const [visibleVoices,setVisibleVoices] = useState(availableVoices.slice(0,visibleCount + 1))
    const sectionRef = useRef();
    useEffect(() => {
        if (window.innerHeight + y >= sectionRef.current.offsetTop + sectionRef.current.offsetHeight && visibleCount < availableVoices.length) {
            setVisibleCount(visibleCount => visibleCount + 14);
        }
    },[y]);
    useEffect(() => {
       setVisibleVoices(availableVoices.slice(0,visibleCount + 1))
    },[visibleCount]);
    const [selectedVoice,setSelectedVoice] = useState();
    useEffect(() => {
        selectedVoice && SessionStorage.storeData("selected-voice",selectedVoice);
    },[selectedVoice])
    return (
        <div className="voice-select-section">
            <p className="input-heading">Select Your Voice</p>
            <div className="voice-select-section__voices" ref={sectionRef}>
                {visibleVoices.map((voice,index) => (
                    <VoiceBox setSelectedVoice={setSelectedVoice} name={voice.name} category={voice.category} description={voice.description} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default VoiceSelectSection;