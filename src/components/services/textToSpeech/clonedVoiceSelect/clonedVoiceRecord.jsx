import { useEffect, useRef, useState } from 'react';
import checkImg from 'src/assets/images/check.png';
import minusImg from 'src/assets/images/minus.png';
import { AxiosFacade } from 'src/lib/axios';
import loadingImg from 'src/assets/images/loading.png';

const ClonedVoiceRecord = ({ audioSrc, voiceName, voiceIndex, selectVoice, selectedVoice, voiceId, removeVoice }) => {
    const [isLoading, setIsLoading] = useState();
    const deleteBtnRef = useRef();
    const removeUserVoice = async (e) => {
        e.stopPropagation();
        setIsLoading(true);
        if (await AxiosFacade.removeUserVoice(voiceId)) {
            removeVoice(voiceIndex);
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if (isLoading !== "undefined") {
            deleteBtnRef.current.classList.toggle("delete-voice-loader");
        }
    },[isLoading]);
    return (
        <div className="cloned-voice-record" onClick={() => { selectVoice(voiceIndex) }}>
            <audio>
                <source src={audioSrc} type="audio/mpeg" />
            </audio>
            <p>{voiceName}</p>
            {selectedVoice === voiceId && <img src={checkImg} alt="check" className='selected-voice-img' />}
            <img src={!isLoading ? minusImg : loadingImg} ref={deleteBtnRef} onClick={!isLoading ? removeUserVoice : () => { }} />
        </div>
    )
}

export default ClonedVoiceRecord;