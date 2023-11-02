
const FormCheckbox = ({classN,description}) => {
    return (
        <label className="form-checkbox">
            <input type="checkbox" required className={classN}/>
            <span className="checkmark"></span>
            <p className="checkbox-description">{description}.</p>
        </label>
    )
}

export default FormCheckbox;