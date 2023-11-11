import MobileNav from "src/layouts/dashboard/dashboardNavs/mobile/mobileNav"
import DesktopNav from "src/layouts/dashboard/dashboardNavs/desktop/desktopNav"

const NavDetector = ({windowSize}) => {
    return (
        <>
            {windowSize.width < 1024 ?
                <MobileNav /> : <DesktopNav />
            }
        </>
    )
}

export default NavDetector;