import infoImg from 'src/assets/images/icons/gradient-details/info.png';

const CurrentService = ({service}) => {
    return (
        <div className="current-service">
            <img src={infoImg} alt="current service"/>
            <h3>Current Service</h3>
            <p>{service}</p>
        </div>
    )
}

export default CurrentService;