import { useState } from "react";
import FaqRecord from "./faqRecord";

const FaqQuestions = () => {
    const [currentOpenedIndex,setCurrentOpenedIndex] = useState();
    const faqData = [
        {
            question: "What services do you offer in speech conversion?",
            answer: "At CreateBoss, we offer a comprehensive range of speech conversion services, including text-to-speech, speech-to-text, and subtitles for videos. Our cutting-edge technology ensures accurate and efficient solutions tailored to your unique needs."
        },
        {
            question: "How accurate is your speech-to-text conversion?",
            answer: "Our speech-to-text service employs advanced AI algorithms, delivering high accuracy in transcribing spoken words. While the accuracy depends on factors like audio quality and background noise, we consistently strive for precision."
        },
        {
            question: "Can I customize the voices for text-to-speech?",
            answer: "Absolutely! We provide a wide range of customizable voices, allowing you to select the tone, style, and language that best suits your content."
        },
        {
            question: "How do you ensure the privacy and security of my data?",
            answer: "Your privacy and data security are paramount to us. We employ robust encryption protocols and follow strict confidentiality measures to safeguard your information."
        },
        {
            question: "Do you support multiple languages?",
            answer: "Yes, we offer multilingual support to cater to a global audience. Our speech conversion services cover a wide range of languages."
        },
        {
            question: "Can I use your services for large-scale projects?",
            answer: "Certainly! Whether you have a small or large-scale project, we have customizable plans and enterprise solutions to meet your specific requirements."
        },
        {
            question: "What file formats do you support?",
            answer: "We support various audio and video file formats, ensuring seamless compatibility with your content."
        },
        {
            question: "Are your services suitable for content creators of all levels?",
            answer: "Absolutely! Our services are designed to empower content creators of all levels, from individuals to businesses. We offer plans tailored to different needs and budgets."
        },
        {
            question: "How do I get started with your services?",
            answer: "Getting started is simple! Just choose a pricing plan that suits your requirements and follow our easy signup process. You'll be up and running in no time."
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes, our dedicated customer support team is here to assist you. Feel free to reach out to us with any questions or concerns, and we'll be happy to help."
        },
        {
            question: "Can I see some examples of your services in action?",
            answer: "Of course! We have a portfolio of case studies and testimonials showcasing the successful implementation of our speech conversion services. Feel free to explore them to see the results firsthand."
        },
        {
            question: "Is there a free trial available?",
            answer: "We offer a free tier for some of our services, allowing you to experience the benefits before committing to a paid plan. Check our website for specific details."
        },
        {
            question: "What makes your speech conversion services stand out from competitors?",
            answer: "Our services are distinguished by their accuracy, efficiency, customization options, and commitment to customer satisfaction. We continuously innovate to stay at the forefront of the industry."
        },
        {
            question: "Can I cancel or change my plan at any time?",
            answer: "Yes, our plans are flexible, and you can easily upgrade, downgrade, or cancel your subscription as needed."
        },
        {
            question: "How can I be sure that your services are the right fit for my needs?",
            answer: "We understand the importance of choosing the right services. Reach out to us with your requirements, and we'll be happy to provide personalized recommendations and address any concerns you may have."
        }
    ];
    return (
        <div className="faq__container">
            <p className="faq__container-heading">Stay in the loop with our concise FAQ guide, ensuring you're well-equipped to make the most of our services</p>
            {faqData.map((question, index) => (
                <FaqRecord currentOpenedIndex={currentOpenedIndex} index={index} setCurrentOpenedIndex={setCurrentOpenedIndex} answer={question.answer} question={question.question} key={index} />
            ))}
        </div>
    )
}

export default FaqQuestions;