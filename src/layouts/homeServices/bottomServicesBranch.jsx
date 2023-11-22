import SingleServiceAside from "./singleServiceAside";
import unEnhancedImage from 'src/assets/images/unenhanced-image.jpg';
import enhancedImage from 'src/assets/images/enhancedimage.jpg';
import lowLightImage from 'src/assets/images/low-light-image.jpg';
import highLightImage from 'src/assets/images/high-light-image.jpg';
import CompareServiceSlider from "./compareServiceSlider";

const BottomServicesBranch = () => {
    return (
        <div className="bottom-services__branch">
            <SingleServiceAside
                heading="Cutting Edge Details"
                hasBtn={false}
                description="your gateway to elevating images resolution like never before. Our state-of-the-art service leverages cutting-edge technology to enhance the clarity, sharpness, and overall visual appeal of your images"
            >
                <CompareServiceSlider src={unEnhancedImage} secondSrc={enhancedImage} />
            </SingleServiceAside>
            <SingleServiceAside
                hasBtn={false}
                heading="Bad Cases Killer"
                description="your go-to solution for making your images seem amazing and well-lit while overcoming the constraints of low light. Our creative solution makes use of state-of-the-art technology to improve your movies' brightness, clarity, and overall aesthetic appeal so they shine even in the worst of circumstances"
            >
                <CompareServiceSlider src={lowLightImage} secondSrc={highLightImage} />
            </SingleServiceAside>
        </div>
    )
}

export default BottomServicesBranch;