import FilesInput from "../files/voiceCloning/filesInput";
import ProcessBtn from "../processBtn";
import { memo, useContext, useReducer, useRef, useState } from "react";
import ServiceInputSection from "src/layouts/dashboard/services/serviceInputSection";
import VCFileInputSection from "../files/voiceCloning/vcFileInputSection";
import ServiceCheckbox from "../serviceCheckbox";
import VoiceNameInput from "./voiceNameInput";
import { fetchService } from "src/utilities/services";
import ProcessModal from "../process/processModal";
import { processModals } from "src/utilities/utils";
import RedirectModal from "../redirectModal";
import { getAuth } from "firebase/auth";
import ServiceErr from "../serviceErr";
import { AxiosFacade } from "src/lib/axios";
import { AuthContext } from "src/context/authContext";
import LoadingModal from "src/layouts/loadingModal";

const VCServiceInputSection = memo(() => {
    const VCInitialState = {
        files: [],
        type: "Audio",
        serviceName: "voice-cloning",
        processDone: false,
        isChecked: false,
        voiceName: ""
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
    const [isProcessingAbility,setIsProcessingAbility] = useState(false); 
    const user = useContext(AuthContext);
    const [processErr,setProcessErr] = useState(false);
    const abortRef = useRef();
    const auth = getAuth();
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

    const getQueryResponse = async () => {
        const reqBody = {
            files: VCState.files,
            voiceName: VCState.voiceName,
            email: auth.currentUser.email
        }
        setIsProcessingAbility(true);
        await AxiosFacade.getUserCreatedVoices(user.email).then(async (data) => {
            if (data.voices.length < 5) {
                setIsProcessing(true);
                setIsProcessingAbility(false);
                await fetchService(reqBody,"api/voice-clone",setIsProcessing,false,VCDispatch,abortRef);
            }
            else {
                setProcessErr("You Can Only Have 5 Cloned Voices, Remove Atleast One To Continue");
                setIsProcessingAbility(false);
            }
        })
    }
    const setVoiceName = (name) => {
        VCDispatch({type: "voiceName",payload: name});
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
    const cancelRequest = () => {
        abortRef.current.abort();
        setIsProcessing(false);
    }
    
    return (
        <div className="vc-service-input-section service-main-input-section">
            <ServiceInputSection>
                <FilesInput fileTypes={fileTypes} multiple={true}  setFile={setFile} heading="Add Your Voice Samples" />
                <VCFileInputSection multiple={true} deleteFile={deleteFile} fileTypes={fileTypes} serviceName="voice-cloning" fileType="audio/*" type="Audio" setFile={setFile} files={VCState.files.length === 0 ? undefined : VCState.files}/>
                <VoiceNameInput setVoiceName={setVoiceName}/>
            </ServiceInputSection>
            <ServiceCheckbox isChecked={VCState.isChecked} setIsChecked={() => {VCDispatch({type:"isChecked",payload: !VCState.isChecked})}} checkText={`I hereby confirm that i am the owner of the voice or have obtained all necessary permissions and rights to use the voice`}/>
            <ProcessBtn btnText="Clone" process={getQueryResponse} enabled={VCState.files.length !== 0 && VCState.files.length <= 20 && (VCState.isChecked === true ? true : false) && VCState.voiceName !== ""} />
            {isProcessing === true && <ProcessModal processObj={processModals.voiceCloning} cancel={cancelRequest}/>}
            {VCState.processDone === true && <RedirectModal heading="Voice Has Been Cloned" description="Try Out" route="/dashboard/services/text-to-speech"/>}
            <ServiceErr error={processErr} setProcessErr={setProcessErr}/>
            <LoadingModal isProcessing={isProcessingAbility}/>
        </div>
    )
});

export default VCServiceInputSection;