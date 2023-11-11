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
import { getBackgroundOnSizeChange, loadBackgrounds } from "src/utilities/assetsLoaders";
import LoadingModal from "src/layouts/loadingModal";
import NavDetector from "./navDetector";

const backgrounds = [[mobileDashboard], [mediumDashboard], [dashboard]];

const Dashboard = () => {
    const windowSize = useWindowSize();
    const navigate = useNavigate();
    const user = useContext(AuthContext);
    const [backgroundsLoaded, setBackgroundsLoaded] = useState(false);
    const prevWindowSize = useRef(windowSize.width);

    useEffect(() => {
        const checkWindowSizeChange = () => {
            const crossed650 = (windowSize.width >= 650 && prevWindowSize.current < 650) || (windowSize.width < 650 && prevWindowSize.current >= 650) || (windowSize.width < 650 && prevWindowSize.current === windowSize.width);
            const crossed1024 = (windowSize.width >= 1024 && prevWindowSize.current < 1024) || (windowSize.width < 1024 && prevWindowSize.current >= 1024) || (windowSize.width < 650 && prevWindowSize.current === windowSize.width);
            return crossed650 || crossed1024;
        };

        if (checkWindowSizeChange()) {
            const backgroundImagesUrls = getBackgroundOnSizeChange(backgrounds, windowSize);
            loadBackgrounds(setBackgroundsLoaded, backgroundImagesUrls);
        }
        prevWindowSize.current = windowSize.width;
    }, [setBackgroundsLoaded, windowSize.width])
    
    return (
        <>
            {backgroundsLoaded ?
                <div className="dashboard">
                    <NavDetector windowSize={windowSize}/>
                    <DashboardPanel />
                </div> : <LoadingModal isLoading={true} />
            }
        </>
    )
}

export default Dashboard