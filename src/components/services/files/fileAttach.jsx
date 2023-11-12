import { useState } from "react";
import { handleDragLeave, handleDragOver, handleDrop, handleFileChange } from "src/utilities/files";

const FileAttach = ({ type,setFile,fileTypes,multiple,files }) => {

    const [dragOver, setDragOver] = useState(false);

    return (
        <div className="file-attach">
            <p className="input-heading">Attach A {type} File</p>
            <div className="file-attach__container"
                onDragOver={(e) => {handleDragOver(e,setDragOver,setFile)}}
                onDragLeave={(e) => {handleDragLeave(e,setDragOver,setFile)}}
                onDrop={(e) => {handleDrop(e,fileTypes,setDragOver,10485760,setFile)}}
            >
                <input multiple={multiple === true ? true : false} type="file" accept={fileTypes.join(",")} onChange={(e) => {handleFileChange(e,fileTypes,10485760,setFile)}} />
                <p>{dragOver === true ?  "Drop" :  files !== undefined ? "Attached" : "Attach"}</p>
            </div>
        </div>
    )
}

export default FileAttach;