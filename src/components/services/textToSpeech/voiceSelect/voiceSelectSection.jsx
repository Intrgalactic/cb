import { availableVoices } from "src/utilities/utils"
import VoiceBox from "./voiceBox"
import { useEffect, useRef, useState } from "react"
import { useWindowScroll } from "@uidotdev/usehooks";
import { SessionStorage } from "src/utilities/sessionStorage";
import SearchBar from "src/components/searchBar";

const VoiceSelectSection = () => {
    const [visibleCount, setVisibleCount] = useState(14);
    const [{ x, y }, scrollTo] = useWindowScroll();
    const [visibleVoices, setVisibleVoices] = useState(availableVoices.slice(0, visibleCount + 1))
    const sectionRef = useRef();
    const [voiceSearchFilter, setVoiceSearchFilter] = useState();
    const [filteredVoices, setFilteredVoices] = useState()
    useEffect(() => {
        if (window.innerHeight + y >= sectionRef.current.offsetTop + sectionRef.current.offsetHeight && visibleCount < availableVoices.length) {
            setVisibleCount(visibleCount => visibleCount + 14);
        }
    }, [y]);
    useEffect(() => {
        setVisibleVoices(availableVoices.slice(0, visibleCount + 1));
    }, [visibleCount]);
    const [selectedVoice, setSelectedVoice] = useState();
    useEffect(() => {
        selectedVoice && SessionStorage.storeData("selected-voice", selectedVoice);
    }, [selectedVoice])
    useEffect(() => {
        if (voiceSearchFilter) {
            const filteredVisibleVoices = availableVoices.filter((voice) => {
                if (voice.name.toLowerCase().includes(voiceSearchFilter.toLowerCase())) {
                    return voice;
                }
            })
            setFilteredVoices(filteredVisibleVoices);
        }
    }, [voiceSearchFilter])

    return (
        <div className="voice-select-section">
            <div className="voice-select-section__input__container">
                <p className="input-heading">Select Your Voice</p>
                <SearchBar setVoiceSearchFilter={setVoiceSearchFilter} placeholder="Search For Voice" />
            </div>
            <div className="voice-select-section__voices" ref={sectionRef}>
                {filteredVoices === undefined || (voiceSearchFilter === "")?
                    <>
                        {visibleVoices.map((voice, index) => (
                            <VoiceBox voice={voice} selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} key={index} />
                        ))}
                    </>
                    :
                    <>
                        {filteredVoices.map((voice, index) => (
                            <VoiceBox voice={voice} selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} key={index} />
                        ))}
                    </>
                }
            </div>
        </div>
    )
}

export default VoiceSelectSection;