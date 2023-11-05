import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "src/context/authContext";
import 'src/styles/login.css';
import { useWindowSize } from "@uidotdev/usehooks";
import { getBackgroundOnSizeChange, loadBackgrounds } from "src/utilities/assetsLoaders";

import mobileLogin from 'src/assets/images/mobile-login.png';
import mediumLogin from 'src/assets/images/medium-login.png';
import login from 'src/assets/images/login.png';
import LoadingModal from "src/layouts/loadingModal";
import Footer from "src/layouts/footer/footer";
import LoginAuth from "src/layouts/login/loginAuth";
import Header from "src/layouts/header/header";

const backgrounds = [[mobileLogin], [mediumLogin], [login]];

const Login = () => {
    const user = useContext(AuthContext);
    const navigate = useNavigate();
    const [backgroundsLoaded, setBackgroundsLoaded] = useState(false);
    const windowSize = useWindowSize();
    const prevWindowSize = useRef(windowSize.width);

    useEffect(() => {
        const checkWindowSizeChange = () => {
            const crossed650 = (windowSize.width >= 650 && prevWindowSize.current < 650) || (windowSize.width < 650 && prevWindowSize.current >= 650) || (windowSize.width < 650 && prevWindowSize.current === windowSize.width);
            const crossed1024 = (windowSize.width >= 1024 && prevWindowSize.current < 1024) || (windowSize.width < 1024 && prevWindowSize.current >= 1024) || (windowSize.width < 650 && prevWindowSize.current === windowSize.width);
            return crossed650 || crossed1024;
        };

        if (checkWindowSizeChange()) {
            const backgroundImagesUrls = getBackgroundOnSizeChange(backgrounds, windowSize);
            loadBackgrounds(setBackgroundsLoaded, backgroundImagesUrls);
        }
        prevWindowSize.current = windowSize.width;
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