import { ReactCompareSlider } from "react-compare-slider";
import SingleServiceAside from "./singleServiceAside";
const CompareService = ({ heading, description,src,secondSrc }) => {
    return (
        <div className="compare-service">
            <SingleServiceAside heading={heading} description={description} comparing={true} hasBtn={false}>
                <div className="compare-service__slider">
                    <ReactCompareSlider
                        itemOne={
                            <img src={src} width="100%" height="100%"/>
                        }
                        itemTwo={
                            <img src={secondSrc} width="100%" height="100%"/>
                        }
                    />
                </div>
            </SingleServiceAside>
        </div>
    )
}

export default CompareService;