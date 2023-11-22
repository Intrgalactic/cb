import { memo, useEffect, useReducer, useRef, useState } from "react";
import ServiceInputSection from "src/layouts/dashboard/services/serviceInputSection";
import FileInputSection from "../files/fileInputSection";
import ProcessBtn from "../processBtn";
import OptionsSelectSection from "../multipleServices/optionsSelectSection";
import FilesInput from "../files/voiceCloning/filesInput";
import { SessionStorage } from "src/utilities/sessionStorage";
import { processModals } from "src/utilities/utils";
import ProcessModal from "../process/processModal";
import axios from "axios";
import { fetchService, removeServiceVariables } from "src/utilities/services";
import { getFileFromBlobUrl } from "src/utilities/files";

const IEServiceInputSection = memo(() => {
    const IEInitialState = {
        file: undefined,
        type: "Image",
        fileToDownloadFile: undefined
    }
    const IEReducer = (state, action) => {
        for (const key of Object.keys(IEInitialState)) {
            if (key === action.type) {
                return { ...state, [key]: action.payload };
            }
        }
    }
    const [IEState, IEDispatch] = useReducer(IEReducer, IEInitialState);
    const [isProcessing, setIsProcessing] = useState(false);
    const abortRef = useRef();
    const setFile = (file) => {
        IEDispatch({ type: "file", payload: file[0] });
    }

    const categoriesRows = [[{
        heading: "Upscale",
        options: ["2x", "3x", "4x"]
    }, {
        heading: "Deblur",
        options: ["Enable", "Disable"]
    }, {
        heading: "Low Light Enhancement",
        options: ["Enable", "Disable"]
    }], [{
        heading: "Denoise",
        options: ["Enable", "Disable"]
    }, {
        heading: "Face Enhancement",
        options: ["Enable", "Disable"]
    }]];

    const fileTypes = [
        "image/jpeg",
        "image/png",
        "image/webp"
    ]

    const getQueryResponse = async () => {
        const reqBody = {
            file: IEState.file,
        }
        const abortController = new AbortController();
        abortRef.current = abortController;
        for (let categoryRow of categoriesRows) {
            for (let category of categoryRow) {
                const data = SessionStorage.getData(category.heading);
                if (data === null || data === category.heading) {
                    Object.assign(reqBody,{ [category.heading[0].toLowerCase() + category.heading.replace(/ /g, '').slice(1)]: "disable" });
                }
                else {
                    Object.assign(reqBody,{ [category.heading[0].toLowerCase() + category.heading.replace(/ /g, '').slice(1)]: data.toLowerCase() });
                }
            }
        }
        reqBody.file = await getFileFromBlobUrl(reqBody.file);
        setIsProcessing(true);
        console.log(reqBody);
        await fetchService(reqBody,"api/image-enhance",setIsProcessing,reqBody.file.type.split("/").pop(),IEDispatch,abortRef);
    }
    useEffect(() => {
        return () => {
            const variables = ["Upscale","Low Light Enhancement","Deblur","Face Enhancement","Denoise"];
            removeServiceVariables(variables);
        }
    })
    const cancelRequest = () => {
        abortRef.current.abort();
        setIsProcessing(false);
    }
    return (
        <div className="ie-service-input-section service-main-input-section">
            <ServiceInputSection>
                <FilesInput fileType="image" file={IEState.file} fileTypes={fileTypes} setFile={setFile} multiple={false} heading="Attach Your Image" />
                <FileInputSection
                    fileTypes={fileTypes}
                    type={IEState.type}
                    files={IEState.file}
                    fileToDownload={IEState.fileToDownload}
                    setFile={setFile}
                />
            </ServiceInputSection>
            <ProcessBtn enabled={IEState.file !== undefined ? true : false} btnText="Ehnance" process={getQueryResponse} />
            <OptionsSelectSection heading="Image Enhance Options" categoriesRows={categoriesRows} />
            {isProcessing === true && <ProcessModal cancel={cancelRequest} processObj={processModals.imageEnhancer} />}
        </div>
    )
});

export default IEServiceInputSection;