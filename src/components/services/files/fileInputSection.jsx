import FileDownload from "./fileDownload"
import FileAttach from "./fileAttach"

const FileInputSection = ({type,serviceName,fileToDownload,setFile}) => {
    console.log(fileToDownload);
    return (
        <div className="file-input-section">
            <FileAttach type={type} serviceName={serviceName} setFile={setFile}/>
            <FileDownload fileToDownload={fileToDownload}/>
        </div>
    )
}

export default FileInputSection;