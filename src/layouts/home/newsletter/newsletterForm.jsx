import { useEffect, useRef, useState } from "react";
import { validateFormInputs } from "src/utilities/auth";

const NewsletterForm = () => {
    
    const emailRef = useRef();
    const [validateError,setValidateErr] = useState();
    const applyNewsletter = () => {
        const formValidity = validateFormInputs([{ref:emailRef,type:"email",label:"Email"}]);
        if (formValidity.isValid) {
            setValidateErr(false);
            //newsletter sign up logic
        }
        else setValidateErr(formValidity.errors);
    }
    useEffect(() => {
        if (validateError) {
            emailRef.current.classList.add("wrong-newsletter-input")
        }
        else {
            emailRef.current.classList.remove("wrong-newsletter-input")
        }
    })
    return (
        <div className="newsletter__form">
            <h5>Join Our Newsletter</h5>
            <p>Stay Informed and Inspired! Subscribe to our newsletter for the latest updates on content creation and accessibility solutions.</p>
            <input type="email" placeholder="Email Address" className="newsletter-input" ref={emailRef}/>
            <button className="newsletter-btn" onClick={applyNewsletter}>Subscribe</button>
        </div>
    )
}

export default NewsletterForm;