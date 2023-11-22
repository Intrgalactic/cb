import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "src/context/authContext";
import Header from "src/layouts/header/header";
import RegisterAuth from "src/layouts/register/registerAuth";
import 'src/styles/root.css';
import 'src/styles/auth.css';
import 'src/styles/signUp.css';
import Footer from "src/layouts/footer/footer";
import { useWindowSize } from "@uidotdev/usehooks";
import { checkWindowSizeChange, getBackgroundOnSizeChange, loadBackgrounds } from "src/utilities/assetsLoaders";
import LoadingModal from "src/layouts/loadingModal";
import mobileRegister from 'src/assets/images/mobile-register.png';
import mediumRegister from 'src/assets/images/medium-register.png';
import register from 'src/assets/images/register.png';
const backgrounds = [[mobileRegister],[mediumRegister],[register]]

const SignUp = () => {
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
            {layoutsLoaded ? <>
                <Header />
                <RegisterAuth />
                <Footer />
            </> : <LoadingModal isLoading={true} />
            }
        </>
    )
}

export default SignUp;