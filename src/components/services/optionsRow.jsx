import OptionSelect from "./optionSelect";

const OptionsRow = ({categories}) => {
    return (
        <div className="options-row">
            {categories.map((category,index) => (
                <OptionSelect key={index} category={category}/>
            ))}
        </div>
    )
}

export default OptionsRow;