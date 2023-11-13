import SectionH2 from "src/components/sectionH2"
import smilingFace from 'src/assets/images/smiling-face.png';
import neutralFace from 'src/assets/images/neutral-face.png';
import TestimonialBox from "./testimonialBox";

const Testimonials = () => {
    const testimonials = [{
        name: "Krystian",
        lastName: "Jamioł",
        description: "I recently used the Low-Light Enhancement service for a video project, and the results were astonishing! My original footage was challenging due to low-light conditions, but 'Bad Cases Killer' worked like magic. The video came out brilliantly lit, and the process was incredibly efficient. I couldn't be happier!",
        rating: smilingFace
    }, {
        name: "Bartosz",
        lastName: "Klamczyński",
        description: "Cutting Edge Details provided a noticeable resolution boost for my videos, but the process took longer than expected. While the quality improved, I still encountered some pixelation in certain scenes. It's a decent service, but I hope to see faster processing and better results in the future.",
        rating: neutralFace
    }, {
        name: "Mateusz",
        lastName: "Mikołajczyk",
        description: "I can't praise the Subtitling Service enough! As a content creator, making my videos accessible and engaging is a top priority. This service exceeded my expectations. The subtitles were impeccably synchronized, and the customization options allowed me to maintain my video's style while enhancing accessibility. My viewers love it, and so do I",
        rating: smilingFace
    }]
    return (
        <div className="testimonials">
            <SectionH2 content="Words of Delight: Hear What Our Customers Say!" />
            <div className="testimonials__container">
                {testimonials.map((testimonial, index) => (
                    <TestimonialBox key={index} rating={testimonial.rating} description={testimonial.description} name={testimonial.name} lastName={testimonial.lastName} />
                ))}
            </div>
        </div>
    )
}

export default Testimonials;