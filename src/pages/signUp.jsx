import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "src/context/authContext";
import Header from "src/layouts/header/header";
import { useNavigate } from "react-router-dom";
import RegisterAuth from "src/layouts/register/registerAuth";
import 'src/styles/root.css';
import 'src/styles/auth.css';
import 'src/styles/signUp.css';
import Footer from "src/layouts/footer/footer";
import { useWindowSize } from "@uidotdev/usehooks";
import { getBackgroundOnSizeChange, loadBackgrounds } from "src/utilities/assetsLoaders";
import LoadingModal from "src/layouts/loadingModal";
import mobileRegister from 'src/assets/images/mobile-register.png';
import mediumRegister from 'src/assets/images/medium-register.png';
import register from 'src/assets/images/register.png';
const backgrounds = [[mobileRegister],[mediumRegister],[register]]

const SignUp = () => {
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
            {backgroundsLoaded ? <>
                <Header />
                <RegisterAuth />
                <Footer />
            </> : <LoadingModal isLoading={true} />
            }
        </>
    )
}

export default SignUp;