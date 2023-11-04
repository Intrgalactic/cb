import { forwardRef, useEffect } from "react";

const ValidateErr = forwardRef((props,ref) => {
    return (
        <div className="validate-err" ref={ref}>
            <p>Form Submission Error</p>
            <p>{props.err}</p>
        </div>
    )  
})

export default ValidateErr;