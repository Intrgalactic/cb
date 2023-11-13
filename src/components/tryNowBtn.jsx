import { useNavigate } from "react-router-dom"

const TryNowBtn = () => {
    const navigate = useNavigate();
    return (
        <button className="try-now-btn" onClick={() => {navigate("/try-it-now")} }>TRY NOW</button>
    )
}

export default TryNowBtn;