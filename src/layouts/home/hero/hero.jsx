import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <h1>CreateBoss - The One Stop Shop <br />For <span className="hero__container-span">Any</span> Content Creator</h1>
                <p>Unleash Your Content's Full Potential with CreateBoss - Your All-in-One Hub for <br />Speech Conversion and Video Subtitles.</p>
                <button className="hero__container-btn"><Link to="/try-it-out">Try It Out</Link></button>
            </div>
        </section>
    )
}

export default Hero;