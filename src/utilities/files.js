
export const handleDragOver = (e, setDragOver) => {
    e.preventDefault();
    setDragOver(true);
};

export const handleDragLeave = (e, setDragOver) => {
    e.preventDefault();
    setDragOver(false);
};

export const handleDrop = (e, fileTypes, setDragOver, maxFileSize, setFile) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    handleMultipleFiles(files,setFile,fileTypes,maxFileSize);
};
export const handleFileChange = (event, fileTypes, maxFileSize, setFile) => {
    const files = event.target.files;
    handleMultipleFiles(files,setFile,fileTypes,maxFileSize);
};

export const handleMultipleFiles = (files,setFile,fileTypes,maxFileSize) => {
    const filteredFiles = [];
    if (files.length) {
        for (let i = 0; i < files.length; i++) {
            for (const fileType of fileTypes) {
                if (i === 20) {
                    break;
                }
                else if (files[i].type.includes(fileType.substring(fileType.indexOf('/')))) {
                    files[i].size < maxFileSize && filteredFiles.push(files[i]);
                }
            }
        }
        setFile(filteredFiles);
    }
}

export const getFileFromBlobUrl = async (requestFile) => {
    return await fetch(requestFile).then(response => response.blob()).then(blob => {
        const urlParts = requestFile.split('/');
            const fileName = urlParts[urlParts.length - 1];
            const file = new File([blob], fileName, { type: blob.type });
            console.log(file);
            return file;
    })
}