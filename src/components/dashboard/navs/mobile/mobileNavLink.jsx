import { useEffect, useRef, useState } from "react";
import InnerLinks from "../../navLinksList";

const MobileNavLink = ({ src, alt, menu,id,linkListChanged }) => {
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
    useEffect(() => {
        if (linkListChanged !== false && linksRef.current) {
            console.log(linkListChanged,id);
            linkListChanged !== id && linksRef.current.classList.contains('visible-mobile-nav-link__inner-links') && toggleMenu();
        }
    },[linkListChanged])
    return (
        <div className="mobile-nav-link" id={`${id === 0 || id === 1 ? `nav-link-${id}` : ""}`} onClick={toggleMenu}>
            <img src={src} alt={alt} />
            {menu &&
                <InnerLinks menu={menu} ref={linksRef} />
            }
        </div>
    )
}

export default MobileNavLink;