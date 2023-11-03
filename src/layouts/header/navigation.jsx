import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";
import MobileNavLinkContainer from "./mobileNavLinkContainer";
import navIcon from 'src/assets/images/nav-icon.png';

const Navigation = () => {
    const windowSize = useWindowSize();
    const [isMobile, setIsMobile] = useState();
    const [isNavVisible,setIsNavVisible] = useState(true);
    const mobileNav = useRef();
    const navLinks = [{
        href: "/",
        content: "Home"
    }, {
        href: "/try-it-out",
        content: "Try It Out"
    }, {
        href: "/pricing",
        content: "Pricing"
    }, {
        href: "/contact",
        content: "Contact"
    },{
        href: "/login",
        content: "Login"
    },{
        href: "/sign-up",
        content: "Sign Up"
    }]
    useEffect(() => {
        if (windowSize.width < 1440) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }, [windowSize]);
    const toggleMobileNav = () => {
        isNavVisible ? mobileNav.current.classList.add("visible-nav") : mobileNav.current.classList.remove("visible-nav");
        setIsNavVisible(!isNavVisible);
    }
    return (
        <>
            {isMobile ?
                <div>
                    <img src={navIcon} alt="navigation" className="nav-btn" width="35px" onClick={toggleMobileNav}/>
                    <nav className="mobile-nav" ref={mobileNav}>
                        {navLinks.map((link, index) => (
                            <MobileNavLinkContainer href={link.href} content={link.content} key={index} />
                        ))}
                    </nav>
                </div> :
                <nav className="desktop-nav">
                    {navLinks.map((link, index) => (
                        <Link to={link.href}>{link.content}</Link>
                    ))}
                </nav>}
        </>

    )
}

export default Navigation;