import DesktopLap from "./desktopLap";
import logo from 'src/assets/images/logo.png';

const DesktopNav = () => {
    return (
        <nav className="dashboard__desktop-nav">
            <div className="dashboard__desktop-nav__logo-container">
                <img src={logo} alt="CreateBoss logo" className="desktop-nav-logo" />
            </div>
            <DesktopLap />
        </nav>
    )
}

export default DesktopNav;