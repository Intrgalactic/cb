import { useReducer } from "react";
import ServiceInputSection from "src/layouts/dashboard/services/serviceInputSection";
import FileInputSection from "../files/fileInputSection";
import AudioRecorder from "./recordings/audioRecorder";
import OptionsSelectSection from "../optionsSelectSection";
import ProcessBtn from "../processBtn";

const STTServiceInputSection = () => {
    const STTInitialState = {
        recordingFiles: undefined,
        selectedRecordingFile: undefined,
        file: undefined,
        type: "Audio",
        serviceName: "speech-to-text",
        fileToDownload: undefined,
    }

    const STTReducer = (state, action) => {
        console.log(action);
        for (const key of Object.keys(STTInitialState)) {
            if (key === action.type) {
                return { ...state, [key]: action.payload };
            }
        }
    }
    const [STTState, STTDispatch] = useReducer(STTReducer, STTInitialState);

    const setFile = (file) => {
        STTDispatch({type:"file",payload: file})
    }
    const setRecordingFile = (file) => {
        const recordings = STTState.recordingFiles !== undefined ? STTState.recordingFiles : [];
        recordings.push(file);
        STTDispatch({type:"recordingFiles",payload: recordings});
    }
    const getQueryResponse = () => {

    }

    const categoriesRows = [[{
        heading: "Diarization",
        options: ["Enable","Disable"]
    },{
        heading: "Summarization",
        options: ["Enable","Disable"]
    },{
        heading: "Topics",
        options: ["Enable","Disable"]
    }],[{
        heading: "Punctuation",
        options: ["Enable","Disable"]
    },{
        heading: "Timestamps",
        options: ["Enable","Disable"]
    },{
        heading: "Output",
        options: ["Txt","Pdf","Docx"]
    }]]

    return (
        <div className="stt-service-input-section service-main-input-section">
            <ServiceInputSection>
                <AudioRecorder setRecordingFile={setRecordingFile} selectedRecordingFile={STTState.selectedRecordingFile} setSelectedRecordingFile={STTDispatch} recordingFiles={STTState.recordingFiles}/>
                <FileInputSection
                    type={STTState.type}
                    serviceName={STTState.serviceName}
                    fileToDownload={STTState.fileToDownload}
                    setFile={setFile}
                />
            </ServiceInputSection>
            <ProcessBtn enabled={STTState.recordingFiles !== undefined || STTState.file !== undefined} btnText="Transcribe" process={getQueryResponse} />
            <OptionsSelectSection heading="Speech To Text Options" categoriesRows={categoriesRows}/>
        </div>
    )
}

export default STTServiceInputSection;