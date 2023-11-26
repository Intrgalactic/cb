import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";
import MobileNavLinkContainer from "./mobileNavLinkContainer";
import navIcon from 'src/assets/images/nav-icon.png';
import { AuthContext } from "src/context/authContext";
import { FirebaseFacade } from "src/lib/firebase";
import { UserSubscriptionContext } from "src/context/userSubscriptionContext";

const Navigation = () => {
    const windowSize = useWindowSize();
    const [isMobile, setIsMobile] = useState();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const isPaying = useContext(UserSubscriptionContext);
    const mobileNav = useRef();
    const user = useContext(AuthContext);
    const initialNav = [{
        href: "/",
        content: "Home"
    }, {
        href: "/try-it-out",
        content: "Try It Out"
    }, {
        href: "/pricing",
        content: "Pricing"
    }]
    const [navLinks, setNavLinks] = useState(initialNav)
    useEffect(() => {
        if (windowSize.width < 1440) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }, [windowSize]);
    useEffect(() => {
        async function getUserState() {
            if (user) {
                if (isPaying === "true") {
                    setNavLinks([...initialNav, {
                        href: "/dashboard",
                        content: "Dashboard"
                    }, {
                        logout: FirebaseFacade.logoutUser,
                        content: "Logout",
                    }])
                }
                else {
                    setNavLinks([...initialNav, {
                        href: "/choose-package",
                        content: "Pick Your Plan"
                    }, {
                        logout: FirebaseFacade.logoutUser,
                        content: "Logout",
                    }])
                }
            }
            else {
                setNavLinks([...initialNav, {
                    href: "/login",
                    content: "Login"
                }, {
                    href: "/sign-up",
                    content: "Sign Up"
                }])
            }
        }
        getUserState();
    }, [user]);
    const toggleMobileNav = () => {
        isNavVisible ? mobileNav.current.classList.add("visible-nav") : mobileNav.current.classList.remove("visible-nav");
        setIsNavVisible(!isNavVisible);
    }
    return (
        <>
            {isMobile ?
                <div>
                    <img src={navIcon} alt="navigation" className="nav-btn" width="35px" onClick={toggleMobileNav} />
                    <nav className="mobile-nav" ref={mobileNav}>
                        {navLinks.map((link, index) => (
                            <MobileNavLinkContainer href={link.href} content={link.content} key={index} logout={link.logout ? link.logout : false} />
                        ))}
                    </nav>
                </div> :
                isMobile === false && 
                <nav className="desktop-nav">
                    {navLinks.map((link, index) => (
                        <>
                            {link.href ? <Link to={link.href} key={index}>{link.content}</Link> :
                                <Link onClick={() => { link.logout() }} key={index}>{link.content}</Link>
                            }
                        </>

                    ))}
                </nav>}
        </>

    )
}

export default Navigation;