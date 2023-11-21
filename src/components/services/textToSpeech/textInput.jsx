import { forwardRef } from "react";
import ServiceMainInput from "../../../layouts/dashboard/services/serviceMainInput"

const TextInput = forwardRef((props, ref) => {
    return (
        <div className="text-input">
            <ServiceMainInput heading="Input Your Text">
                <textarea ref={ref} type="text" placeholder="This text has been generated with an artificial intelligence..." />
            </ServiceMainInput>
        </div>
    )
});

export default TextInput;