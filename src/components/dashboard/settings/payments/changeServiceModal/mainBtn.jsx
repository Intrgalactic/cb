
const MainBtn = ({isDisabled}) => {
    return (
        <button className="main-choose-package-btn">
            {isDisabled === true ? "Choose Package" : "Upgrade"}
        </button>
    )
}

export default MainBtn;
