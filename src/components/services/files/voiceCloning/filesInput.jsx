import { useRef, useState } from "react";
import ServiceMainInput from "src/layouts/dashboard/services/serviceMainInput";
import { handleDragLeave, handleDragOver, handleDrop, handleFileChange } from "src/utilities/files";

const FilesInput = ({ file, setFile, multiple, fileTypes, heading }) => {
    const [dragOver, setDragOver] = useState(false);
    const inputRef = useRef();

    return (
        <div className="files-input__container">
            <ServiceMainInput heading={heading}>
                {file ?
                    <div className="file-video">
                        <video controls>
                            <source src={URL.createObjectURL(file)} type={file.type} />
                        </video>
                    </div>
                    :
                    <div className="files-input__container__inner"
                        onDragOver={(e) => { handleDragOver(e, setDragOver, setFile) }}
                        onDragLeave={(e) => { handleDragLeave(e, setDragOver, setFile) }}
                        onDrop={(e) => { handleDrop(e, fileTypes, setDragOver, 10485760, setFile, () => { }) }}
                    >
                        <input multiple={multiple} accept={fileTypes.join(",")} ref={inputRef} type="file" onChange={(e) => { handleFileChange(e, fileTypes, 10485760, setFile, () => { }) }} />
                        <button className="files-input-btn" onClick={() => { inputRef.current.click() }}>{dragOver === true ? "Drop Files" : "Attach Files"}</button>
                    </div>
                }
            </ServiceMainInput>
        </div>
    )
}

export default FilesInput;