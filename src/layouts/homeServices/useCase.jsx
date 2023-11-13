import ServiceVideo from "./serviceVideo"

const UseCase = ({heading,src,type}) => {
    return (
        <div className="use-case">
            <p className="use-case-heading">{heading}</p>
            <ServiceVideo src={src} type={type} autoPlay={false}/>
        </div>
    )
}

export default UseCase;