import loadingImg from 'src/assets/images/loading.png'
import { AxiosFacade } from "src/lib/axios";
import ClonedVoiceRecord from "./clonedVoiceRecord";
import { useContext, useEffect, useRef, useState } from "react";
import { SessionStorage } from "src/utilities/sessionStorage";
import { AuthContext } from "src/context/authContext";
import ClonedVoiceTooltip from './clonedVoiceTooltip';

const ClonedVoicesSelectList = () => {
    const auth = useContext(AuthContext);
    const [clonedVoices, setClonedVoices] = useState();
    const [selectedVoice, setSelectedVoice] = useState();
    const [fetchingDone, setFecthingDone] = useState(false);
    const [clonedVoiceTooltip, setClonedVoiceTooltip] = useState();
    const tooltipRef = useRef();
    useEffect(() => {
        async function getUserVoices() {
            await AxiosFacade.getUserCreatedVoices(auth.email).then((response) => {
                setClonedVoices(response.voices);
                setFecthingDone(true);
            });
        }
        if (auth) {
            getUserVoices();
        }
    }, [auth]);
    const selectVoice = (voiceIndex) => {
        const userSelectedVoice = clonedVoices.filter((voice, index) => { if (index === voiceIndex) return voice });
        userSelectedVoice[0].id !== selectedVoice ? setSelectedVoice(userSelectedVoice[0].id) : setSelectedVoice("");
        userSelectedVoice[0].id !== selectedVoice ? SessionStorage.storeData("selected-cloned-voice", userSelectedVoice[0]) : SessionStorage.deleteData("selected-cloned-voice");
        if (!clonedVoiceTooltip) {
            setClonedVoiceTooltip(true);
            tooltipRef.current.classList.toggle("visible-cloned-voice-tooltip")
        }
    }
    const removeVoice = (voiceIndex) => {
        const filteredVoices = clonedVoices.filter((voice, index) => index !== voiceIndex);
        setClonedVoices(filteredVoices);
    }
    return (
        <div className="cloned-voice-select__list">
            <div className='cloned-voice-select__list__container'>
                {clonedVoices && clonedVoices.length > 0 ? clonedVoices.map((clonedVoice, index) => (
                    <ClonedVoiceRecord
                        key={index}
                        voiceId={clonedVoice.id}
                        audioSrc={clonedVoice.previewUrl}
                        voiceName={clonedVoice.name}
                        voiceIndex={index}
                        selectedVoice={selectedVoice}
                        selectVoice={selectVoice}
                        removeVoice={removeVoice}
                    />
                )) :
                    <div className='cloned-voice-select__mssgs'>
                        {fetchingDone === false && <img src={loadingImg} alt="loader" className='btn-loader' />}
                        {fetchingDone === true && <p className="empty-list-msg">You Haven't Cloned Any Voice Yet</p>}
                    </div>
                }
            </div>
            <ClonedVoiceTooltip ref={tooltipRef} />
        </div>
    )
}

export default ClonedVoicesSelectList;