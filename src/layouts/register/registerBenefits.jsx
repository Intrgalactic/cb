import RegisterBenefit from "./registerBenefit";

const RegisterBenefits = ({ heading, subHeading }) => {
    const benefits = ["You Save More Than 50% Of Work Time Than Without AI Tools", "AI tools can be more cost-effective than hiring full-time employees", "AI tools can be used everytime, providing content creation capabilities at any time of day or night.", "AI content creation tools can be easily integrated with other software and tools", "AI can analyze data to personalize content for different audiences"]
    return (
        <article className="register-benefits">
            <h3>{heading}</h3>
            <h5>{subHeading}</h5>
            {benefits.map((benefit, index) => (
                <RegisterBenefit key={index} content={benefit} />
            ))}
        </article>
    )
}

export default RegisterBenefits;