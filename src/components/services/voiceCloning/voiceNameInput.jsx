
const VoiceNameInput = ({setVoiceName}) => {
    return (
        <div className="voice-name-input">
            <p>Voice Name: </p>
            <input type="text" onChange={(e) => {setVoiceName(e.target.value)}} placeholder="Name"/>
        </div>
    )
}

export default VoiceNameInput;