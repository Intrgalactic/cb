import { Link } from "react-router-dom"

const MobileNavLinkContainer = ({href,content}) => {
    return (
        <div className="mobile-nav__link-container">
            <Link to={href}>{content}</Link>
        </div>
    )
}

export default MobileNavLinkContainer