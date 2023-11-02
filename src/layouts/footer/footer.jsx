import FooterLinksCategory from "./footerLinksCategory";

const Footer = () => {
    const links = [
        {
          category: "Social",
          arr: [
            { name: "Instagram", link: "/instagram" },
            { name: "Facebook", link: "/facebook" },
            { name: "Twitter", link: "/twitter" },
            { name: "Youtube", link: "/youtube" },
          ],
        },
        {
          category: "Company",
          arr: [
            { name: "About Us", link: "/about-us" },
            { name: "Partnership", link: "/partnership" },
            { name: "FAQ", link: "/faq" },
          ],
        },
        {
          category: "Pricing",
          arr: [
            { name: "Pricing Overview", link: "/pricing-overview" },
            { name: "Enterprises", link: "/enterprises" },
            { name: "Refund Policy", link: "/refund-policy" },
          ],
        },
        {
          category: "Support",
          arr: [
            { name: "Request Support", link: "/request-support" },
            { name: "Contact Us", link: "/contact-us" },
          ],
        },
      ];
    return (
        <footer>
            {links.map((link,index) => (
                <FooterLinksCategory key={index} category={link.category} links={link.arr}/>
            ))}
        </footer>
    )
}

export default Footer;