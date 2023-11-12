import check from 'src/assets/images/check.png';

const ServiceCheckbox = ({isChecked,setIsChecked,checkText}) => {
    
    return (
        <div className="service-checkbox__container" onClick={setIsChecked}>
            <div className="service-checkbox">
                {isChecked === true && <img src={check} alt="checkmark"/>}
            </div>
            <p>{checkText}</p>
        </div>
    )
}

export default ServiceCheckbox;