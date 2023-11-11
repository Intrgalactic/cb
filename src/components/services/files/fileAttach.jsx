import { useEffect, useState } from "react";
import { SessionStorage } from "src/utilities/sessionStorage";

const FileAttach = ({ type, serviceName,setFile }) => {
    const [selectedFile, setSelectedFile] = useState(false);
    const [dragOver, setDragOver] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const files = e.dataTransfer.files;
        if (files.length) {
            files[0].size < 10485760 && (setSelectedFile(files[0]),setFile(files[0]));
        }
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        file.size <= 10485760  && (setSelectedFile(file),setFile(file));
    };
    useEffect(() => {
        if (selectedFile) {
            SessionStorage.storeFileData(`${serviceName}-file`, selectedFile);
        }
    }, [selectedFile]);

    return (
        <div className="file-attach">
            <p className="input-heading">Attach A {type} File</p>
            <div className="file-attach__container"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input type="file" onChange={handleFileChange} />
                <p>{dragOver === true ? "Drop" : selectedFile === false ? "Attach" : "Attached"}</p>
            </div>
        </div>
    )
}

export default FileAttach;