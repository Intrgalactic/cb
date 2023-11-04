import { useContext } from "react";
import Header from "src/layouts/header/header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "src/layouts/footer/footer";
import LoginAuth from "src/layouts/loginAuth";
import { AuthContext } from "src/context/authContext";
import 'src/styles/login.css';

const Login = () => {
    const user = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    })
    return (
        <>
            <Header />
            <LoginAuth/>
            <Footer />
        </>
    )
}

export default Login;