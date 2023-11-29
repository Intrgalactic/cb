import loader from 'src/assets/images/loader.png';
import downloadFileImg from 'src/assets/images/file-download.png';
import { useRef } from 'react';

const FileDownload = ({fileToDownload,fileToDownloadExtension}) => {
    const handleDownload = () => {
        console.log(fileToDownload);
        const url = URL.createObjectURL(fileToDownload);
        const link = document.createElement('a');
        link.href = url;
        link.download = `output.${fileToDownloadExtension}`;
        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(url);
    };
    const fileImgRef = useRef();
    const transformFileImg = () => {
        fileImgRef.current.classList.toggle("active-download-file-img");
    }
    return (
        <div className="file-download">
            <p className="input-heading">File To Download</p>
            <div className="file-download__container">
                {!fileToDownload ?
                    <>
                        <img src={loader} alt="loading"/>
                        <p>Waiting For File Input</p>
                    </>
                    : 
                    <>
                        <img src={downloadFileImg} alt="file" className='download-file-img' ref={fileImgRef}/>
                        <p>Download Your File</p>
                        <button onClick={handleDownload} className='download-file-button' onMouseOut={transformFileImg} onMouseOver={transformFileImg}>Download</button>
                    </>
                }
            </div>
        </div>
    )
}

export default FileDownload;