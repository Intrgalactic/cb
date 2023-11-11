
const ProcessBtn = ({btnText,process,enabled}) => {

    return (
        <div className="process">
            <button onClick={process} disabled={enabled} style={enabled !== false ? {backgroundColor: "var(--blue)"} : {}} className="process-btn">{btnText}</button>
        </div>
    )
}

export default ProcessBtn;