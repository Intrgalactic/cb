import OptionsRow from "./optionsRow";

const OptionsSelectSection = ({heading,categoriesRows}) => {
    return (
        <div className="options-select-section">
            <p className="input-heading">{heading}</p>
            <div className="options-select-section__rows">
                {categoriesRows.map((row,index) => (
                    <OptionsRow categories={row} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default OptionsSelectSection;