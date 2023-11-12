import { useReducer } from "react";
import ServiceInputSection from "src/layouts/dashboard/services/serviceInputSection";
import FileInputSection from "../files/fileInputSection";
import AudioRecorder from "./recordings/audioRecorder";
import OptionsSelectSection from "../multipleServices/optionsSelectSection";
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
        STTDispatch({type:"file",payload: file[0]})
    }
    const setRecordingFile = (file) => {
        const recordings = STTState.recordingFiles !== undefined ? STTState.recordingFiles : [];
        recordings.push(file[0]);
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
    const fileTypes = [
        "audio/mpeg",    // MP3
        "audio/wav",     // WAV
        "audio/wave",    // WAV alternate
        "audio/aac",     // AAC
        "audio/ogg",     // OGG
        "audio/midi",    // MIDI
        "audio/x-midi",  // MIDI alternate
        "audio/flac",    // FLAC
        "audio/x-ms-wma",// WMA
        "audio/alac",    // ALAC
        "audio/amr",     // AMR
        "audio/webm",    // WebM Audio
        "audio/aiff",    // AIFF
        "audio/x-aiff",  // AIFF alternate
        "audio/vnd.rn-realaudio", // Real Audio
        "audio/opus",    // Opus
        "audio/L16"      // PCM
    ]
    return (
        <div className="stt-service-input-section service-main-input-section">
            <ServiceInputSection>
                <AudioRecorder setRecordingFile={setRecordingFile} selectedRecordingFile={STTState.selectedRecordingFile} setSelectedRecordingFile={STTDispatch} recordingFiles={STTState.recordingFiles}/>
                <FileInputSection
                    fileTypes={fileTypes}
                    type={STTState.type}
                    files={STTState.file !== undefined ? STTState.file : STTState.recordingFiles !== undefined ? STTState.recordingFiles : undefined}
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