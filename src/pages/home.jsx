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
import { useEffect, useState } from 'react';
import { getBackgroundOnSizeChange, loadBackgrounds } from 'src/utilities/assetsLoaders';
import LoadingModal from 'src/layouts/loadingModal';
import { useWindowSize } from '@uidotdev/usehooks';

const backgrounds = [["src/assets/images/mobile-hero.jpg", "src/assets/images/mobile-services.jpg", "src/assets/images/mobile-benefits.jpg","src/assets/images/mobile-contact.jpg"],["src/assets/images/medium-hero.jpg", "src/assets/images/medium-services.jpg", "src/assets/images/medium-contact.jpg","src/assets/images/medium-benefits.jpg"],["src/assets/images/contact.jpg", "src/assets/images/services.jpg", "src/assets/images/hero.jpg","src/assets/images/benefits.jpg"]]

const Home = () => {
  const [backgroundsLoaded, setBackgroundsLoaded] = useState(false);
  const windowSize = useWindowSize();
  useEffect(() => {
    var backgroundImagesUrls = getBackgroundOnSizeChange(backgrounds,windowSize);
    loadBackgrounds(setBackgroundsLoaded, backgroundImagesUrls);
  }, [setBackgroundsLoaded,windowSize.width])
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
