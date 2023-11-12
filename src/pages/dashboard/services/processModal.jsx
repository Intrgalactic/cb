
const ProcessModal = ({img,text}) => {
    return (
        <div className="process-modal">
            <img src={img} alt="process icon"/>
            <p>{text}</p>
        </div>
    )
}