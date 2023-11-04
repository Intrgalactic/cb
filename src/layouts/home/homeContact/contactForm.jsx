import FormCheckbox from "src/components/formCheckbox"

const ContactForm = () => {
    
    return (
        <article className="contact__form">
            <form action="mailto:matyniu@gmail.com" method="get" encType="text/plain">
                <input type="Name" required placeholder="Name"/>
                <input type="email" required placeholder="E-Mail"/>
                <textarea placeholder="Inquiry"/>
                <button type="submit" className="contact__form-btn" >Send</button>
            </form>
        </article>
    )
}

export default ContactForm