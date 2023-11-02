import SectionH2 from "src/components/sectionH2"
import TestimonialBox from "./testimonialBox"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
    const testimonials = [{
        heading: "Inclusivity",
        description: "CreateBoss text-to-speech service has taken my audiobooks to a whole new level. The range of customizable voices allows me to match the tone of the narration to the genre of each book. The natural and expressive delivery captures the essence of the characters and keeps my listeners engaged throughout the story.",
        name: "William Carter"
    }, {
        heading: "Accessibility",
        description: "As a content creator, transcribing interviews and podcasts used to be a time-consuming task. Now, with CreateBoss cutting-edge technology, I can easily convert my spoken words into written text in no time. It has truly elevated my content creation process, and I couldn't be happier with the results!",
        name: "Ethan Mitchell"
    }, {
        heading: "Empowerment",
        description: "I needed subtitles for my corporate training videos, and their subtitle extraction service was a lifesaver. Uploading my videos was a breeze, and the accurate subtitles were generated quickly. I was able to edit and fine-tune the subtitles as needed, saving me valuable time.",
        name: "James Rivera"
    }, {
        heading: "Revolution",
        description: "Adding subtitles to my videos has been a game-changer for my online courses. Thanks to CreateBoss professional subtitle service, my content is now accessible to a broader audience, including those with hearing impairments. The subtitles are perfectly synchronized, and the quality is top-notch.",
        name: "Olivia Martinez"
    }]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:0,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]
    };
    return (
        <section className="testimonials">
            <SectionH2 content="Words of Delight: Hear What Our Customers Say!" />
            <div className="testimonials__container">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialBox heading={testimonial.heading} description={testimonial.description} name={testimonial.name} key={index} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Testimonials;