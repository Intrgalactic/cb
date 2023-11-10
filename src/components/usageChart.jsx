const { useEffect, useReducer } = require("react")

const UsageChart = () => {
    const usageInitialState = {
        tts: undefined,
        stt: undefined,
        vc: undefined,
        ve: undefined,
        stv: undefined,
        sfv: undefined
    }
    const [usageState,usageDispatch] = useReducer(usageReducer,usageInitialState);
    const usageReducer = (state,action) => {
        for (const key of Object.keys(usageInitialState)) {
            if (key === action.type) {
                return { ...state, [key]: action.payload };
            }
        }
    }
    useEffect(() => {
        // retrieve user services usage     
    },[])
    return (
        <div className="usage-chart">
            
        </div>
    )
}