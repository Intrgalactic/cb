import { AxiosFacade } from "src/lib/axios";
import { SessionStorage } from "./sessionStorage";

export const fetchService = async (body, endpoint, setIsProcessing, ext, dispatch, abortRef, hasFileToReturn,hasBody) => {
    const abortController = new AbortController();
    abortRef.current = abortController;
    const config = {
        withCredentials: true,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        signal: abortController.signal
    }
    const formData = new FormData();
    for (const [key, value] of Object.entries(body)) {
        if (typeof (value) === "object") {
            if (value.length !== undefined) {
                for (const file of value) {
                    console.log(file);
                    formData.append('files', file, file.name);
                }
            }
            else {
                formData.append("file",value,value.name);
            }
        }
        else {
            formData.append([key], value);
        }
    }

    const response = await AxiosFacade.getService(formData, config, endpoint).catch(err => {
        console.log(err);
        setIsProcessing(false);
    })

    if (response) {
        if (hasFileToReturn) {
            const fileToDownload = await AxiosFacade.getServiceFile(response.fileName, ext);
            dispatch({ type: "fileToDownload", payload: fileToDownload });
            dispatch({ type: "fileToDownloadExtension", payload: ext });
            if (hasBody) {
                dispatch({type: "outputData",payload:response.data});
            }
            setIsProcessing(false);
            
        }
        
        else {
            dispatch({ type: "processDone", payload: true });
            setIsProcessing(false);
        }

    }
}

export const removeServiceVariables = (variables) => {
    for (const variable of variables) {
        SessionStorage.deleteData(variable);
    }
}