import { useEffect, useRef } from 'react';
import loader from 'src/assets/images/loader.png';

const LoadingModal = ({isProcessing,isLoading}) => {
    const modalRef = useRef();
    useEffect(() => {
        isProcessing || isLoading ? modalRef.current.classList.add('visible-loading-modal') : modalRef.current.classList.remove('visible-loading-modal') ;
        isLoading ? modalRef.current.style.backgroundColor = "rgba(9, 0, 29, 1)" : modalRef.current.style.backgroundColor = "rgba(9, 0, 29, 0.6)"; 
    },[isProcessing,isLoading])
    return (
        <div className="loading-modal" ref={modalRef}>
            <img src={loader} alt="loader" width="70px" height="70px"/>
        </div>
    )
}

export default LoadingModal;