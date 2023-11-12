import { useRef } from 'react';
import fileImg from 'src/assets/images/file.png';
import deleteFileImg from 'src/assets/images/minus.png';

const FileRecord = ({file,deleteFile,index}) => {
    const audioRef = useRef();
    const playPause = () => {
        audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
    }
    const url = URL.createObjectURL(file);
    return (
        <div className="file-record" onClick={playPause}>
            <audio src={url} ref={audioRef}/>
            <img src={fileImg} alt="file"/>
            <p>{file.name.slice(0,10)}{file.name.length > 10 && "..."}</p>
            <p>{(file.size / 1000 / 1000).toFixed(2)} Mb</p>
            <img src={deleteFileImg} alt="delete" onClick={() => {deleteFile(index)}}/>
        </div>
    )
}

export default FileRecord;