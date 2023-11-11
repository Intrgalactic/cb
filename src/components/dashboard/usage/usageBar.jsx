import { useEffect,useRef } from "react";
const UsageBar = ({value,name}) => {
    const usedRef = useRef();
    useEffect(() => {
        if (usedRef.current) {
            usedRef.current.style.height = value;
        }
    },[value,usedRef.current]);
    return (
        <div className="usage-bar"> 
            <div className="usage-bar__used-value" ref={usedRef}>

            </div>
            <div className="usage-bar__record-service-name">
                <p>{name}</p>
                <p>Usage: {value}</p>
            </div>
        </div>
    )
}

export default UsageBar;