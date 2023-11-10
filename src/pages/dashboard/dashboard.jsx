import { useWindowSize } from "@uidotdev/usehooks";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/context/authContext";
import DesktopNav from "src/layouts/dashboard/dashboardNavs/desktop/desktopNav";
import MobileNav from "src/layouts/dashboard/dashboardNavs/mobile/mobileNav";
import DashboardPanel from "src/layouts/dashboard/dashboardPanel";
import "src/styles/dashboard.css";

const Dashboard = () => {
    const windowSize = useWindowSize();
    const navigate = useNavigate();
    const user = useContext(AuthContext);

    return (
        <div className="dashboard">
            {windowSize.width < 1024 ?
                <MobileNav/> : <DesktopNav/>
            }
            <DashboardPanel/>
        </div>
    )
}

export default Dashboard