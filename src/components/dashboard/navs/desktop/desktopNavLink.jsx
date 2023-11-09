import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import scrollDown from 'src/assets/images/dashboard-scroll-down.png';
import InnerLinks from "../../navLinksList";

const DesktopNavLink = ({ link, menu, name }) => {
    const [isOpened, setIsOpened] = useState(false);
    const linksRef = useRef();
    const linkRef = useRef();
    const listArrowRef = useRef();
    const toggleMenu = () => {
        setIsOpened(!isOpened);
    }
    useEffect(() => {
        if (linksRef.current) {
            isOpened ? linksRef.current.classList.add('visible-desktop-nav-link__inner-links') : linksRef.current.classList.remove('visible-desktop-nav-link__inner-links');
            isOpened ? linkRef.current.classList.add("visible-nav-link") : linkRef.current.classList.remove("visible-nav-link")
            isOpened ? listArrowRef.current.classList.add("rotated-list-arrow") : listArrowRef.current.classList.remove("rotated-list-arrow")
        }
    }, [isOpened])
    return (
        <div className="desktop-nav-link" ref={linkRef}>
            {!menu ? <Link to={link}>{name}</Link> : <div onClick={toggleMenu} className="desktop-nav-link__list"><p>{name}</p><img src={scrollDown} alt="scroll down" ref={listArrowRef} /></div>}
            {menu &&
                <InnerLinks menu={menu} ref={linksRef} />
            }
        </div>
    )
}

export default DesktopNavLink;