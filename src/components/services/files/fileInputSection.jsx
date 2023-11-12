import FileDownload from "./fileDownload"
import FileAttach from "./fileAttach"

const FileInputSection = ({type,serviceName,fileToDownload,setFile,fileTypes,files}) => {
    return (
        <div className="file-input-section">
            <FileAttach type={type} files={files} serviceName={serviceName} setFile={setFile} fileTypes={fileTypes}/>
            <FileDownload fileToDownload={fileToDownload}/>
        </div>
    )
}

export default FileInputSection;