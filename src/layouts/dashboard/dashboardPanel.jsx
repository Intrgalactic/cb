import DashboardBox from "src/components/dashboard/dashboardBox"
import ChooseServiceBox from "src/components/chooseServiceBox"
import SubscriptionDetails from "src/components/subscriptionDetails";

const DashboardPanel = () => {
    return (
        <div className="dashboard-panel">
            <DashboardBox heading='Choose A Service'>
                <ChooseServiceBox/>
            </DashboardBox>
            <DashboardBox heading="Subscription Details">
                <SubscriptionDetails/>
            </DashboardBox>
            <DashboardBox heading="Subscription Details">
                <SubscriptionDetails/>
            </DashboardBox>
            <DashboardBox heading="Subscription Details">
                <SubscriptionDetails/>
            </DashboardBox>
        </div>
    )
}

export default DashboardPanel;