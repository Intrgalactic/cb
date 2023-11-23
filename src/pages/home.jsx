import 'src/styles/root.css';
import 'src/styles/home.css';
import Header from 'src/layouts/header/header';
import Hero from 'src/layouts/home/hero/hero';
import Footer from 'src/layouts/footer/footer';
import { useEffect, useRef, useState } from 'react';
import { checkWindowSizeChange, getBackgroundOnSizeChange, loadBackgrounds } from 'src/utilities/assetsLoaders';
import LoadingModal from 'src/layouts/loadingModal';
import { useWindowSize } from '@uidotdev/usehooks';
import mobileHero from 'src/assets/images/mobile-hero.jpg';

import mediumHero from 'src/assets/images/medium-hero.jpg';
import fullHero from 'src/assets/images/hero.jpg';
import ServicesSection from 'src/layouts/homeServices/servicesSection';
import Pricing from 'src/layouts/home/homePricing/pricing';
import Testimonials from 'src/layouts/home/homeTestimonials/testimonials';
import Faq from 'src/layouts/home/faq/faq';
import Newsletter from 'src/layouts/home/newsletter/newsletter';

const backgrounds = [
  [mobileHero],
  [mediumHero],
  [fullHero]
];

const Home = () => {
  const [layoutsLoaded, setLayoutsLoaded] = useState(false);
  const windowSize = useWindowSize();
  const prevWindowSize = useRef(windowSize.width);
  const currentLayout = useRef();

  useEffect(() => {
    window.onload = () => {
      setLayoutsLoaded(true);
    }
  }, [setLayoutsLoaded])
  return (
    <>
      {layoutsLoaded ?
        <>
          <Header />
          <Hero />
          <ServicesSection />
          <Pricing />
          <Testimonials />
          <Faq/>
          <Newsletter/>
          <Footer />
        </> :
        <LoadingModal isLoading={true} />
      }
    </>
  )
}

export default Home;
