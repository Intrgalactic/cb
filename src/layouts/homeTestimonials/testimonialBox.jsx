import trust from 'src/assets/images/trust.png';
import user from 'src/assets/images/testimonial-user.png';

const TestimonialBox = ({ heading, description, name }) => {
    return (
        <article className="testimonials__box">
            <div className="testimonials__box-user-info">
                <h4>{heading}</h4>
                <p>{description}</p>
                <img src={user} alt="testimonial face" className="testimonial__box-user-img" />
            </div>
            <div className="testimonials__box-user-rating">
                <img src={trust} alt="testimonial stars" className="testimonial__box-testimonial-stars" />
                <h5>{name}</h5>
            </div>
        </article>
    )
}

export default TestimonialBox;