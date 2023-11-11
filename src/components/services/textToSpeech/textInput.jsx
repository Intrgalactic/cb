import ServiceMainInput from "../../../layouts/dashboard/services/serviceMainInput"

const TextInput = ({onChange}) => {
    return (
        <div className="text-input">
            <ServiceMainInput heading="Input Your Text">
                <textarea onChange={onChange} type="text" placeholder="This text has been generated with an artificial intelligence..."/>
            </ServiceMainInput>
        </div>
    )
}

export default TextInput;