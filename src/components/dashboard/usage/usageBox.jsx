import UsageChart from "./usageChart";
import UsageScale from "./usageScale";

const UsageBox = () => {
    return (
        <div className="dashboard-box__usage__box">
            <UsageScale/>
            <UsageChart/>
        </div>
    )
}

export default UsageBox;