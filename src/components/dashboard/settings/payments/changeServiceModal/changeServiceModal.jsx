import CurrentService from "./currentService"
import AdditionalFeatures from "./additionalFeaturesList"
import ChoosePackageBtn from "./choosePackageBtn";
import MainBtn from "./mainBtn";

const ChangeServiceModal = () => {
    return (
        <div className="change-service-modal">
            <CurrentService service="Starter"/>
            <AdditionalFeatures service="Starter"/>
            <div className="change-service-modal__packages">
                <ChoosePackageBtn servicePackage="Essential"/>
                <ChoosePackageBtn servicePackage="Professional"/>
            </div>
            <MainBtn/>
        </div>
    )
}

export default ChangeServiceModal;