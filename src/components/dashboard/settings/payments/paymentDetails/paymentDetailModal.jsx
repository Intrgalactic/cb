import { useEffect, useRef } from "react";
import cross from 'src/assets/images/cross.png';
import { ServicesContext } from "src/context/settingsServicesContext";

const PaymentDetailModal = ({ modal, visibleModal, serviceName, setVisibleModal }) => {
    const modalRef = useRef();
    useEffect(() => {
        if (serviceName === visibleModal) modalRef.current.classList.add("visible-payment-detail-modal");
        else modalRef.current.classList.remove("visible-payment-detail-modal");
    }, [visibleModal])
    return (
        <>
            <div className="payment-detail-modal" ref={modalRef}>
                <ServicesContext.Provider value={visibleModal}>
                    {modal}
                </ServicesContext.Provider>
            </div>
            {visibleModal === serviceName && <img src={cross} alt="cross sign" className="close-modal-cross" onClick={() => { setVisibleModal(false) }} />}
        </>
    )
}

export default PaymentDetailModal;