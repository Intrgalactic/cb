import { useNavigate } from "react-router-dom";

const RedirectModal = ({heading,description,route}) => {
    const navigate = useNavigate();
    return (
        <div className="redirect-modal process-modal">
            <div className="process-modal__container">
                <p>Voice Has Been Cloned</p>
                <p>Try Your New Voice</p>
                <button className="redirect-btn" onClick={() => { navigate(route) }}>Try</button>
            </div>
        </div>
    )
}

export default RedirectModal;