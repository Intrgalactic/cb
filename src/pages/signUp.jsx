import { useContext, useEffect, useState } from "react";
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

const backgrounds = [["src/assets/images/mobile-register.png"],["src/assets/images/medium-register.png"],["src/assets/images/register.png"]]

const SignUp = () => {
    const user = useContext(AuthContext);
    const navigate = useNavigate();
    const [backgroundsLoaded, setBackgroundsLoaded] = useState(false);
    const windowSize = useWindowSize();
    useEffect(() => {
        var backgroundImagesUrls = getBackgroundOnSizeChange(backgrounds, windowSize);
        loadBackgrounds(setBackgroundsLoaded, backgroundImagesUrls);
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