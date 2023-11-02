import Navigation from "./navigation";

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <img src="src/assets/images/logo.svg" alt="logo" className="logo"/>
                <Navigation/>
            </div>
        </header>
    )
}

export default Header;