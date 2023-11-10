import { useEffect,useState } from 'react';
import calendar from 'src/assets/images/icons/gradient-subscription-details/calendar.png';
import card from 'src/assets/images/icons/gradient-subscription-details/card.png';
import dollar from 'src/assets/images/icons/gradient-subscription-details/dollar.png';
import info from 'src/assets/images/icons/gradient-subscription-details/info.png';
import recur from 'src/assets/images/icons/gradient-subscription-details/recur.png';
import SubscriptionDetail from './subscriptionDetail';

const SubscriptionDetails = () => {
    const [subscriptionDetails,setSubscriptionDetails] = useState();
    useEffect(() => {
        //Retrieve User Subscription Details
    },[]);
    const details = [{
        img: card,
        content: "Saved Card - 44XX 92XX"
    },{
        img:calendar,
        content: "Bought At - 01.11.2023"
    },{
        img:dollar,
        content: "Payment Method - Visa"
    },{
        img:recur,
        content: "Next Payment - 01.12.2023"
    },{
        img:info,
        content: "Service - Starter"
    }]
    return (
        <div className="dashboard-box__subscription-details__box">
            {details.map((detail,index) => (
                <SubscriptionDetail img={detail.img} content={detail.content} key={index}/>
            ))}
        </div>
    )
}

export default SubscriptionDetails;