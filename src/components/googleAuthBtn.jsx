import google from 'src/assets/images/google.png';
import AuthBtnContent from './authBtnContent';

const GoogleAuthBtn = ({btnText,action}) => {
    return (
        <button className='auth-btn google-auth-btn' onClick={action}>
            <AuthBtnContent btnText={btnText} source={google}/>
        </button>
    )
}

export default GoogleAuthBtn;