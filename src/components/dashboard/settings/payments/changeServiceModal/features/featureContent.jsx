import { useEffect, useRef, useState } from "react";

const FeatureContent = ({ span, content,currentModalVisible }) => {
    const countRef = useRef();
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (currentModalVisible === "service") {
            const interval = setInterval(() => {
                if (count < span.slice(0, span.lastIndexOf("%"))) {
                    setCount(prevCount => prevCount + 1);
                } else {
                    clearInterval(interval);
                }
            }, 5);

            return () => {
                clearInterval(interval);
            }
        }
    }, [count,currentModalVisible]);
    useEffect(() => {
        if (currentModalVisible) setCount(0);
    }, [span,currentModalVisible]);
    return (
        <p>{span && <span ref={countRef} className="feature-higlight">{count}%</span>}{content}</p>
    )
}

export default FeatureContent;