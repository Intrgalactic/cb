import { useEffect, useRef, useState } from "react";
import InnerLinks from "../../navLinksList";

const MobileNavLink = ({ src, alt, menu }) => {
    const linksRef = useRef();
    const [isOpened, setIsOpened] = useState(false);
    useEffect(() => {
        if (linksRef.current && !linksRef.current.classList.contains("mobile-nav-link__inner-links")) linksRef.current.classList.add("mobile-nav-link__inner-links")
    },[])
    const toggleMenu = () => {
        setIsOpened(!isOpened);
    }
    useEffect(() => {
        if (linksRef.current) {
            isOpened ? linksRef.current.classList.add('visible-mobile-nav-link__inner-links') : linksRef.current.classList.remove('visible-mobile-nav-link__inner-links');
        }
    }, [isOpened])
    return (
        <div className="mobile-nav-link" onClick={toggleMenu}>
            <img src={src} alt={alt} />
            {menu &&
                <InnerLinks menu={menu} ref={linksRef} />
            }
        </div>
    )
}

export default MobileNavLink;