import ServiceInputSection from "src/layouts/dashboard/services/serviceInputSection"
import OptionsSelectSection from "../multipleServices/optionsSelectSection"
import { useReducer } from "react"
import FilesInput from "../files/voiceCloning/filesInput"
import FileInputSection from "../files/fileInputSection"
import ProcessBtn from "../processBtn"

const SFVServiceInputSection = () => {
    const SFVInitialState = {
        type: "Video",
        fileToDownload: undefined,
        file: undefined
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
    const getQueryResponse = () => {

    }
    const setFile = (file) => {
        SFVDispatch({type:"file",payload: file[0]});
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
    console.log(SFVState);
    return (
        <div className="sfv-service-input-section service-main-input-section">
            <ServiceInputSection>
                <FilesInput file={SFVState.file} fileTypes={fileTypes} multiple={false} setFile={setFile} heading="Attach Your Video"/>
                <FileInputSection
                    fileTypes={fileTypes}
                    type={SFVState.type}
                    files={SFVState.file}
                    fileToDownload={SFVState.fileToDownload}
                    setFile={setFile}
                />
            </ServiceInputSection>
            <ProcessBtn btnText="Retrieve" process={() => {}} enabled={SFVState.file !== undefined}/>
            <OptionsSelectSection heading="Speech To Text Options" categoriesRows={categoriesRows} />
        </div>
    )
}

export default SFVServiceInputSection;