import { dashboardNavLinks } from "src/utilities/utils"
import DesktopNavLink from "src/components/dashboard/navs/desktop/desktopNavLink"

const DesktopLap = () => {
    return (
        <div className="desktop-nav__desktop-lap">
            {dashboardNavLinks.map((link, index) => (
                <DesktopNavLink link={link.link} key={index} name={link.name} menu={link.menu} />
            ))}
        </div>
    )
}

export default DesktopLap;