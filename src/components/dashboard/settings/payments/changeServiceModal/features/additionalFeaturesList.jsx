import { useContext, useEffect, useState } from "react"
import gradientCheck from 'src/assets/images/gradient-check.png';
import { packagesData } from "src/utilities/utils";
import FeatureContent from "./featureContent";
import FeatureTooltip from "./featureTooltip";
import { ServicesContext } from "src/context/settingsServicesContext";

const AdditionalFeatures = ({ service, currentService }) => {
    const [features, setFeatures] = useState();
    useEffect(() => {
        compariseFeatures();
    }, [service]);
    const compariseFeatures = () => {
        const comparisedValues = [];
        for (const servicePackage of packagesData) {
            for (const [key, value] of Object.entries(servicePackage)) {
                if (key === "name") {
                    if (value === currentService) {
                        pushValuesToFeaturesArr(comparisedValues, servicePackage);
                    }
                }
            }
        }
        setFeatures(comparisedValues);
    }
    const pushValuesToFeaturesArr = (arr, servicePackage) => {
        const currentServicePackageValues = Object.fromEntries(Object.entries(servicePackage).slice(1));
        const selectedServicePackageValues = packagesData.find(item => item.name === service);
        for (const [key, value] of Object.entries(currentServicePackageValues)) {
            arr.push({
                span: `${((selectedServicePackageValues[key] - value) / value) * 100}%`,
                content: ` More ${key === "tts" ? "Characters" : "Hours"} In ${key.toUpperCase()} Than In The Current Package`,
                tooltip: `${convertAcronym(key)}`

            })
        }
    }

    const convertAcronym = (acronym) => {
        switch (acronym) {
            case "tts": return "Text To Speech";
            case "stt": return "Speech To Text";
            case "stv": return "Subtitles To Video";
            case "sfv": return "Subtitles From Video";
        }
    }
    const currentModalVisible = useContext(ServicesContext);

    return (
        <div className="additional-features">
            {features &&
                <>
                    {features.map((feature, index) => (
                        <div className="feature" key={index}>
                            <img src={gradientCheck} alt="feature" />
                            <FeatureContent currentModalVisible={currentModalVisible} span={feature.span ? feature.span : false} content={feature.content} />
                            {feature.tooltip &&
                                <FeatureTooltip tooltip={feature.tooltip} />
                            }
                        </div>
                    ))}
                </>
            }
        </div>
    )
}

export default AdditionalFeatures;