import microphone from 'src/assets/images/microphone.png';
import quotes from 'src/assets/images/quotes.png';
import video from 'src/assets/images/enhance.png';

export const pricingItems = [{
    heading: "Starter",
    price: "35$",
    href: "/checkout?package=starter",
    btn: "Get Started Now",
    src: microphone,
    alt: "microphone",
    description: "Unlock Your Voice: Get Started with Seamless Speech Conversion",
    items: [
        ["Text-to-Speech: Up to", "10,000", "words per month"],
        ["Speech-to-Text: Up to", "10", "hours of audio per month"],
        ["Subtitles to Video:", "5", "videos per month"],
        ["Subtitles from Video:", "5", "videos per month"],
        "All Filler Words Removal",
        "Audio Quality Enhancer"
    ]
}, {
    heading: "Essential",
    price: "50$",
    btn: "Upgrade Today",
    src: quotes,
    alt: "quotes",
    href: "/checkout?package=essential",
    description: "Empower Your Content: Elevate Your Creations with Essential Tools",
    items: [
        ["Text to Speech: Up To", "25,000", "words per month"],
        ["Speech to Text: Up To", "15", "hours of audio per month"],
        ["Subtitles to Video: Up To", "10", "hours of videos per month"],
        ["Subtitles from Video: Up To", "10", "hours of videos per month"],
        "All Filler Words Removal",
        "Access to Video Enhancer",
        "Advanced Options For Subtitles",
        "Audio Quality Enhancer"
    ]
}, {
    heading: "Professional",
    price: "80$",
    btn: "Unlock More Power",
    src: video,
    alt: "video",
    href: "/checkout?package=professional",
    description: "Amplify Your Work: Unleash Potential with Our AI-Enhanced Pro Toolkit",
    items: [
        ["Text to Speech: Up To", "100,000", "words per month"],
        ["Speech to Text: Up To", "25", "hours of audio per month"],
        ["Subtitles to Video: Up To", "20", "hours of videos per month"],
        ["Subtitles from Video: Up To", "20", "hours of videos per month"],
        "All Filler Words Removal",
        "Access to Video Enhancer",
        "Advanced Options For Subtitles",
        "Audio Quality Enhancer",
        "Studio Quality For Text To Speech",
        "Access to Voice Cloning",
        "Instant Personal Support"
      ]
}]