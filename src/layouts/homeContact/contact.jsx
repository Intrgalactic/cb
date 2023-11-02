import SectionH2 from "src/components/sectionH2";
import ContactForm from "./contactForm";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__info">
                <SectionH2 content="Contact Us" />
                <p className="contact__description">Have questions or need assistance? Reach out to our friendly team of experts today! We are here to help you with any inquiries or concerns you may have about our speech conversion services. Let's start a conversation and find the perfect solution for your needs.</p>
            </div>
            <ContactForm />
        </section>
    )
}

export default Contact;