
import whiteHomeIcon from 'src/assets/images/icons/home.png';
import whiteDashboardIcon from 'src/assets/images/icons/dashboard.png';
import whiteMicrophoneIcon from 'src/assets/images/icons/microphone.png';
import whiteVideoIcon from 'src/assets/images/icons/video.png';
import whiteSettingsIcon from 'src/assets/images/icons/settings.png';

import gradientMicrophone from 'src/assets/images/microphone.png';
import gradientCamera from 'src/assets/images/camera.png';
import gradientSubtitles from 'src/assets/images/subtitles.png';
import gradientClone from 'src/assets/images/clone.png';
import gradientImageEnhance from 'src/assets/images/image-enhance.png';
import gradientQuotes from 'src/assets/images/quotes.png';
import gradientVideoEnhance from 'src/assets/images/enhance.png';

import serviceMicrophone from 'src/assets/images/icons/white-services/microphone.png';
import serviceClone from 'src/assets/images/icons/white-services/clone.png';
import serviceImage from 'src/assets/images/icons/white-services/image.png';
import serviceQuotes from 'src/assets/images/icons/white-services/quotes.png';
import serviceCamera from 'src/assets/images/icons/white-services/camera.png';

export const pricingItems = [{
    heading: "Starter",
    price: "35$",
    href: "/checkout?package=starter",
    btn: "Get Started Now",
    src: gradientMicrophone,
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
    src: gradientQuotes,
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
    src: gradientVideoEnhance,
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
        img: whiteHomeIcon,
        link: "/"
    },
    {
        name: "Dashboard",
        img: whiteDashboardIcon,
        link: "/dashboard"
    },
    {
        name: "Talk & Text",
        img: whiteMicrophoneIcon,
        id:0,
        menu: [{
            name:"Text To Speech",
            link: "/dashboard/services/text-to-speech",
            alt: "text to speech",
            img: gradientMicrophone,
        },
        {
            name:"Speech To Text",
            link: "/dashboard/services/speech-to-text",
            alt: "speech to text",
            img: gradientQuotes
        },
        {
            name: "Voice Cloning",
            link: "/dashboard/services/voice-cloning",
            alt: "voice cloning",
            img: gradientClone,
        }]
    },
    {
        name: "Videos",
        img: whiteVideoIcon,
        id: 1,
        menu: [
            {
                name:"Subtitles To Video",
                link: "/dashboard/services/subtitles-to-video",
                alt: "subtitles to video",
                img: gradientSubtitles
            },
            {
                name:"Subtitles From Video",
                link: "/dashboard/services/subtitles-from-video",
                alt: "subtitles from video",
                img: gradientCamera
            },
            {
                name: "Image Enhancer",
                link: "/dashboard/services/image-enhancer",
                alt: "image enhance",
                img: gradientImageEnhance
            }
        ],
    },
    {   
        name: "Settings",
        img: whiteSettingsIcon,
        link: "/dashboard/settings"
    },
];

export const availableVoices = [
    {
        name: "Marcus - authoritative and deep",
        category: "Middle-Aged American Male",
        description: "An authoritative and deep voice. Great for audiobooks or news.",
        id: "OaZTcUUwLscisHczXgWP"
      },
      {
        name: "Kingsley - dapper and deep narrator",
        category: "Old British Male",
        description: "Old dapper man. A deep and smooth voice for storytelling.",
        id: "jmLzrw3Smj3yRTItyc11"
      },
      {
        name: "Alex - expressive narrator",
        category: "Young American Male",
        description: "Young American man. Is a strong and expressive narrator.",
        id: "zWacvxYvGDVnNZ6nsANZ"
      },
      {
        name: "Valentino",
        category: "Old British Male",
        description: "A great voice with depth. The voice is deep with a great accent, and works well for meditations.",
        id: "kpcPBikyQZYRn4LT0Agu"
      },
      {
        name: "Natasha - Valley girl",
        category: "Young American Female",
        description: "A valley girl female voice. Great for shorts.",
        id: "p06ce3qfN39HoFLYnngP"
      },
      {
        name: "Dan Dan",
        category: "Young American Male",
        description: "An upbeat and modulate voice. Great for shorts and social media.",
        id: "9F4C8ztpNUmXkdDDbz3J"
      },
      {
        name: "Bria - Young and Soft",
        category: "Young American Female",
        description: "A young female with a softly spoken tone, perfect for storytelling or ASMR.",
        id: "Zcv7EvL9IyPtgbskpVU9"
      },
      {
        name: "Brian - Documentary",
        category: "Young American Male",
        description: "Great voice for nature documentaries.",
        id: "wZcJJic5WkhmFnLpITzI"
      },
      {
        name: "Sally - very realistic, superb",
        category: "Young American Female",
        description: "Young american woman. A relaxed voice for good conversations",
        id: "2ZE9u0a57jpeaasGYNb2"
      },
      {
        name: "Joanne - pensive, introspective, soft and lovely",
        category: "Young American Female",
        description: "Young american woman. A soft and plesant voice for a great character.",
        id: "cAPbHS4SBUDlBcVj0tB0"
      },
      {
        name: "Bruce - vibrant and baritone",
        category: "Middle-Aged American Male",
        description: "A vibrant baritone voice. Good for shorts and narration",
        id: "RSDT0qDrbUlOD8RxO920"
      },
      {
        name: "Ella - soft and sweet",
        category: "Young British Female",
        description: "A very sweet and kind voice with a great tone but with some harshness. Good for children's stories.",
        id: "03iLPuVeZeWilZwwz9Pb"
      },
      {
        name: "Jack - Smooth, deep, mysterious",
        category: "Middle-Aged American Male",
        description: "Middle-Aged american man. Is a good storyteller with a smooth voice",
        id: "TZQ5klq9ORCBTLDnK7ko"
      },
      {
        name: "Markus - Mature and Chill",
        category: "Middle-Aged American Male",
        description: "A man with a mature and chill voice that'd be great for conversations and voiceovers.",
        id: "dUEhyMr1DU8iuajVEjfY"
      },
      {
        name: "Hades - grim gravitas",
        category: "Middle-Aged American Male",
        description: "A deep and pleasant voice with a slight rasp. Great for meditation.",
        id: '391rOjwZ2Jk0EVLOcPuc'
      },
      {
        name: "Paola - young girl",
        category: "Young American Female",
        description: "A gentle but confident young woman's voice with an American accent. Would work well in a conversation.",
        id: "EdtyWQWtX73hmzj2vISl"
      },
      {
        name: "Ryan Kurk",
        category: "Middle-Aged American Male",
        description: "A very pleasant and kind voice. Great for shorts or narration.",
        id: "rU18Fk3uSDhmg5Xh41o4"
      },
      {
        name: "Olivia - Powerful, provocative narrator",
        category: "Middle-Aged American Female",
        description: "A distinguished american woman. A formal calm voice good for podcasts.",
        id: "9MQl96lWd0dg77jGMUf1"
      },
      {
        name: "Maya",
        category: "Young American Female",
        description: "A young american woman. A calm voice for guided meditation.",
        id: "7jxzLBMx2tcud8ywlik3"
      },
      {
        name: "Dave - deep and gruff",
        category: "Old American Male",
        description: "A very deep and rumbly voice. Perfect for commercials and advertisement.",
        id: "45YylGrvKzjiw0YzBIuk"
      },
      {
        name: "Myra",
        category: "Young American Female",
        description: "An upbeat, spritely, quite high-pitched American female. Would work well for conversational purposes.",
        id:"PFo2BiGYtKX4O862CtYz"
      },
      {
        name: "Dylan - confident",
        category: "Young American Male",
        description: "A very pleasant and kind voice with nice inflection.",
        id: "WSZqKuXj83WxePLokLxT"
      },
      {
        name: "Josha - captivating trailors",
        category: "Old American Male",
        description: "A deep and rich voice. Great for trailers etc.",
        id: "4O6Tqc8B8W3gaj7SGzdi"
      },
      {
        name: "Readwell - Deep and narrative",
        category: "Old American Male",
        description: "Old american man. Has a deep voice, which makes for a good storyteller",
        id: "dlBKdZcLrO26DA82XZu3"
      },
      {
        name: "Eleguar - Latin American Spanish",
        category: "Young American Male",
        description: "An excited and dynamic voice with a Latin Spanish/American accent, great for commercials and advertisements.",
        id: "T7QGPtToiqH4S8VlIkMJ"
      },
      {
        name: "Hal - the radio guy",
        category: "Middle-Aged American Male",
        description: "A gentle, well articulated male voice. Good for radio shows or interviews.",
        id: "dGwLXouqyLe2fgSEHhY1"
      },
      {
        name: "Matthew - calm and peaceful",
        category: "Middle-Aged American Male",
        description: "A calm and peaceful voice. Great for guided meditations.",
        id: "4DUCQ3hKnDvjCHiU94u7"
      },
      {
        name: "Neal",
        category: "Old American Male",
        description: "A deep, strong old male american accent. Great for narration.",
        id: "K8AkKW9MOpI8k0J8dZ4R"
      },
      {
        name: "Guy",
        category: "Young American Male",
        description: "An emotional, slightly anxious sounding young male with an American accent. Could voice a cartoon character.",
        id: "8YRtHmpIfSlwaNGChW33"
      },
      {
        name: "Rowan - gruff and raspy",
        category: "Middle-Aged American Male",
        description: "A gruff and strong male voice. Good for storytelling.",
        id: "RcR9zcpIqtU3OYImtRPm"
      },
      {
        name: "Scott - Mature and Deep",
        category: "Middle-Aged American Male",
        description: "A man with a mature and deep voice that'd be great for formal news stations or media recordings.",
        id: "g0i7MPxgN1OLXXfyBmXf"
      },
      {
        name: "Sanjay - profound and deep",
        category: "Middle-Aged Indian Male",
        description: "A profound and deep voice. Great for narration and meditation.",
        id: "2G3hZymscpzvgeTLSdK2"
      },
      {
        name: "Lawrence - dignified British male",
        category: "Old British Male",
        description: "A dignified British male voice. Great for documentaries or similar.",
        id: "Y8DkrZwD4QOZlzAKQEse"
      },
      {
        name: "Luke",
        category: "Young American Male",
        description: "Warm and sympathetic voice, perfect for narrations aimed at a younger audience.",
        id: "SSoo70tire6Rgs3X7UXj"
      },
      {
        name: "Victoria - classy and mature",
        category: "Middle-Aged British Female",
        description: "A classy and mature voice. Well suited for audiobooks.",
        id: "b9k1CEcq1ByrW25ydX5f"
      },
      {
        name: "James",
        category: "Middle-Aged American Male",
        description: "A fantastic voice for engaging and fast, short-form content.",
        id: "Y8DkrZwD4QOZlzAKQEse"
      },
      {
        name: "Myriam - sweet Teen Girl",
        category: "Young American Female",
        description: "A young, sweet, female American voice. Could be used for a cartoon character.",
        id: "FKpA39UuLxPqgFOCzbo9"
      },
      {
        name: "Oswald - intelligent professor",
        category: "Old British Male",
        description: "An intelligent and smart voice. Brilliant for education.",
        id: "qJ3xTw8UICnuUg1MeDlb"
      },
      {
        name: "Vikram",
        category: "Young Indian Male",
        description: "A youthful voice, good for chats and conversations.",
        id: "a7W8ptqqq9dOqsoaOLnO"
      },
      {
        name: "Ryan - subtle accent and deep timbre",
        category: "Old British Male",
        description: "A deep timbre older voice. Great for video games.",
        id: "f0dppSPKAViPqkWafP3O"
      },
      {
        name: "Serena",
        category: "Young American Female",
        description: "An ideal voice for motivational content. Hyped.",
        id: "Gv9U9DMZlC8fKc3Z7T8u"
      },
      {
        name: "Patricia - smooth, wonderful conversati",
        category: "Young American Female",
        description: "A smooth and pleasant voice for long conversations.",
        id: "3DWDz1FzPDfU8LNxB6ez"
      },
      {
        name: "Sasha - Soothing and Chill",
        category: "Young American Female",
        description: "A glowing with a chill tone, perfect for casual conversations.",
        id: "i3zbb4jkoTB6YxVEpKVP"
      },
      {
        name: "Silas - stern british male",
        category: "Middle-Aged British Male",
        description: "A stern British male voice. Great for audiobooks.",
        id: "TXS4R0siaxrs7Jf1u5cd"
      },
      {
        name: "Horace - intense deep elder",
        category: "Old African Male",
        description: "An wise voice of an old man, good for storytellers and character parts.",
        id: "Ex02wkq69c3S8lNGLeme"
      },
      {
        name: "Kali - crisp African female",
        category: "Young African Female",
        description: "A very crisp and clear african female voice. Great for storytelling.",
        id: "JzlakR7zXGfU3YbOtTVZ"
      },
      {
        name: "Tamika",
        category: "Old American Female",
        description: "Young motherly voice.",
        id: "4v8b2xO9tmwn1TEpPn6B"
      },
      {
        name: "Brian - Deep And Epic",
        category: "Middle-Aged Male",
        description: "A very deep and rich voice with a slightly hoarse tone. Perfect for epic narration and advertisements.",
        id: "TQ6BHf6fzLzIzjg6hjh6"
      },
      {
        name: "Mia - confident and annoyed",
        category: "Young American Female",
        description: "A confident but slightly annoyed voice. Good for conversations.",
        id: "NTbiDHrbcKk3vnl5yXKu"
      },
      {
        name: "Hannah",
        category: "Middle-Aged American Female",
        description: "A confident middle-aged American female voice. Would work well for coaching.",
        id: "Zz1Fk1w61ut2jymmPtD1"
      },
      {
        name: "Noah - Calm",
        category: "Young American Male",
        description: "A calm and assertive voice. Great for news on tech and trendy topics.",
        id: "YdW5FSs907KBBea5FWW8"
      },
      {
        name: "Mark",
        category: "Old British Male",
        description: "Great voice for history documentaries or audiobooks.",
        id: "SE7LulPPIITI6RFTczfA"
      },
      {
        name: "Scarlett",
        category: "Middle-Aged American Female",
        description: "A very nice voice with a very pleasant tone.",
        id: "kA0x8gfdhmzey95Dl1ce"
      },
      {
        name: "Rylan - calming male",
        category: "Old Indian Male",
        description: "A calming old male voice. Great for storytelling.",
        id: "ic2TPvcyNKw10DtTTb2E"
      },
      {
        name: "Cecilie - Confident and Strict",
        category: "Old British Female",
        description: "A woman with a strict and confident tone in her voice, perfect for conversations or characters.",
        id: "hghlmXsbr5hSk0sLuIS9"
      },
      {
        name: "Renata",
        category: "Old American Female",
        description: "An old, well articulated woman.",
        id: "5FBBV1nEV7mwM3wzK1o0"
      },
      {
        name: "Shelby - Erratic and Confident",
        category: "Young American Female",
        description: "A young girl with an erratic and confident tone, perfect for comedic settings or conversations.",
        id: "cJdwJH9ihaBg8AlZmDv1"
      },
      {
        name: "Suzanne - young, emotive, captivating",
        category: "Young American Female",
        description: "A young American woman. A calm and captivating voice for a great storyteller.",
        id: "5Fr0Qrflc15ab01YKuxX"
      },
      {
        name: "Jennifer - expressive and cheerful",
        category: "Middle-Aged American Female",
        description: "A sassy and somewhat stern female voice. Good for coaching.",
        id: "qcPtbLBYFMxOJhJ8DdB3"
      },
      {
        name: "Alice - calm",
        category: "Young British Female",
        description: "A calm female British voice. Good for news articles.",
        id: "0RjgH8VmjJHaALqUSfBa"
      },
      {
        name: "Russell",
        category: "Old American Male",
        description: "Great for storytelling.",
        id: "t5KEPGu3FXOAIUHHul5f"
      },
      {
        name: "Tom - trailer narrator",
        category: "Old American Male",
        description: "A strong and booming voice. Great for narration and storytelling.",
        id: "FFWqWCj8VXk8EHuTOmZJ"
      },
      {
        name: "Calvin",
        category: "Middle-Aged American Male",
        description: "A casual, male American voice. Would work well in a conversation.",
        id: "Ea1jDN5BoZ4roQoDxJbB"
      },
      {
        name: "Oliver - expressive and smooth",
        category: "Young American Male",
        description: "A young american man. Has a smooth tone, which works well for reading audiobooks.",
        id: "2FoKHH8o86E11irdyftL"
      },
      {
        name: "George - royal and elegant",
        category: "Old British Male",
        description: "Old british man. Deep voice for a good storyteller.",
        id: "42xDG1NAfPfjTfTstbrh"
      }
]

export const processModals = {
  textToSpeech: {
    src:serviceMicrophone,
    alt: "microphone",
    processText: "We Are Synthesizing Your Text"
  },
  speechToText: {
    src: serviceQuotes,
    alt: "quotes",
    processText: "We Are Translating Your Speech"
  },
  voiceCloning: {
    src:serviceClone,
    alt: "printer",
    processText: "We Are Cloning Your Voice"
  },
  subtitlesFromVideo: {
    src:serviceCamera,
    alt: "camera",
    processText: "We Are Gathering Your Subtitles",
  },
  imageEnhancer: {
    src:serviceImage,
    alt: "image",
    processText: "We Are Enhancing Your Image"
  }

}