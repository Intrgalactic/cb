import { useRef } from 'react';
import scrollDown from 'src/assets/images/dashboard-scroll-down.png';

const FaqRecord = ({ question, answer }) => {
    const answerRef = useRef();
    const toggleAnswer = () => {
        answerRef.current.classList.toggle('visible-answer');
    }
    return (
        <div className="faq__record">
            <div className="faq__record__question" onClick={toggleAnswer}>
                <p>{question}</p>
                <img src={scrollDown} alt="scroll down" width="30px" />
            </div>
            <p className='answer' ref={answerRef}>{answer}</p>
        </div>
    )
}

export default FaqRecord;