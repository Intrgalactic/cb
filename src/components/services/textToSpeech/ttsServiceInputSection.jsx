import { memo, useEffect, useReducer, useRef, useState } from "react";
import ServiceInputSection from "src/layouts/dashboard/services/serviceInputSection";
import TextInput from "./textInput";
import FileInputSection from "../files/fileInputSection";
import ProcessBtn from "../processBtn";
import VoiceSelectSection from "./voiceSelect/voiceSelectSection";
import VoiceSlidersSection from "./voiceSliders/voiceSlidersSection";
import ProcessModal from "../process/processModal";
import { processModals } from "src/utilities/utils";
import axios from "axios";
import { SessionStorage } from "src/utilities/sessionStorage";
import Cookies from "js-cookie";

const TTSServiceInputSection = memo(() => {
    const TTSInitialState = {
        file: undefined,
        type: "Text",
        serviceName: "text-to-speech",
        fileToDownload: undefined,
    }

    const TTSReducer = (state, action) => {
        for (const key of Object.keys(TTSInitialState)) {
            if (key === action.type) {
                return { ...state, [key]: action.payload };
            }
        }
    }
    const [TTSState, TTSDispatch] = useReducer(TTSReducer, TTSInitialState);
    const [isProcessing,setIsProcessing] = useState(false);
    const textInput = useRef();
    const abortRef = useRef();
    const setFile = (file) => {
        TTSDispatch({type:"file",payload: file[0]})
    }
    const getQueryResponse = async () => {
        const abortController = new AbortController();
        abortRef.current = abortController;
        const clarity = SessionStorage.getData("clarity");
        const stability = SessionStorage.getData("stability");
        console.log(clarity,stability);  
        const reqBody = {
            stability: stability || 0.5,
            clarity: clarity || 0.5,
        }
        TTSState.file ? Object.assign(reqBody,{file:TTSState.file}) : Object.assign(reqBody,{text: textInput});
        !TTSState.file && textInput.current.value === "" ? textInput.current.parentNode.classList.add("wrong-input") : textInput.current.parentNode.classList.remove('wrong-input');
        console.log(reqBody);
        setIsProcessing(true);
        const formData = new FormData();
        const token = Cookies.get("jwt");
        console.log(token);
        const config = {
            withCredentials: true,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
            }
        }
        for (const [key,value] of Object.entries(reqBody)) {
            formData.append([key],value);
        }
        await axios.post(`${import.meta.env.VITE_SERVER_FETCH_URL}api/text-to-speech`,formData,config); 
    }
    const cancelRequest = () => {
        abortRef.current.abort();
        setIsProcessing(false);
    }
    const fileTypes = [
        "application/msword",                            // DOC
        "text/plain",                                     // TXT
        "application/pdf",                                // PDF
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ]
    return (
        <div className="tts-service-input-section service-main-input-section">
            <ServiceInputSection>
                <TextInput ref={textInput}/>
                <FileInputSection
                    fileTypes={fileTypes}
                    type={TTSState.type}
                    files={TTSState.file}
                    serviceName={TTSState.serviceName}
                    fileToDownload={TTSState.fileToDownload}
                    setFile={setFile}
                />
            </ServiceInputSection>
            <VoiceSlidersSection/>
            <ProcessBtn enabled={textInput !== "" || TTSState.file !== undefined} btnText="Synthesize" process={getQueryResponse} />
            <VoiceSelectSection/>
            {isProcessing === true && <ProcessModal processObj={processModals.textToSpeech} cancel={cancelRequest}/>}
        </div>
    )
});

export default TTSServiceInputSection;