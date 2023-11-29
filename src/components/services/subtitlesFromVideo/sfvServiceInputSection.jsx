import ServiceInputSection from "src/layouts/dashboard/services/serviceInputSection"
import OptionsSelectSection from "../multipleServices/optionsSelectSection"
import { memo, useReducer, useRef, useState } from "react"
import FilesInput from "../files/voiceCloning/filesInput"
import FileInputSection from "../files/fileInputSection"
import ProcessBtn from "../processBtn"
import ProcessModal from "../process/processModal"
import { processModals } from "src/utilities/utils"
import { fetchService } from "src/utilities/services"
import { SessionStorage } from "src/utilities/sessionStorage"

const SFVServiceInputSection = memo(() => {
    const SFVInitialState = {
        type: "Video",
        fileToDownload: undefined,
        file: undefined,
        fileToDownloadExtension: undefined,
    }
    const SFVReducer = (state, action) => {
        console.log(action);
        for (const key of Object.keys(SFVInitialState)) {
            if (key === action.type) {
                return { ...state, [key]: action.payload };
            }
        }
    }
    const [SFVState, SFVDispatch] = useReducer(SFVReducer, SFVInitialState);
    const [isProcessing, setIsProcessing] = useState(false);
    const abortRef = useRef();
    const categoriesRows = [[{
        heading: "Diarization",
        options: ["Enable", "Disable"]
    }, {
        heading: "Summarization",
        options: ["Enable", "Disable"]
    }, {
        heading: "Topics",
        options: ["Enable", "Disable"]
    }], [{
        heading: "Punctuation",
        options: ["Enable", "Disable"]
    }, {
        heading: "Timestamps",
        options: ["Enable", "Disable"]
    }, {
        heading: "Output",
        options: ["Txt", "Pdf", "Docx"]
    }]]
    const getQueryResponse = async () => {
        const output = SessionStorage.getData("Output") !== null ? SessionStorage.getData("Output").toLowerCase() : "txt";
        const reqBody = {
            languageCode: 'English',
            file: SFVState.file,
            summarizeOn: SessionStorage.getData("Summarization") || "Disable",
            topicsOn: SessionStorage.getData("Topics") || "Disable",
            diarizeOn: SessionStorage.getData("Diarization") || "Disable",
            audioEncoding: output,
            subtitlesOn: SessionStorage.getData("Timestamps") || "Disable",
            punctuation: SessionStorage.getData("Punctuation") || "Enable"
        }
        setIsProcessing(true);
        await fetchService(reqBody, "api/subtitles-from-video", setIsProcessing, output, SFVDispatch, abortRef, true);
    }
    const setFile = (file) => {
        SFVDispatch({ type: "file", payload: file[0] });
    }
    const fileTypes = [
        "video/mp4",
        "video/webm",
        "video/ogg",
        "video/mpeg",
        "video/x-msvideo",
        "video/x-ms-wmv",
        "video/quicktime",
        "video/x-flv",
        "video/x-matroska",
        "video/3gpp",
        "video/3gpp2"
    ];
    const cancelRequest = () => {
        abortRef.current.abort();
        setIsProcessing(false);
    }
    return (
        <div className="sfv-service-input-section service-main-input-section">
            <ServiceInputSection>
                <FilesInput maxFileSize={314572800} file={SFVState.file} fileTypes={fileTypes} multiple={false} setFile={setFile} heading="Attach Your Video" />
                <FileInputSection
                    fileTypes={fileTypes}
                    type={SFVState.type}
                    files={SFVState.file}
                    fileToDownloadExtension={SFVState.fileToDownloadExtension}
                    fileToDownload={SFVState.fileToDownload}
                    setFile={setFile}
                />
            </ServiceInputSection>
            <ProcessBtn btnText="Retrieve" process={getQueryResponse} enabled={SFVState.file !== undefined} />
            <OptionsSelectSection heading="Subtitles From Video Options" categoriesRows={categoriesRows} />
            {isProcessing === true && <ProcessModal cancel={cancelRequest} processObj={processModals.subtitlesFromVideo} />}
        </div>
    )
});

export default SFVServiceInputSection;