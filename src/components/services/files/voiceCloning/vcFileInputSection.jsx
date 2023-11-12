
import FileAttach from "../fileAttach";
import FilesList from "./filesList";

const VCFileInputSection = ({type,serviceName,setFile,files,fileTypes,deleteFile,multiple}) => {
    return (
        <div className="file-input-section">
            <FileAttach files={files} fileTypes={fileTypes} type={type} serviceName={serviceName} setFile={setFile} multiple={multiple}/>
            <FilesList deleteFile={deleteFile} files={files === undefined ? [] : files}/>
        </div>
    )
}

export default VCFileInputSection;