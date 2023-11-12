import { useReducer, useState } from "react";
import ServiceInputSection from "src/layouts/dashboard/services/serviceInputSection";
import TextInput from "./textInput";
import FileInputSection from "../files/fileInputSection";
import ProcessBtn from "../processBtn";
import VoiceSelectSection from "./voiceSelect/voiceSelectSection";
import VoiceSlidersSection from "./voiceSliders/voiceSlidersSection";

const   TTSServiceInputSection = () => {
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

    const [textInput, setTextInput] = useState("");
    const handleChange = (e) => {
        setTextInput(e.target.value);
    }
    const setFile = (file) => {
        TTSDispatch({type:"file",payload: file})
    }
    const getQueryResponse = () => {
    }
    return (
        <div className="tts-service-input-section service-main-input-section">
            <ServiceInputSection>
                <TextInput onChange={handleChange} />
                <FileInputSection
                    type={TTSState.type}
                    serviceName={TTSState.serviceName}
                    fileToDownload={TTSState.fileToDownload}
                    setFile={setFile}
                />
            </ServiceInputSection>
            <VoiceSlidersSection/>
            <ProcessBtn enabled={textInput !== "" || TTSState.file !== undefined} btnText="Synthesize" process={getQueryResponse} />
            <VoiceSelectSection/>
        </div>
    )
}

export default TTSServiceInputSection;