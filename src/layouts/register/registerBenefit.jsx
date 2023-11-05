import benefitCheck from 'src/assets/images/register-check.png'

const RegisterBenefit = ({content}) => {
    return (
        <div className='register-benefits__benefit'>
            <img src={benefitCheck} alt="register benefit" width="38px"/>
            <p>{content}</p>
        </div>
    )
}

export default RegisterBenefit;