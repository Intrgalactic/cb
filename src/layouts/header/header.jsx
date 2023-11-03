import Navigation from "./navigation";
import logo from 'src/assets/images/logo.svg'
const Header = () => {
    return (
        <header>
            <div className="header__container">
                <img src={logo} alt="logo" className="logo"/>
                <Navigation/>
            </div>
        </header>
    )
}

export default Header;