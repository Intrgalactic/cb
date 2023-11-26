import { useEffect, useState } from "react"
import gradientCheck from 'src/assets/images/gradient-check.png';

const AdditionalFeatures = ({ service }) => {
    const [features, setFeatures] = useState();
    useEffect(() => {
        if (service.toLowerCase() === "starter") {
            setFeatures([{
                span: "150%",
                content: ' More Characters In TTS Than The Current Package',
                tooltip: 'Text To Speech'
            },
            {
                span: "50%",
                content: ' More Hours In STT Than The Current Package',
                tooltip: 'Speech To Text'
            },
            {
                span: "100%",
                content: ' More Hours In STV Than The Current Package',
                tooltip: 'Subtitles To Video'
            },
            {
                span: "100%",
                content: ' More Hours In  SFV Than The Current Package',
                tooltip: 'Subtitles From Video'
            },
            {
                content: 'Access To Video Enhancer',
                tooltip: false
            }])
        }
    }, [service])
    return (
        <div className="additional-features">
            {features &&
                <>
                    {features.map((feature, index) => (
                        <div className="feature" key={index}>
                            <img src={gradientCheck} alt="feature" />
                            <p>{feature.span && <span className="feature-higlight">{feature.span}</span>}{feature.content}</p>
                            {feature.tooltip &&
                                <div className="feature__tooltip">
                                    <p>{feature.tooltip}</p>
                                </div>
                            }
                        </div>
                    ))}
                </>
            }
        </div>
    )
}

export default AdditionalFeatures;