import { useEffect, useRef } from 'react';
import loader from 'src/assets/images/loader.png';

const LoadingModal = ({isProcessing}) => {
    const modalRef = useRef();
    useEffect(() => {
        modalRef.current.classList.toggle('visible-loading-modal');
    },[isProcessing])
    return (
        <div className="loading-modal" ref={modalRef}>
            <img src={loader} alt="loader" width="70px" height="70px"/>
        </div>
    )
}

export default LoadingModal;