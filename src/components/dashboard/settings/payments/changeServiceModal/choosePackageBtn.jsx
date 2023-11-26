 
const ChoosePackageBtn = ({servicePackage,setService,currentService}) => {
    console.log(currentService);
    return (
        <button onClick={() => {setService(servicePackage)}} style={currentService === servicePackage ? {backgroundColor: "var(--blue)"} : {backgroundColor: "#393939"}} className="choose-package-btn">
            {servicePackage}
        </button>
    )
}

export default ChoosePackageBtn;