import SectionH2 from "src/components/sectionH2";
import PricingBox from "./pricingBox";

const Pricing = () => {
    const pricingItems = [{
        heading: "Starter",
        price: "35$",
        href:"/checkout?package=starter",
        btn: "Get Started Now",
        description: "Unlock Your Voice: Get Started with Seamless Speech Conversion",
        items: ["Text to Speech: Up To 25,000 words per month",
            "Speech to Text: Up To 15 hours of audio per month",
            "Subtitles to Video: Up To 10 hours of videos per month",
            "Subtitles from Video: Up To 10 hours of videos per month",
            "All Filler Words Removal",
            "Access to Video Enhancer",
            "Advanced Options For Subtitles",
            "Audio Quality Enhancer"]
    }, {
        heading: "Essential",
        price: "50$",
        btn: "Upgrade Today",
        href:"/checkout?package=essential",
        description: "Empower Your Content: Elevate Your Creations with Essential Tools",
        items: ["Text to Speech: Up To 25,000 words per month",
            "Speech to Text: Up To 15 hours of audio per month",
            "Subtitles to Video: Up To 10 hours of videos per month",
            "Subtitles from Video: Up To 10 hours of videos per month",
            "All Filler Words Removal",
            "Access to Video Enhancer",
            "Advanced Options For Subtitles",
            "Audio Quality Enhancer"]
    }, {
        heading: "Professional",
        price: "80$",
        btn: "Unlock More Power",
        href:"/checkout?package=professional",
        description: "Unlock Your Voice: Get Started with Seamless Speech Conversion",
        items: ["Text to Speech: Up To 100,000 words per month",
            "Speech to Text: Up To 25 hours of audio per month",
            "Subtitles to Video: Up To 20 hours of videos per month",
            "Subtitles from Video: Up To 20 hours of videos per month",
            "All Filler Words Removal",
            "Access to Video Enhancer",
            "Advanced Options For Subtitles",
            "Audio Quality Enhancer",
            "Studio Quality For Text To Speech",
            "Access to Voice Cloning",
            "Instant Personal Support"]
    }]
    return (
        <section className="pricing">
            <SectionH2 content="Find Your Ideal Fit: Flexible Pricing for Every Content Creator's Journey!" />
            <div className="pricing__pricing-items__container">
                {pricingItems.map((pricingItem, index) => (
                    <PricingBox heading={pricingItem.heading} href={pricingItem.href} btn={pricingItem.btn} description={pricingItem.description} key={index} price={pricingItem.price} items={pricingItem.items} />
                ))}
            </div>
        </section>
    )
}

export default Pricing;