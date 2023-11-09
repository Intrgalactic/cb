import MobileNavLink from "src/components/dashboard/navs/mobile/mobileNavLink";
import { dashboardNavLinks } from "src/utilities/utils";

const MobileLap = () => {
    return (
        <div className="mobile-nav__mobile-lap">
            {dashboardNavLinks.map((link,index) => (
                <MobileNavLink src={link.img} menu={link.menu ? link.menu : false} alt={link.name} key={index}/>
            ))}
        </div>
    )
}

export default MobileLap;