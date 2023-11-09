import logo from 'src/assets/images/loader.png';
import MobileLap from './mobileLap';
import logoutImg from 'src/assets/images/logout.png';

const MobileNav = () => {
    const logout = () => {

    }
    return (
        <nav className='dashboard__mobile-nav'>
            <img src={logo} alt="logo" className='dashboard__mobile-nav__outer-img'/>
            <MobileLap/>
            <img src={logoutImg} alt="log out" onClick={logout} className='dashboard__mobile-nav__outer-img'/>
        </nav>
    )
}

export default MobileNav;