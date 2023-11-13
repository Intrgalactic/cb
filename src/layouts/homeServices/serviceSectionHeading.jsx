import { motion } from "framer-motion";

const ServiceSectionHeading = ({src,alt,heading,subHeading}) => {
    const headingAnimState = {
        hidden: {opacity:0,y:-100},
        visible: {opacity:1,y:0}
    }
    return (
        <motion.div viewport={{once:true}} variants={headingAnimState} initial="hidden" whileInView="visible" transition={{duration:0.8,type:"spring"}}className="service-section__heading">
            <img src={src} alt={alt}/>
            <h2>{heading}</h2>
            <p>{subHeading}</p>
        </motion.div>
    )
}

export default ServiceSectionHeading;