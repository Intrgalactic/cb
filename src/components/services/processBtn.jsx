
const ProcessBtn = ({btnText,process,enabled}) => {

    return (
        <div className="process">
            <button onClick={enabled ? process : () => {}} disabled={enabled === false ? true : false} style={enabled === true ? {backgroundColor: "var(--blue)"} : {}} className="process-btn">{btnText}</button>
        </div>
    )
}

export default ProcessBtn;