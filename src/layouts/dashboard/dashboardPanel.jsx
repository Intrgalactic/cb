import DashboardBox from "src/components/dashboard/dashboardBox"
import ChooseServiceBox from "src/components/dashboard/chooseService/chooseServiceBox"
import SubscriptionDetails from "src/components/dashboard/subscriptionDetails/subscriptionDetails";
import UserDetailsBox from "src/components/dashboard/userDetails/userDetailsBox";
import UsageBox from "src/components/dashboard/usage/usageBox";

const DashboardPanel = () => {
    return (
        <div className="dashboard-panel">
            <DashboardBox heading="Usage Overview" containerClass="dashboard-box__usage-container">
                <UsageBox />
            </DashboardBox>
            <DashboardBox heading='Choose A Service' containerClass="dashboard-box__services-container">
                <ChooseServiceBox />
            </DashboardBox>
            <DashboardBox heading="Account Details" containerClass="dashboard-box__account-container">
                <UserDetailsBox />
            </DashboardBox>
            <DashboardBox heading="Subscription Details" containerClass="dashboard-box__subscription-container">
                <SubscriptionDetails />
            </DashboardBox>
        </div>
    )
}

export default DashboardPanel;