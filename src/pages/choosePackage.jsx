import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect, useRef, useState } from 'react';
import Hero from 'src/layouts/choosePackage/hero';
import Footer from 'src/layouts/footer/footer';
import Header from 'src/layouts/header/header';
import LoadingModal from 'src/layouts/loadingModal';
import 'src/styles/choosePackage.css';
import { checkWindowSizeChange, getBackgroundOnSizeChange, loadBackgrounds } from 'src/utilities/assetsLoaders';

import mobileChoosePackage from 'src/assets/images/mobile-choose-package.jpg';
import mediumChoosePackage from 'src/assets/images/medium-choose-package.jpg';
import fullChoosePackage from 'src/assets/images/choose-package.jpg';
import VideoServicePreviewSection from 'src/layouts/choosePackage/videoServicePreviewSection';
import AudioServicePreviewSection from 'src/layouts/choosePackage/audioServicePreviewSection';

const backgrounds = [[mobileChoosePackage], [mediumChoosePackage], [fullChoosePackage]];

const ChoosePackage = () => {
  const [layoutsLoaded, setLayoutsLoaded] = useState({
    mobile: false,
    medium: false,
    full: false
  });
  const windowSize = useWindowSize();
  const prevWindowSize = useRef(windowSize.width);
  const currentLayout = useRef();
  useEffect(() => {
    if (checkWindowSizeChange(windowSize,currentLayout,prevWindowSize) && currentLayout.current !== true) {
      const backgroundImagesUrls = getBackgroundOnSizeChange(backgrounds, windowSize);
      loadBackgrounds(setLayoutsLoaded, backgroundImagesUrls,layoutsLoaded, currentLayout.current);
    }
    prevWindowSize.current = windowSize.width;
  }, [setLayoutsLoaded, windowSize.width])
  return (
    <>
      {layoutsLoaded ?
        <>
          <Header />
          <Hero />
          <VideoServicePreviewSection />
          <AudioServicePreviewSection />
          <Footer />
        </> :
        <LoadingModal isLoading={true} />
      }
    </>
  )
}

export default ChoosePackage;