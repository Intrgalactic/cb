import IEServiceInputSection from "src/components/services/imageEnhancer/ieServiceInputSection";
import ServiceHeading from "src/layouts/dashboard/services/serviceHeading";

const ImageEnhancerPanel = () => {
    return (
        <div className="image-enhancer__panel service-panel">
            <ServiceHeading heading="Image Enhancer" description="Effortlessly Enhance Visual Clarity in Every Image with Precision"/>
            <IEServiceInputSection/>
        </div>
    )
}

export default ImageEnhancerPanel;