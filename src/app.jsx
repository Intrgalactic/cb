import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthContext } from "./context/authContext"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import SignUp from "./pages/signUp"
import Home from "./pages/home"
import { auth } from "../firebase"
import Login from "./pages/login"
import { AxiosFacade } from "./lib/axios"
import ChoosePackage from "./pages/choosePackage"
import FontFaceObserver from "fontfaceobserver"
import LoadingModal from "./layouts/loadingModal"
import { UserSubscriptionContext } from "./context/userSubscriptionContext"
import Dashboard from "./pages/dashboard/dashboard"
import TextToSpeech from "./pages/dashboard/services/textToSpeech/textToSpeech"
import SpeechToText from "./pages/dashboard/services/speechToText/speechToText"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/choose-package",
        element: <ChoosePackage />
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
    },
    {
        path: "/dashboard/services/text-to-speech",
        element: <TextToSpeech/>
    },
    {
        path: "/dashboard/services/speech-to-text",
        element: <SpeechToText/>
    }
])

const App = () => {
    const [currentUser, setCurrentUser] = useState();
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    const [isPaying, setIsPaying] = useState();
    useEffect(() => {
        const fontA = new FontFaceObserver('NexaRegular');
        const fontB = new FontFaceObserver('NexaHeavy');
        Promise.all([fontA.load(), fontB.load()]).then(() => {
            if (currentUser) {
                AxiosFacade.getJwtToken().then((authenticated) => {
                    if (!authenticated) {
                        setCurrentUser(false);
                    }
                    setAssetsLoaded(true);
                })
                console.log('triege');
            }
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const dbUser = await AxiosFacade.getUser(user.email, false);
                    if (dbUser.isPaying === "true") {
                        setIsPaying(true);
                    }
                    else {
                        setIsPaying(false);
                    }
                    setCurrentUser(user);
                }
                else {
                    setIsPaying(false);
                    setCurrentUser(false);
                }
                setAssetsLoaded(true);
            })
        }).catch(() => {
            setAssetsLoaded(true);
        });
    }, []);

    return (
        <AuthContext.Provider value={currentUser}>
            <UserSubscriptionContext.Provider value={isPaying}>
                {assetsLoaded ?
                    <RouterProvider router={router} /> :
                    <LoadingModal isLoading={true} />
                }
            </UserSubscriptionContext.Provider>
        </AuthContext.Provider>
    )
}

export default App;