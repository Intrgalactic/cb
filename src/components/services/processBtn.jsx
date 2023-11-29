
const ProcessBtn = ({btnText,process,enabled}) => {

    return (
        <div className="process">
            <button onClick={enabled ? process : () => {}} disabled={enabled === false ? true : false} className={`process-btn ${enabled ? "enabled-process-btn" : ""}`}><p>{btnText}</p></button>
        </div>
    )
}

export default ProcessBtn;