import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect, useRef, useState } from 'react';
import Hero from 'src/layouts/choosePackage/hero';
import Footer from 'src/layouts/footer/footer';
import Header from 'src/layouts/header/header';
import LoadingModal from 'src/layouts/loadingModal';
import 'src/styles/choosePackage.css';
import { getBackgroundOnSizeChange, loadBackgrounds } from 'src/utilities/assetsLoaders';

import mobileChoosePackage from 'src/assets/images/mobile-choose-package.jpg';
import mediumChoosePackage from 'src/assets/images/medium-choose-package.jpg';
import fullChoosePackage from 'src/assets/images/choose-package.jpg';
import VideoServicePreviewSection from 'src/layouts/choosePackage/videoServicePreviewSection';
import AudioServicePreviewSection from 'src/layouts/choosePackage/audioServicePreviewSection';

const backgrounds = [[mobileChoosePackage], [mediumChoosePackage], [fullChoosePackage]];

const ChoosePackage = () => {
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
                    <VideoServicePreviewSection/>
                    <AudioServicePreviewSection/>
                    <Footer />
                </> :
                <LoadingModal isLoading={true} />
            }
        </>
    )
}

export default ChoosePackage;