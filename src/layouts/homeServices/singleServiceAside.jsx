import TryNowBtn from "src/components/tryNowBtn"

const SingleServiceAside = ({heading,description,children,comparing,hasBtn}) => {
    return (
        <div className="single-service__aside">
            <h3 className="single-service__aside-heading">{heading}</h3>
            {!comparing && <>{children}</>}
            <p>{description}</p>
            {comparing === true && <>{children}</>}
            {hasBtn !== false && <TryNowBtn/>}
        </div>
    )
}

export default SingleServiceAside;