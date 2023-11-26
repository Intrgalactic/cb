import Detail from "./detail";
import TwoStepAuth from "./twoStepAuth";

const Details = () => {
    const details = [{
        heading:"Email",
        edit: () => {},
        content: "mateuszrustowiczyt@gmail.com"
    },{
        heading: "Password",
        edit: () => {},
        content: "********"
    }]
    return (
        <div className="details">
            {details.map((detail,index) => (
                <Detail detail={detail} key={index}/>
            ))}
            <TwoStepAuth action={() => {}} isEnabled={false}/>
        </div>
    )
}

export default Details;