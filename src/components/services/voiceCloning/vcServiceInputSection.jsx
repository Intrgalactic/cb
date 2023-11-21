import FilesInput from "../files/voiceCloning/filesInput";
import ProcessBtn from "../processBtn";
import { memo, useReducer, useState } from "react";
import ServiceInputSection from "src/layouts/dashboard/services/serviceInputSection";
import VCFileInputSection from "../files/voiceCloning/vcFileInputSection";
import ServiceCheckbox from "../serviceCheckbox";

const VCServiceInputSection = memo(() => {
    const VCInitialState = {
        files: [],
        type: "Audio",
        serviceName: "voice-cloning",
        isChecked: false
    }

    const VCReducer = (state, action) => {
        for (const key of Object.keys(VCInitialState)) {
            if (key === action.type) {
                return { ...state, [key]: action.payload };
            }
        }
    }
    const [VCState, VCDispatch] = useReducer(VCReducer, VCInitialState);
    const [isProcessing,setIsProcessing] = useState(false);
    const setFile = (file) => {
        const files = VCState.files;
        if (file.length === 1 && files.length < 20 && (files.length + file.length <= 20)) {
            files.push(file[0]);
        }
        else if (files.length < 20 && (files.length + file.length <= 20)) {
            for (let i = 0;i<file.length;i++) {
                files.push(file[i]);
            }
        }
        VCDispatch({type:"files",payload:files})     
    }

    const getQueryResponse = () => {

    }
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
    const deleteFile = (index) => {
        const filteredFiles = VCState.files.filter((file,fileIndex) => index !== fileIndex);
        VCDispatch({type:"files",payload:filteredFiles});
    }

    return (
        <div className="vc-service-input-section service-main-input-section">
            <ServiceInputSection>
                <FilesInput fileTypes={fileTypes} multiple={true}  setFile={setFile} heading="Add Your Voice Samples" />
                <VCFileInputSection multiple={true} deleteFile={deleteFile} fileTypes={fileTypes} serviceName="voice-cloning" fileType="audio/*" type="Audio" setFile={setFile} files={VCState.files.length === 0 ? undefined : VCState.files}/>
            </ServiceInputSection>
            <ServiceCheckbox isChecked={VCState.isChecked} setIsChecked={() => {VCDispatch({type:"isChecked",payload: !VCState.isChecked})}} checkText={`I hereby confirm that i am the owner of the voice or have obtained all necessary permissions and rights to use the voice`}/>
            <ProcessBtn btnText="Clone" process={() => { }} enabled={VCState.files.length !== 0 && VCState.files.length <= 20 && VCState.isChecked === true ? true : false} />
            {isProcessing === true && <ProcessModal processObj={processModals.voiceCloning}/>}
        </div>
    )
});

export default VCServiceInputSection;