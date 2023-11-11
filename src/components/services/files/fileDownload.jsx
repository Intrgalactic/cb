import loader from 'src/assets/images/loader.png';

const FileDownload = ({fileToDownload}) => {
    const handleDownload = () => {

        const url = URL.createObjectURL(fileToDownload);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(url);
    };
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
                        <p>Download Your File</p>
                        <button onClick={handleDownload} className='download-file-buton'>Download</button>
                    </>
                }
            </div>
        </div>
    )
}

export default FileDownload;