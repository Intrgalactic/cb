import { useWindowSize } from "@uidotdev/usehooks";
import NavDetector from "../../navDetector";
import ImageEnhancerPanel from "./imageEnhancerPanel";
import 'src/styles/services/ie.css';

const ImageEnhancer = () => {
    const windowSize = useWindowSize(); 
    return (
        <div className="image-enhancer service-page">
            <NavDetector windowSize={windowSize}/>
            <ImageEnhancerPanel/>
        </div>
    )
}

export default ImageEnhancer;