import { useContext, useState } from "react";
import Header from "src/layouts/header/header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "src/layouts/footer/footer";
import LoginAuth from "src/layouts/login/loginAuth";
import { AuthContext } from "src/context/authContext";
import 'src/styles/login.css';
import { useWindowSize } from "@uidotdev/usehooks";
import LoadingModal from "src/layouts/loadingModal";
import { getBackgroundOnSizeChange, loadBackgrounds } from "src/utilities/assetsLoaders";

const backgrounds = [["src/assets/images/mobile-login.png"],["src/assets/images/medium-login.png"],["src/assets/images/login.png"]];

const Login = () => {
    const user = useContext(AuthContext);
    const navigate = useNavigate();
    const [backgroundsLoaded, setBackgroundsLoaded] = useState(false);
    const windowSize = useWindowSize();
    useEffect(() => {
        var backgroundImagesUrls = getBackgroundOnSizeChange(backgrounds,windowSize);
        loadBackgrounds(setBackgroundsLoaded, backgroundImagesUrls);
    }, [setBackgroundsLoaded, windowSize.width])
    useEffect(() => {
        if (user) {

        }
    })
    return (
        <>
            {backgroundsLoaded ?
                <>

                    <Header />
                    <LoginAuth />
                    <Footer />
                </>
                : <LoadingModal isLoading={true} />}
        </>
    )
}

export default Login;