import { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "src/context/authContext";
import 'src/styles/login.css';
import { useWindowSize } from "@uidotdev/usehooks";
import { checkWindowSizeChange, getBackgroundOnSizeChange, loadBackgrounds } from "src/utilities/assetsLoaders";

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
    const [layoutsLoaded, setLayoutsLoaded] = useState({
        mobile: false,
        medium: false,
        full: false
      });
    const windowSize = useWindowSize();
    const prevWindowSize = useRef(windowSize.width);
    const currentLayout = useRef();
    useEffect(() => {
        if (checkWindowSizeChange(windowSize,currentLayout,prevWindowSize) && currentLayout.current !== true) {
            const backgroundImagesUrls = getBackgroundOnSizeChange(backgrounds, windowSize);
            loadBackgrounds(setLayoutsLoaded, backgroundImagesUrls,layoutsLoaded,currentLayout.current);
        }
        prevWindowSize.current = windowSize.width;
    }, [setLayoutsLoaded, windowSize.width])
    useEffect(() => {
        if (user) {

        }
    })
    return (
        <>
            {layoutsLoaded ?
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