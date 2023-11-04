import apple from 'src/assets/images/apple.png';
import AuthBtnContent from './authBtnContent';

const AppleAuthBtn = ({btnText,action}) => {
    return (
        <button className='auth-btn apple-auth-btn' onClick={action}>
            <AuthBtnContent btnText={btnText} source={apple}/>
        </button>
    )
}

export default AppleAuthBtn;