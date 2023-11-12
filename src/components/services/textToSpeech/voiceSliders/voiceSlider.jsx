import { debounce } from "lodash";
import { useRef } from "react";
import { SessionStorage } from "src/utilities/sessionStorage";

const VoiceSlider = ({ leftScale, rightScale, heading, defaultValue,type }) => {
    const debounceSliderChange = debounce((e) => {
        SessionStorage.storeData(type,`${e.target.value}%`)
    },1000)
    return (
        <div className="voice-slider__container">
            <p className="input-heading">{heading}</p>
            <input className="voice-slider__container-slider" type="range" defaultValue={defaultValue} onChange={debounceSliderChange}/>
            <div className="voice-slider__container-scale">
                <p>{leftScale}</p>
                <p>{rightScale}</p>
            </div>
        </div>
    )
}

export default VoiceSlider;