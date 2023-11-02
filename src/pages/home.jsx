import 'src/styles/root.css';
import 'src/styles/home.css';
import Header from 'src/layouts/header/header';
import Hero from 'src/layouts/hero/hero';
import Services from 'src/layouts/homeServices/services';
import Benefits from 'src/layouts/homeBenefits/benefits';
import Testimonials from 'src/layouts/homeTestimonials/testimonials';
import Pricing from 'src/layouts/homePricing/pricing';
import Contact from 'src/layouts/homeContact/contact';
import Footer from 'src/layouts/footer/footer';

const Home = () => {

  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Benefits/>
      <Testimonials/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home;
