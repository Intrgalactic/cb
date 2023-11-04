import { useEffect, useRef } from 'react';
import loader from 'src/assets/images/loader.png';

const LoadingModal = ({isProcessing}) => {
    const modalRef = useRef();
    useEffect(() => {
        isProcessing ? modalRef.current.classList.add('visible-loading-modal') : modalRef.current.classList.remove('visible-loading-modal') ;
    },[isProcessing])
    return (
        <div className="loading-modal" ref={modalRef}>
            <img src={loader} alt="loader" width="70px" height="70px"/>
        </div>
    )
}

export default LoadingModal;