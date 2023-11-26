
const PaymentDetail = ({detail}) => {
    return (
        <div className="payment-detail">
            <div className="payment-detail__container">
                <img src={detail.src} alt="payment detail"/>
                <div className="payment-detail__container__inner">
                    <h4>{detail.heading}</h4>
                    <p>{detail.subHeading}</p>
                </div>
            </div>
            {detail.children}
        </div>
    )
}

export default PaymentDetail;