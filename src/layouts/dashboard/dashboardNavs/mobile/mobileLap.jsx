import { useEffect, useRef, useState } from "react";
import MobileNavLink from "src/components/dashboard/navs/mobile/mobileNavLink";
import { dashboardNavLinks } from "src/utilities/utils";

const MobileLap = () => {
    const lapRef = useRef();
    const [linkListChanged, setLinkListChanged] = useState(false);
    useEffect(() => {
        if (lapRef.current) {
            lapRef.current.addEventListener("click", handleNavClick);
        }
        else lapRef.current.removeEventListener("click", handleNavClick);
    }, [lapRef.current])
    const handleNavClick = (e) => {
        if ((e.target.tagName === "IMG" && e.target.parentNode.id.startsWith("nav-link")) || e.target.id.startsWith("nav-link")) {
            console.log( e.target.id.slice(e.target.id.lastIndexOf("-") + 1),e.target.parentNode.id.slice(e.target.id.lastIndexOf("-") + 1))
            const id = e.target.id.slice(e.target.id.lastIndexOf("-") + 1) !== "" ? e.target.id.slice(e.target.id.lastIndexOf("-") + 1) : e.target.parentNode.id.slice(e.target.id.lastIndexOf("-") + 1)
            setLinkListChanged(id);
        }
        console.log('seia');
    }
    return (
        <div className="mobile-nav__mobile-lap" ref={lapRef}>
            {dashboardNavLinks.map((link, index) => (
                <MobileNavLink linkListChanged={linkListChanged} id={link.id} src={link.img} menu={link.menu ? link.menu : false} alt={link.name} key={index} />
            ))}
        </div>
    )
}

export default MobileLap;