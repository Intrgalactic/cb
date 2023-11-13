
import user from 'src/assets/images/user.png';

const TestimonialBox = ({rating,name,lastName,description}) => {
    return (
        <div className="testimonial-box">
            <div className="testimonial-box__user-details">
                <img src={user} alt="user" width="50px" height="50px"/>
                <h5>{name}<br/><span>{lastName}</span></h5>
            </div>
            <p className='testimonial-description'>
                {description}
            </p>
            <div className="testimonial-box__overall-rating">
                <p>Overall Rating</p>
                <img src={rating} alt="rating face" width="30px" height="30px"/>
            </div>
        </div>
    )
}

export default TestimonialBox;