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
import VoiceCloning from "./pages/dashboard/services/voiceCloning/voiceCloning"
import SubtitlesFromVideo from "./pages/dashboard/services/subtitlesFromVideo/subtitlesFromVIdeo"
import ImageEnhancer from "./pages/dashboard/services/imageEnhancer/imageEnhancer"
import NotFound from "./pages/notFound"
import Settings from "./pages/settings"

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
        element: <Dashboard />,
    },
    {
        path: "/dashboard/services/text-to-speech",
        element: <TextToSpeech />
    },
    {
        path: "/dashboard/services/speech-to-text",
        element: <SpeechToText />
    },
    {
        path: "/dashboard/services/voice-cloning",
        element: <VoiceCloning />
    },
    {
        path: "/dashboard/services/subtitles-from-video",
        element: <SubtitlesFromVideo />
    },
    {
        path: "/dashboard/services/image-enhancer",
        element: <ImageEnhancer />
    },
    {
        path: "/dashboard/settings",
        element: <Settings/>
    },
    {
        path: "/*",
        element: <NotFound/>
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
            setAssetsLoaded(true);
        })
    }, []);

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log('user');
            AxiosFacade.getJwtToken().then(async (authenticated) => {
                console.log(authenticated,'user');
                if (!authenticated) {
                    setCurrentUser(false);
                }
                else {
                    const dbUser = await AxiosFacade.getUser(user.email, false);
                    if (dbUser.isPaying === "true") {
                        setIsPaying(true);
                    }
                    else {
                        setIsPaying(false);
                    }
                    setCurrentUser(user);
                }
            }).catch(err => {
                console.log(err);
            })
        }
        else {
            console.log('user not found');
            setIsPaying(false);
            setCurrentUser(false);
        }
    })

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