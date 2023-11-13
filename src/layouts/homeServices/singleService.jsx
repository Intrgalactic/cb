import ServiceVideo from "./serviceVideo";
import SingleServiceAside from "./singleServiceAside";

const SingleService = ({heading,description,src,type,autoPlay}) => {
    return (
        <div className="single-service">
            <ServiceVideo src={src} type={type} autoPlay={autoPlay}/>
            <SingleServiceAside heading={heading} description={description}/>
        </div>
    )
}

export default SingleService;