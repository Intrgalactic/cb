import { useRef, useState } from "react";
import { SessionStorage } from "src/utilities/sessionStorage";
import scrollDown from 'src/assets/images/dashboard-scroll-down.png';

const OptionSelect = ({ category }) => {
    const optionsList = useRef();
    const imgRef = useRef();
    const [storageValue, setStorageValue] = useState(undefined);
    const selectOption = (option) => {
        SessionStorage.storeData(category.heading, option);
        setStorageValue(option);
    }
    const toggleList = () => {
        optionsList.current.classList.toggle("visible-options-list");
        imgRef.current.classList.toggle("rotated-scroll-down");
    }
    return (
        <div className="option-select" onClick={toggleList}>
            <div className="option-select-heading">
                <p>{storageValue !== undefined ? storageValue : category.heading}</p>
                <img ref={imgRef} src={scrollDown} alt="scroll down" className="option-select-list-img" />
            </div>
            <div className="option-select__options" ref={optionsList}>
                <div className="option-select__options__record" onClick={() => { selectOption(category.heading) }}>
                    <p>{category.heading}</p>
                </div>
                {category.options.map((option, index) => (
                    <div className="option-select__options__record" key={index} onClick={() => { selectOption(option) }}>
                        <p>{option}</p>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default OptionSelect;