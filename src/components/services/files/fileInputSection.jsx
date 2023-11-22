import FileDownload from "./fileDownload"
import FileAttach from "./fileAttach"

const FileInputSection = ({type,serviceName,fileToDownload,setFile,fileTypes,files,fileToDownloadExtension}) => {
    return (
        <div className="file-input-section">
            <FileAttach type={type} files={files} serviceName={serviceName} setFile={setFile} fileTypes={fileTypes}/>
            <FileDownload fileToDownload={fileToDownload} fileToDownloadExtension={fileToDownloadExtension}/>
        </div>
    )
}

export default FileInputSection;