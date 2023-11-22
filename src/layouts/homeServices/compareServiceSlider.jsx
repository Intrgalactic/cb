import { ReactCompareSlider } from "react-compare-slider"

const CompareServiceSlider = ({src,secondSrc}) => {
    return (
        <div className="compare-service__slider">
        <ReactCompareSlider
            itemOne={
                <img src={src} width="100%" height="100%" />
            }
            itemTwo={
                <img src={secondSrc} width="100%" height="100%" />
            }
        />
    </div>
    )
}

export default CompareServiceSlider;