import { useContext, useEffect } from "react";
import { AuthContext } from "src/context/authContext";
import Header from "src/layouts/header/header";
import { useNavigate } from "react-router-dom";
import RegisterAuth from "src/layouts/register/registerAuth";
import 'src/styles/root.css';
import 'src/styles/auth.css';
import 'src/styles/signUp.css';
import Footer from "src/layouts/footer/footer";


const SignUp = () => {
    const user = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
           
        }
    })
    return (
        <>
            <Header/>
            <RegisterAuth/>
            <Footer/>
        </>
    )
}

export default SignUp;