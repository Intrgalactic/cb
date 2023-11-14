import NewsletterForm from "./newsletterForm"
import newsletterImg from 'src/assets/images/newsletter.png';
const Newsletter = () => {
    return (
        <div className="newsletter">
            <NewsletterForm/>
            <img src={newsletterImg} alt="newsletter"/>
        </div>
    )
}

export default Newsletter;