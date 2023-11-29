import { useRef } from 'react';
import scrollDown from 'src/assets/images/dashboard-scroll-down.png';

const OutputTypeContent = ({children,category}) => {
    const toggleContent = () => {
        contentRef.current.classList.toggle('visible-output-content')
    }
    const contentRef = useRef();
    return (
        <div className="output-type-content">
            <div className="output-type-content__expand" onClick={toggleContent}>
                <p>{category}</p>
                <img src={scrollDown} alt="down scroll"/>
            </div>
            <div className='output-content' ref={contentRef}>
                {children}
            </div>
        </div>
    )
}

export default OutputTypeContent;