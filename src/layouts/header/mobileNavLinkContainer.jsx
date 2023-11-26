import { Link, useNavigate } from "react-router-dom"
import goToChevron from 'src/assets/images/chevron.png';

const MobileNavLinkContainer = ({href,content,logout}) => {
    const navigate = useNavigate();
    return (
        <div className="mobile-nav__link-container" onClick={() => {logout === false ? navigate(href) : logout()}}>
            <Link to={href}>{content}</Link>
            <img src={goToChevron} alt="link arrow"/>
        </div>
    )
}

export default MobileNavLinkContainer