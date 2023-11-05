import 'src/styles/root.css';
import 'src/styles/home.css';
import Header from 'src/layouts/header/header';
import Hero from 'src/layouts/home/hero/hero';
import Services from 'src/layouts/homeServices/services';
import Benefits from 'src/layouts/home/homeBenefits/benefits';
import Testimonials from 'src/layouts/home/homeTestimonials/testimonials';
import Pricing from 'src/layouts/home/homePricing/pricing';
import Contact from 'src/layouts/home/homeContact/contact';
import Footer from 'src/layouts/footer/footer';
import { useEffect, useRef, useState } from 'react';
import { getBackgroundOnSizeChange, loadBackgrounds } from 'src/utilities/assetsLoaders';
import LoadingModal from 'src/layouts/loadingModal';
import { useWindowSize } from '@uidotdev/usehooks';
import mobileHero from 'src/assets/images/mobile-hero.jpg';
import mobileServices from 'src/assets/images/mobile-services.jpg';
import mobileBenefits from 'src/assets/images/mobile-benefits.jpg';
import mobileContact from 'src/assets/images/mobile-contact.jpg';

// Import images for medium screens
import mediumHero from 'src/assets/images/medium-hero.jpg';
import mediumServices from 'src/assets/images/medium-services.jpg';
import mediumBenefits from 'src/assets/images/medium-benefits.jpg';
import mediumContact from 'src/assets/images/medium-contact.jpg';

// Import images for full size
import fullHero from 'src/assets/images/hero.jpg';
import fullServices from 'src/assets/images/services.jpg';
import fullBenefits from 'src/assets/images/benefits.jpg';
import fullContact from 'src/assets/images/contact.jpg';

// Organize them into an array of arrays
const backgrounds = [
  [mobileHero, mobileServices, mobileBenefits, mobileContact],
  [mediumHero, mediumServices, mediumBenefits, mediumContact],
  [fullHero, fullServices, fullBenefits, fullContact]
];

const Home = () => {
  const [backgroundsLoaded, setBackgroundsLoaded] = useState(false);
  const windowSize = useWindowSize();
  const prevWindowSize = useRef(windowSize.width);

  useEffect(() => {
    const checkWindowSizeChange = () => {
      const crossed650 = (windowSize.width >= 650 && prevWindowSize.current < 650) || (windowSize.width < 650 && prevWindowSize.current >= 650) || (windowSize.width < 650 && prevWindowSize.current === windowSize.width);
      const crossed1024 = (windowSize.width >= 1024 && prevWindowSize.current < 1024) || (windowSize.width < 1024 && prevWindowSize.current >= 1024) || (windowSize.width < 650 && prevWindowSize.current === windowSize.width);
      return crossed650 || crossed1024;
  };

    if (checkWindowSizeChange()) {
      const backgroundImagesUrls = getBackgroundOnSizeChange(backgrounds, windowSize);
      loadBackgrounds(setBackgroundsLoaded, backgroundImagesUrls);
    }
    prevWindowSize.current = windowSize.width;
  }, [setBackgroundsLoaded, windowSize.width])
  return (
    <>
      {backgroundsLoaded ?
        <>

          <Header />
          <Hero />
          <Services />
          <Benefits />
          <Testimonials />
          <Pricing />
          <Contact />
          <Footer />
        </> :
        <LoadingModal isLoading={true} />
      }
    </>
  )
}

export default Home;
