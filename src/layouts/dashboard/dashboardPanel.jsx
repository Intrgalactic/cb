import DashboardBox from "src/components/dashboard/dashboardBox"
import ChooseServiceBox from "src/components/chooseServiceBox"
import SubscriptionDetails from "src/components/subscriptionDetails";
import UserDetailsBox from "src/components/userDetailsBox";

const DashboardPanel = () => {
    return (
        <div className="dashboard-panel">
            <DashboardBox heading='Choose A Service' containerClass="dashboard-box__services-container">
                <ChooseServiceBox/>
            </DashboardBox>
            <DashboardBox heading="Subscription Details" containerClass="dashboard-box__subscription-container">
                <SubscriptionDetails/>
            </DashboardBox>
            <DashboardBox heading="Account Details" containerClass="dashboard-box__account-container">
                <UserDetailsBox/>
            </DashboardBox>
        </div>
    )
}

export default DashboardPanel;