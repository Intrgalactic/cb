import { useNavigate } from "react-router-dom";
import UserDetail from "./userDetail";

const UserDetails = ({ heading, items, categoryImg,detailsIndex}) => {
    const navigate = useNavigate();
    return (
        <div className="dashboard-box__user-details">
            <h4>{heading}
            {detailsIndex === 0 &&
                <div className="account-details-edit" onClick={() => {navigate("/dashboard/settings")}}>
                    <p>Edit</p>
                </div>
            }
            </h4>
            <div className="dashboard-box__user-details__container">
                <img src={categoryImg} alt={heading} />
                <div className="dashboard-box__user-details__container__details">
                    {items.map((item,index) => (
                        <UserDetail content={item.content} key={index} img={item.img}/>
                    ))}
                </div>
            </div>
    
        </div>
    )
}

export default UserDetails;