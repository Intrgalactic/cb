import PaymentDetail from "./paymentDetail";
import recurringImg from 'src/assets/images/icons/gradient-details/recur.png';
import cardImg from 'src/assets/images/icons/gradient-details/card.png';
import infoImg from 'src/assets/images/icons/gradient-details/info.png';
import PaymentDetailModal from "./paymentDetailModal";
import ChangeServiceModal from "../changeServiceModal/changeServiceModal";
import { useState } from "react";
import ManagePaymentDetail from "./managePaymentDetail";

const PaymentDetails = () => {
    const [visibleModal,setVisibleModal] = useState(false);
    const details = [{
        src: recurringImg,
        heading: "Auto - Billing",
        subHeading: "Next Payment: 1.12.2023",
        children: "",
        btnSettingsArr: [{
            disable: true,
            disableText: "Stop Auto Recurring",
            enableText: "Enable Auto Recurring",
            action: () => {}
        }]
    },
    {
        src: cardImg,
        heading: "Saved Card",
        subHeading: "44XX - 92XX ",
        children: "",
        btnSettingsArr: [{
            disable: false,
            disableText: "",
            enableText: "Change",
            action: () => {}
        },{
            disable: true,
            disableText: "Remove",
            enableText: "",
            action: () => {}
        }]
    },
    {
        src: infoImg,
        heading: "Service",
        subHeading: "Starter",
        children: "",
        modal: <ChangeServiceModal/>,
        modalName:"service",
        btnSettingsArr: [{
            disable: false,
            disableText: "Downgrade",
            enableText: "Upgrade",
            action: () => {setVisibleModal("service")}
        }]
    }]
    return (
        <div className="payment-details">
            {details.map((detail, index) => (
                <div className="payment-details__container">
                    <PaymentDetail detail={detail} key={index} />
                    <ManagePaymentDetail btnSettingsArr={detail.btnSettingsArr}/>
                    {detail.modal && <PaymentDetailModal serviceName={detail.modalName} visibleModal={visibleModal} setVisibleModal={setVisibleModal} modal={detail.modal}/>}
                </div>
            ))}

        </div>
    )
}

export default PaymentDetails;