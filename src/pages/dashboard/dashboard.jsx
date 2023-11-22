import { useWindowSize } from "@uidotdev/usehooks";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/context/authContext";
import DesktopNav from "src/layouts/dashboard/dashboardNavs/desktop/desktopNav";
import MobileNav from "src/layouts/dashboard/dashboardNavs/mobile/mobileNav";
import DashboardPanel from "src/layouts/dashboard/dashboardPanel";
import "src/styles/dashboard.css";

import mobileDashboard from 'src/assets/images/mobile-dashboard.jpg';
import mediumDashboard from 'src/assets/images/medium-dashboard.jpg';
import dashboard from 'src/assets/images/dashboard.jpg'
import { checkWindowSizeChange, getBackgroundOnSizeChange, loadBackgrounds } from "src/utilities/assetsLoaders";
import LoadingModal from "src/layouts/loadingModal";
import NavDetector from "./navDetector";

const backgrounds = [[mobileDashboard], [mediumDashboard], [dashboard]];

const Dashboard = () => {
    const windowSize = useWindowSize();
    const navigate = useNavigate();
    const user = useContext(AuthContext);
    const [layoutsLoaded, setLayoutsLoaded] = useState({
        mobile: false,
        medium: false,
        full: false
      });
    const prevWindowSize = useRef(windowSize.width);
    const currentLayout = useRef();
    useEffect(() => {
        if (checkWindowSizeChange(windowSize,currentLayout,prevWindowSize) && currentLayout.current !== true) {
            const backgroundImagesUrls = getBackgroundOnSizeChange(backgrounds, windowSize);
            loadBackgrounds(setLayoutsLoaded, backgroundImagesUrls);
        }
        prevWindowSize.current = windowSize.width;
    }, [setLayoutsLoaded, windowSize.width])
    
    return (
        <>
            {layoutsLoaded ?
                <div className="dashboard">
                    <NavDetector windowSize={windowSize}/>
                    <DashboardPanel />
                </div> : <LoadingModal isLoading={true} />
            }
        </>
    )
}

export default Dashboard