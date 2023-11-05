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
    }
])

const App = () => {
    const [currentUser, setCurrentUser] = useState();
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    
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

            }
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setCurrentUser(user);
                }
                else {
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
            {assetsLoaded ?
                <RouterProvider router={router} /> :
                <LoadingModal isLoading={true} />
            }
        </AuthContext.Provider>
    )
}

export default App;