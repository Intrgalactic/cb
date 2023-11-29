import ServiceMainInput from "../../../layouts/dashboard/services/serviceMainInput"

const TextInput = ({setTextInput}) => {
    return (
        <div className="text-input">
            <ServiceMainInput heading="Input Your Text">
                <textarea onChange={(e) => {setTextInput(e.target.value)}} type="text" placeholder="This text has been generated with an artificial intelligence..." />
            </ServiceMainInput>
        </div>
    )
};

export default TextInput;