import { useEffect, useRef } from "react"

const ServiceErr = ({error,setProcessErr}) => {
    const errRef = useRef();
    useEffect(() => {
        if (error) {
            errRef.current.classList.toggle("visible-service-err");
            setTimeout(() => {
                errRef.current.classList.toggle("visible-service-err");
                setTimeout(() => {setProcessErr(false)},300);
            },3000);
        }
    },[error]);
    return (
        <div className="service-err" ref={errRef}>
            <p>An Error Ocurred</p>
            <p>{error}</p>
        </div>
    )
}

export default ServiceErr;