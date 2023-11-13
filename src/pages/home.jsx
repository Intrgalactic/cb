import 'src/styles/root.css';
import 'src/styles/home.css';
import Header from 'src/layouts/header/header';
import Hero from 'src/layouts/home/hero/hero';
import Footer from 'src/layouts/footer/footer';
import { useEffect, useRef, useState } from 'react';
import { getBackgroundOnSizeChange, loadBackgrounds } from 'src/utilities/assetsLoaders';
import LoadingModal from 'src/layouts/loadingModal';
import { useWindowSize } from '@uidotdev/usehooks';
import mobileHero from 'src/assets/images/mobile-hero.jpg';

import mediumHero from 'src/assets/images/medium-hero.jpg';
import fullHero from 'src/assets/images/hero.jpg';
import ServicesSection from 'src/layouts/homeServices/servicesSection';
import Pricing from 'src/layouts/home/homePricing/pricing';
import Testimonials from 'src/layouts/home/homeTestimonials/testimonials';
import Faq from 'src/layouts/home/faq/faq';

const backgrounds = [
  [mobileHero],
  [mediumHero],
  [fullHero]
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
          <ServicesSection />
          <Pricing />
          <Testimonials />
          <Footer />
        </> :
        <LoadingModal isLoading={true} />
      }
    </>
  )
}

export default Home;
