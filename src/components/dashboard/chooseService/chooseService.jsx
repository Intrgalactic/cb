import { useNavigate } from "react-router-dom";

const ChooseService = ({ name, img,link }) => {
    const navigate = useNavigate();
    return (
        <div className="dashboard-box__choose-service" onClick={() => {navigate(link)}}>
            <div className="dashboard-box__choose-service__container">
                <img src={img} alt={name} />
            </div>
            <p>{name}</p>
        </div>
    )
}

export default ChooseService;