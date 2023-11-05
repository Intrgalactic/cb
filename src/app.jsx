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
        element: <Login/>
    },
    {
        path: "/choose-package",
        element: <ChoosePackage/>
    }
])

const App = () => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        if (currentUser) {
            AxiosFacade.getJwtToken().then((authenticated) => {
                if (!authenticated) {
                    setCurrentUser(false);
                }
            })
        }
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            }
            else {
                setCurrentUser(false);
            }
        })
    },[]);
 
    return (
        <AuthContext.Provider value={currentUser}>
            <RouterProvider router={router} />
        </AuthContext.Provider>
    )
}

export default App;