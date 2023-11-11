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

export const availableVoices = [
    {
        name: "Marcus - authoritative and deep",
        category: "Middle-Aged American Male",
        description: "An authoritative and deep voice. Great for audiobooks or news."
      },
      {
        name: "Kinglsey - dapper and deep narrato",
        category: "Old British Male",
        description: "Old dapper man. A deep and smooth voice for storytelling."
      },
      {
        name: "Alex - expressive narrator",
        category: "Young American Male",
        description: "Young American man. Is a strong and expressive narrator."
      },
      {
        name: "Valentino",
        category: "Old British Male",
        description: "A great voice with depth. The voice is deep with a great accent, and works well for meditations."
      },
      {
        name: "Natasha - Valley girl",
        category: "Young American Female",
        description: "A valley girl female voice. Great for shorts."
      },
      {
        name: "Dan Dan",
        category: "Young American Male",
        description: "An upbeat and modulate voice. Great for shorts and social media."
      },
      {
        name: "Bria - Young and Soft",
        category: "Young American Female",
        description: "A young female with a softly spoken tone, perfect for storytelling or ASMR."
      },
      {
        name: "Brian",
        category: "Young American Male",
        description: "Great voice for nature documentaries."
      },
      {
        name: "Sally - very realistic, superb",
        category: "Young American Female",
        description: "Young american woman. A relaxed voice for good conversations"
      },
      {
        name: "Joanne - pensive, introspective, soft",
        category: "Young American Female",
        description: "Young american woman. A soft and plesant voice for a great character."
      },
      {
        name: "Bruce - vibrant and baritone",
        category: "Middle-Aged American Male",
        description: "A vibrant baritone voice. Good for shorts and narration"
      },
      {
        name: "Michael - Deep, Resonant, Confident",
        category: "Middle-Aged British Male",
        description: "A male british voice for a storyteller with a rough undertone."
      },
      {
        name: "Lizzy - refined victorian",
        category: "Old British Female",
        description: "A refined voice with proper speech and slightly filtered sound."
      },
      {
        name: "Ella - soft and sweet",
        category: "Young British Female",
        description: "A very sweet and kind voice with a great tone but with some harshness. Good for children's stories."
      },
      {
        name: "Jack - Smooth, deep, mysterious",
        category: "Middle-Aged American Male",
        description: "Middle-Aged american man. Is a good storyteller with a smooth voice"
      },
      {
        name: "Markus - Mature and Chill",
        category: "Middle-Aged American Male",
        description: "A man with a mature and chill voice that'd be great for conversations and voiceovers."
      },
      {
        name: "Hades - grim gravitas",
        category: "Middle-Aged American Male",
        description: "A deep and pleasant voice with a slight rasp. Great for meditation."
      },
      {
        name: "Paola - young girl",
        category: "Young American Female",
        description: "A gentle but confident young woman's voice with an American accent. Would work well in a conversation."
      },
      {
        name: "Ryan Kurk",
        category: "Middle-Aged American Male",
        description: "A very pleasant and kind voice. Great for shorts or narration."
      },
      {
        name: "Olivia - Powerful, provocative narrator",
        category: "Middle-Aged American Female",
        description: "A distinguished american woman. A formal calm voice good for podcasts."
      },
      {
        name: "Maya",
        category: "Young American Female",
        description: "A young american woman. A calm voice for guided meditation."
      },
      {
        name: "Dave - deep and gruff",
        category: "Old American Male",
        description: "A very deep and rumbly voice. Perfect for commercials and advertisement."
      },
      {
        name: "Myra",
        category: "Young American Female",
        description: "An upbeat, spritely, quite high-pitched American female. Would work well for conversational purposes."
      },
      {
        name: "Dylan - confident",
        category: "Young American Male",
        description: "A very pleasant and kind voice with nice inflection."
      },
      {
        name: "Josha - captivating trailors",
        category: "Old American Male",
        description: "A deep and rich voice. Great for trailers etc."
      },
      {
        name: "Readwell - Deep and narrative",
        category: "Old American Male",
        description: "Old american man. Has a deep voice, which makes for a good storyteller"
      },
      {
        name: "Eleguar - Latin American Spanish",
        category: "Young American Male",
        description: "An excited and dynamic voice with a Latin Spanish/American accent, great for commercials and advertisements."
      },
      {
        name: "Hal - the radio guy",
        category: "Middle-Aged American Male",
        description: "A gentle, well articulated male voice. Good for radio shows or interviews."
      },
      {
        name: "Matthew - calm and peaceful",
        category: "Middle-Aged American Male",
        description: "A calm and peaceful voice. Great for guided meditations."
      },
      {
        name: "Neal",
        category: "Old American Male",
        description: "A deep, strong old male american accent. Great for narration."
      },
      {
        name: "Guy",
        category: "Young American Male",
        description: "An emotional, slightly anxious sounding young male with an American accent. Could voice a cartoon character."
      },
      {
        name: "Rowan - gruff and raspy",
        category: "Middle-Aged American Male",
        description: "A gruff and strong male voice. Good for storytelling."
      },
      {
        name: "Annita",
        category: "Young American Female",
        description: "A pleasant voice with some vocal fry."
      },
      {
        name: "Scott - Mature and Deep",
        category: "Middle-Aged American Male",
        description: "A man with a mature and deep voice that'd be great for formal news stations or media recordings."
      },
      {
        name: "Sanjay - profound and deep",
        category: "Middle-Aged Indian Male",
        description: "A profound and deep voice. Great for narration and meditation."
      },
      {
        name: "Lawrence - dignified British male",
        category: "Old British Male",
        description: "A dignified British male voice. Great for documentaries or similar."
      },
      {
        name: "Luke",
        category: "Young American Male",
        description: "Warm and sympathetic voice, perfect for narrations aimed at a younger audience."
      },
      {
        name: "Victoria - classy and mature",
        category: "Middle-Aged British Female",
        description: "A classy and mature voice. Well suited for audiobooks."
      },
      {
        name: "James",
        category: "Middle-Aged American Male",
        description: "A fantastic voice for engaging and fast, short-form content."
      },
      {
        name: "Geralt - character",
        category: "Middle-Aged American Male",
        description: "A voice resembling that of The Witcher. Grumpy."
      },
      {
        name: "Myriam - sweet Teen Girl",
        category: "Young American Female",
        description: "A young, sweet, female American voice. Could be used for a cartoon character."
      },
      {
        name: "Oswald - intelligent professor",
        category: "Old British Male",
        description: "An intelligent and smart voice. Brilliant for education."
      },
      {
        name: "Vikram",
        category: "Young Indian Male",
        description: "A youthful voice, good for chats and conversations."
      },
      {
        name: "Ryan - subtle accent and deep timbre",
        category: "Old British Male",
        description: "A deep timbre older voice. Great for video games."
      },
      {
        name: "Serena",
        category: "Young American Female",
        description: "An ideal voice for motivational content. Hyped."
      },
      {
        name: "Patricia - smooth, wonderful conversati",
        category: "Young American Female",
        description: "A smooth and pleasant voice for long conversations."
      },
      {
        name: "Sasha - Soothing and Chill",
        category: "Young American Female",
        description: "A glowing with a chill tone, perfect for casual conversations."
      },
      {
        name: "Silas - stern british male",
        category: "Middle-Aged British Male",
        description: "A stern British male voice. Great for audiobooks."
      },
      {
        name: "Horace - intense deep elder",
        category: "Old African Male",
        description: "An wise voice of an old man, good for storytellers and character parts."
      },
      {
        name: "Kali - crisp African female",
        category: "Young African Female",
        description: "A very crisp and clear african female voice. Great for storytelling."
      },
      {
        name: "Tamika",
        category: "Old American Female",
        description: "Young motherly voice."
      },
      {
        name: "Brian",
        category: "Middle-Aged Male",
        description: "A very deep and rich voice with a slightly hoarse tone. Perfect for epic narration and advertisements."
      },
      {
        name: "Mia - confident and annoyed",
        category: "Young American Female",
        description: "A confident but slightly annoyed voice. Good for conversations."
      },
      {
        name: "Hannah",
        category: "Middle-Aged American Female",
        description: "A confident middle-aged American female voice. Would work well for coaching."
      },
      {
        name: "Noah - Calm",
        category: "Young American Male",
        description: "A calm and assertive voice. Great for news on tech and trendy topics."
      },
      {
        name: "Mark",
        category: "Old British Male",
        description: "Great voice for history documentaries or audiobooks."
      },
      {
        name: "Scarlett",
        category: "Middle-Aged American Female",
        description: "A very nice voice with a very pleasant tone."
      },
      {
        name: "Rylan - calming male",
        category: "Old Indian Male",
        description: "A calming old male voice. Great for storytelling."
      },
      {
        name: "Cecilie - Confident and Strict",
        category: "Old British Female",
        description: "A woman with a strict and confident tone in her voice, perfect for conversations or characters."
      },
      {
        name: "Renata",
        category: "Old American Female",
        description: "An old, well articulated woman."
      },
      {
        name: "Shelby - Erratic and Confident",
        category: "Young American Female",
        description: "A young girl with an erratic and confident tone, perfect for comedic settings or conversations."
      },
      {
        name: "Suzanne - young, emotive, captivating",
        category: "Young American Female",
        description: "A young American woman. A calm and captivating voice for a great storyteller."
      },
      {
        name: "Jennifer - expressive and cheerful",
        category: "Middle-Aged American Female",
        description: "A sassy and somewhat stern female voice. Good for coaching."
      },
      {
        name: "Alice - calm",
        category: "Young British Female",
        description: "A calm female British voice. Good for news articles."
      },
      {
        name: "Russell",
        category: "Old American Male",
        description: "Great for storytelling."
      },
      {
        name: "Tom - trailer narrator",
        category: "Old American Male",
        description: "A strong and booming voice. Great for narration and storytelling."
      },
      {
        name: "Calvin",
        category: "Middle-Aged American Male",
        description: "A casual, male American voice. Would work well in a conversation."
      },
      {
        name: "Oliver - expressive and smooth",
        category: "Young American Male",
        description: "A young american man. Has a smooth tone, which works well for reading audiobooks."
      },
      {
        name: "George - royal and elegant",
        category: "Old British Male",
        description: "Old british man. Deep voice for a good storyteller."
      }
]