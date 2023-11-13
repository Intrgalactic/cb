import { ReactCompareSlider } from "react-compare-slider";
import SingleServiceAside from "./singleServiceAside";
const CompareService = ({ heading, description }) => {
    return (
        <div className="compare-service">
            <SingleServiceAside heading={heading} description={description} comparing={true} hasBtn={false}>
                <div className="compare-service__slider">
                    <ReactCompareSlider
                        itemOne={
                            <video controls style={{ width: '100%', height: '100%' }}>
                                <source src="path_to_your_first_video" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        }
                        itemTwo={
                            <video controls style={{ width: '100%', height: '100%' }}>
                                <source src="path_to_your_second_video" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        }
                    />
                </div>
            </SingleServiceAside>
        </div>
    )
}

export default CompareService;