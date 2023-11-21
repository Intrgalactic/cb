import { AxiosFacade } from "src/lib/axios";

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
        console.log(err);
        setIsProcessing(false);
    })
    const fileToDownload = await AxiosFacade.getServiceFile(fileToDownloadName.fileName,ext);
    console.log(fileToDownload);
    dispatch({type:"fileToDownload",payload: fileToDownload});
}