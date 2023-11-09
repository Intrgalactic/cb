import { forwardRef } from "react";
import { Link } from "react-router-dom";

const InnerLinks = forwardRef((props,ref) => {
    return (
        <div className="nav-link__inner-links" ref={ref}>
        {props.menu.map((innerLink, index) => (
            <div className="nav-links__inner-links__item">
                <img src={innerLink.img} alt={innerLink.alt} className="desktop-nav-link__inner-links-img"/>
                <Link to={innerLink.link} key={index}>{innerLink.name}</Link>
            </div>
        ))}
    </div>
    )
})

export default InnerLinks;