import { Link } from "react-router-dom";

const FooterLinksCategory = ({category,links}) => {
    return (
        <div className="footer__links-category">
            <h5>{category}</h5>
            {links.map((link,index) => (
                <Link key={index} to={link.link}>{link.name}</Link>
            ))}
        </div>
    )
}

export default FooterLinksCategory;