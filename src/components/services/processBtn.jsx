
const ProcessBtn = ({btnText,process,disabled}) => {

    return (
        <div className="process">
            <button onClick={process} disabled={disabled} style={disabled === false ? {backgroundColor: "var(--blue)"} : {}} className="process-btn">{btnText}</button>
        </div>
    )
}

export default ProcessBtn;