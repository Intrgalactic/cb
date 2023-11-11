import { useEffect,useReducer } from "react";
import UsageBarRecord from "./usageBarRecord";

const UsageChart = () => {
    const usageInitialState = {
        tts: undefined,
        stt: undefined,
        vc: undefined,
        ve: undefined,
        stv: undefined,
        sfv: undefined
    }

    const usageReducer = (state,action) => {
        for (const key of Object.keys(usageInitialState)) {
            if (key === action.type) {
                return { ...state, [key]: action.payload };
            }
        }
    }
    const [usageState,usageDispatch] = useReducer(usageReducer,usageInitialState);
    useEffect(() => {
        // retrieve user services usage     
    },[])
    //Example Data

    const usage = [{
        name: "Text To Speech",
        value: "40%",
    },{
        name: "Speech To Text",
        value: "53%"
    },{
        name: "Voice Clone",
        value: "22%"
    },{
        name: "Video Enhance",
        value: "52%"
    },{
        name: "Subtitles To Video",
        value: '34%'
    },{
        name: "Subtitles From Video",
        value: "86%"
    }]
    return (
        <div className="usage-chart">
            {usage.map((bar,index) => (
                <UsageBarRecord value={bar.value} name={bar.name} key={index}/>
            ))}
        </div>
    )
}

export default UsageChart;