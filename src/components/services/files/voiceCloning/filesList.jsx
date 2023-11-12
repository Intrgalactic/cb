import FileRecord from "./fileRecord";

const FilesList = ({ files, deleteFile }) => {
    return (
        <div className="file-list">
            <p className="input-heading">Attached Voice Samples</p>
            <div className="file-list__container">
                {files.length > 0 ?
                <>
                    {
                        files.map((file, index) => (
                            <FileRecord deleteFile={deleteFile} file={file} key={index} index={index} />
                        ))
                    }
                </> :
                <>
                    <p className="voice-sample-msg">Add Your Voice Samples <br/> Up To 20 Files (Up To 20 Mb)</p>
                </>
                    }
            </div>
        </div>
    )
}

export default FilesList;