import OutputTypeContent from "./outputTypeContent";

const OutputTypeContentList = ({icon,alt,children,category}) => {
    return (
        <div className="output-type-content-list">
            <div className="output-type-content-icon">
                <img src={icon} alt={alt}/>
            </div>
            <OutputTypeContent category={category}>
                {children}
            </OutputTypeContent>
        </div>
    )
}

export default OutputTypeContentList;