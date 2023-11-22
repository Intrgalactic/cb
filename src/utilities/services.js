import { AxiosFacade } from "src/lib/axios";
import { SessionStorage } from "./sessionStorage";

export const fetchService = async (body,endpoint,setIsProcessing,ext,dispatch,abortRef) => {
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
    for (const [key,value] of Object.entries(body)) {
        formData.append([key],value);
    }
    const fileToDownloadName = await AxiosFacade.getService(formData,config,endpoint).catch(err => {
        console.log(err,525);
   
    })
    console.log(fileToDownloadName);
    const fileToDownload = await AxiosFacade.getServiceFile(fileToDownloadName.fileName,ext);
    dispatch({type:"fileToDownload",payload: fileToDownload});
    dispatch({type: "fileToDownloadExtension",payload: ext});
    setIsProcessing(false);
}

export const removeServiceVariables = (variables) => {
    for (const variable of variables) {
        SessionStorage.deleteData(variable);
    }
}