import CurrentService from "./currentService"
import AdditionalFeatures from "./features/additionalFeaturesList"
import ChoosePackageBtn from "./choosePackageBtn";
import MainBtn from "./mainBtn";
import { useEffect, useState } from "react";

const ChangeServiceModal = () => {
    const [service, setService] = useState("Essential");
    const [currentService, setCurrentService] = useState("Starter");
    useEffect(() => {
        //Get User Service Subscription Status Logic...
    },[])
    return (
        <div className="change-service-modal">
            <CurrentService service={currentService} />
            {currentService !== "Professional" && <>
                <AdditionalFeatures service={service} currentService={currentService} />
                <div className="change-service-modal__packages">
                    {currentService !== "Essential" && currentService !== "Professional" && <ChoosePackageBtn servicePackage="Essential" setService={setService} currentService={service}/>}
                    <ChoosePackageBtn servicePackage="Professional" setService={setService} currentService={service} />
                </div>
                <MainBtn />
            </>
            }
        </div>
    )
}

export default ChangeServiceModal;