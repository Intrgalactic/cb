import { memo, useEffect, useReducer, useRef, useState } from "react";
import ServiceInputSection from "src/layouts/dashboard/services/serviceInputSection";
import FileInputSection from "../files/fileInputSection";
import AudioRecorder from "./recordings/audioRecorder";
import OptionsSelectSection from "../multipleServices/optionsSelectSection";
import ProcessBtn from "../processBtn";
import ProcessModal from "../process/processModal";
import { processModals } from "src/utilities/utils";
import { SessionStorage } from "src/utilities/sessionStorage";
import { getFileFromBlobUrl } from "src/utilities/files";
import { fetchService, removeServiceVariables } from "src/utilities/services";

const STTServiceInputSection = memo(() => {
    const STTInitialState = {
        recordingFiles: undefined,
        selectedRecordingFile: undefined,
        file: undefined,
        type: "Audio",
        fileToDownload: undefined,
        fileToDownloadExtension: undefined
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
    const [isProcessing,setIsProcessing] = useState(false);
    const abortRef = useRef();
    const setFile = (file) => {
        STTDispatch({type:"file",payload: file})
    }
    const setRecordingFile = (file) => {
        const recordings = STTState.recordingFiles !== undefined ? STTState.recordingFiles : [];
        recordings.push(file);
        STTDispatch({type:"recordingFiles",payload: recordings});
    }
    const getQueryResponse = async () => {
        const reqBody = {
            languageCode: 'English',
            summarizeOn: SessionStorage.getData("Summarization") || "Disable",
            topicsOn: SessionStorage.getData("Topics") || "Disable",
            diarizeOn: SessionStorage.getData("Diarization") || "Disable",
            audioEncoding: SessionStorage.getData("Output") || "txt",
            subtitlesOn: SessionStorage.getData("Timestamps") || "Disable",
            punctuation: SessionStorage.getData("Punctuation") || "Enable"
        }
        STTState.selectedRecordingFile ? Object.assign(reqBody,{file: STTState.recordingFiles[STTState.selectedRecordingFile]}) : 
        STTState.recordingFiles ? Object.assign(reqBody,{file: STTState.recordingFiles[0]}) : Object.assign(reqBody,{file: STTState.file[0]});
        setIsProcessing(true);
        reqBody.file = await getFileFromBlobUrl(reqBody.file);
        await fetchService(reqBody,"api/speech-to-text",setIsProcessing,SessionStorage.getData("Output") ? SessionStorage.getData("Output").toLowerCase() : "txt",STTDispatch,abortRef);
    }
    const cancelRequest = () => {
        abortRef.current.abort();
        setIsProcessing(false);
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
    useEffect(() => {
        return () => {
            if (abortRef.current) {
                abortRef.current.abort();
            }
            const variables = ["Punctuation","Output","Topics","Timestamps","Summarization","Diarization"];
            removeServiceVariables(variables);
        }
    })
    return (
        <div className="stt-service-input-section service-main-input-section">
            <ServiceInputSection>
                <AudioRecorder setRecordingFile={setRecordingFile} selectedRecordingFile={STTState.selectedRecordingFile} setSelectedRecordingFile={STTDispatch} recordingFiles={STTState.recordingFiles}/>
                <FileInputSection
                    fileTypes={fileTypes}
                    type={STTState.type}
                    fileToDownloadExtension={STTState.fileToDownloadExtension}
                    files={STTState.file !== undefined ? STTState.file : STTState.recordingFiles !== undefined ? STTState.recordingFiles : undefined}
                    fileToDownload={STTState.fileToDownload}
                    setFile={setFile}
                />
            </ServiceInputSection>
            <ProcessBtn enabled={STTState.recordingFiles !== undefined || STTState.file !== undefined} btnText="Transcribe" process={getQueryResponse} />
            <OptionsSelectSection heading="Speech To Text Options" categoriesRows={categoriesRows}/>
            {isProcessing === true && <ProcessModal cancel={cancelRequest} processObj={processModals.speechToText}/>}
        </div>
    )
})

export default STTServiceInputSection;