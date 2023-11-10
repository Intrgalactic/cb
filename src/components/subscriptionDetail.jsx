
const SubscriptionDetail = ({img,content}) => {
    return (
        <div className="subscription-detail">
            <img src={img} alt="subscription detail"/>
            <p>{content}</p>
        </div>
    );  
}

export default SubscriptionDetail;