
const ProcessModal = ({ processObj,cancel }) => {
    const { src, alt, processText } = processObj;
    return (
        <div className="process-modal">
            <div className="process-modal__container">
                <img src={src} alt={alt} className="process-image" width="70px" height="70px"/>
                <p>{processText}</p>
                <button onClick={cancel} className="cancel-process-btn">Cancel</button>
            </div>
        </div>
    )
}

export default ProcessModal;