import notFound from 'src/assets/images/not-found.svg';
import Footer from 'src/layouts/footer/footer';
import Header from 'src/layouts/header/header';
import 'src/styles/notFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const goBack = () => {
        console.log(history);
        if (history.length > 1) {
            history.back();
        }
        else {
            navigate("/")
        }
    }
    return (
        <div className="not-found">
            <Header />
            <div className='not-found__container'>
                <img src={notFound} alt="not found" />
                <p className='not-found-msg'>The page you are looking for does not exist</p>
                <button onClick={goBack}>Go Back</button>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFound;