import TryNowBtn from "src/components/tryNowBtn"
import { motion } from "framer-motion";

const SingleServiceAside = ({heading,description,children,comparing,hasBtn}) => {
    const asideAnimState = {
        hidden: {
            opacity:0,
            y:-200,
        },
        visible: {
            opacity:1,
            y:0
        }
    }
    return (
        <motion.div initial="hidden" transition={{type:"spring",duration:0.8}} viewport={{once:true}} variants={asideAnimState} whileInView="visible" className="single-service__aside">
            <h3 className="single-service__aside-heading">{heading}</h3>
            {!comparing && <>{children}</>}
            <p>{description}</p>
            {comparing === true && <>{children}</>}
            {hasBtn !== false && <TryNowBtn/>}
        </motion.div>
    )
}

export default SingleServiceAside;