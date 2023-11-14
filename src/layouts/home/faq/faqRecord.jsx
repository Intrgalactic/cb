import { useEffect, useRef } from 'react';
import scrollDown from 'src/assets/images/dashboard-scroll-down.png';

const FaqRecord = ({ question, answer,currentOpenedIndex,setCurrentOpenedIndex,index }) => {
    const answerRef = useRef();
    const imageRef = useRef();
    const toggleAnswer = () => {
        answerRef.current.classList.toggle('visible-answer');
        imageRef.current.classList.toggle('rotated-scroll-down');
        setCurrentOpenedIndex(index);
    }
    useEffect(() => {
        if (currentOpenedIndex === index) {
            answerRef.current.classList.add('visible-answer');
            imageRef.current.classList.add('rotated-scroll-down');
        }
        else {
            answerRef.current.classList.remove('visible-answer');
            imageRef.current.classList.remove('rotated-scroll-down');
        }
    },[currentOpenedIndex]);
    return (
        <div className="faq__record">
            <div className="faq__record__question" onClick={toggleAnswer}>
                <p>{question}</p>
                <img src={scrollDown} alt="scroll down" width="30px" ref={imageRef} />
            </div>
            <div className='faq__record__answer' ref={answerRef}>
            <p className='answer'>{answer}</p>
            </div>
        </div>
    )
}

export default FaqRecord