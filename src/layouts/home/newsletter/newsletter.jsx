import NewsletterForm from "./newsletterForm"
import newsletterImg from 'src/assets/images/newsletter.png';
const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="newsletter__container">
                <NewsletterForm />
                <img src={newsletterImg} alt="newsletter" />
            </div>
        </div>
    )
}

export default Newsletter;