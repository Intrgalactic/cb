import ServiceVideo from "./serviceVideo"
import SingleServiceAside from "./singleServiceAside"

const BottomServicesBranch = () => {
    return (
        <div className="bottom-services__branch">
            <SingleServiceAside
                heading="Cutting Edge Details"
                hasBtn={false}
                description="your gateway to elevating video resolution like never before. Our state-of-the-art service leverages cutting-edge technology to enhance the clarity, sharpness, and overall visual appeal of your videos"
            >
                <ServiceVideo src="" type="video/mp4" autoPlay={false}/>
            </SingleServiceAside>
            <SingleServiceAside
                hasBtn={false}
                heading="Bad Cases Killer"
                description="your go-to solution for making your films seem amazing and well-lit while overcoming the constraints of low light. Our creative solution makes use of state-of-the-art technology to improve your movies' brightness, clarity, and overall aesthetic appeal so they shine even in the worst of circumstances"
            >
                <ServiceVideo src="" type="video/mp4" autoPlay={false}/>
            </SingleServiceAside>
        </div>
    )
}

export default BottomServicesBranch;