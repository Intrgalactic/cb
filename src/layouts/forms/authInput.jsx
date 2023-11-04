import { forwardRef } from "react";

const AuthInput = forwardRef((props, ref) => {
    return (
        <label className="auth-label">
            <p className="auth-label__text">{props.label}</p>
            <input type={props.type} className="auth-input" ref={ref} defaultValue={ref.current.value} onChange={(e) => {ref.current.value = e.target.value}}/>
        </label>
    )
})

export default AuthInput;