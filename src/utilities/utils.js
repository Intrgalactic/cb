import microphone from 'src/assets/images/microphone.png';
import quotes from 'src/assets/images/quotes.png';
import video from 'src/assets/images/enhance.png';
import homeIcon from 'src/assets/images/icons/home.png';
import dashboardIcon from 'src/assets/images/icons/dashboard.png';
import microphoneIcon from 'src/assets/images/icons/microphone.png';
import videoIcon from 'src/assets/images/icons/video.png';
import settingsIcon from 'src/assets/images/icons/settings.png';
import camera from 'src/assets/images/camera.png';
import subtitles from 'src/assets/images/subtitles.png';
import clone from 'src/assets/images/clone.png';

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
    description: "Amplify Your Projects: Transform Your Creations with Our AI-Enhanced Professional Toolkit",
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

export const dashboardNavLinks = [
    {
        name: "Home",
        img: homeIcon,
        link: "/"
    },
    {
        name: "Dashboard",
        img: dashboardIcon,
        link: "/dashboard"
    },
    {
        name: "Talk & Text",
        img: microphoneIcon,
        id:0,
        menu: [{
            name:"Text To Speech",
            link: "/dashboard/services/text-to-speech",
            alt: "text to speech",
            img: microphone,
        },
        {
            name:"Speech To Text",
            link: "/dashboard/services/speech-to-text",
            alt: "speech to text",
            img: quotes
        },
        {
            name: "Voice Cloning",
            link: "/dashboard/services/voice-cloning",
            alt: "voice cloning",
            img: clone,
        }]
    },
    {
        name: "Videos",
        img: videoIcon,
        id: 1,
        menu: [
            {
                name:"Subtitles To Video",
                link: "/dashboard/services/subtitles-to-video",
                alt: "subtitles to video",
                img: subtitles
            },
            {
                name:"Subtitles From Video",
                link: "/dashboard/services/subtitles-from-video",
                alt: "subtitles from video",
                img: camera
            },
            {
                name: "Video Enhancer",
                link: "/dashboard/services/video-enhancer",
                alt: "video enhance",
                img: video
            }
        ],
    },
    {   
        name: "Settings",
        img: settingsIcon,
        link: "/dashboard/settings"
    },
];