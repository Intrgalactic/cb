import UsageBar from "./usageBar";

const UsageBarRecord = ({value,name}) => {
    /* <p className="usage-bar__record-service-name">{name}</p> service name*/
    return (
        <div className="usage-bar__record">
            <UsageBar value={value} name={name}/>
        </div>
    )
}

export default UsageBarRecord;