import { useWindowSize } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import Hero from 'src/layouts/choosePackage/hero';
import Footer from 'src/layouts/footer/footer';
import Header from 'src/layouts/header/header';
import LoadingModal from 'src/layouts/loadingModal';
import 'src/styles/choosePackage.css';
import { getBackgroundOnSizeChange, loadBackgrounds } from 'src/utilities/assetsLoaders';

const backgrounds = [["src/assets/images/mobile-choose-package.jpg"],["src/assets/images/medium-choose-package.jpg"],["src/assets/images/choose-package.jpg"]]

const ChoosePackage = () => {
    const [backgroundsLoaded, setBackgroundsLoaded] = useState(false);
    const windowSize = useWindowSize();
    useEffect(() => {
        const backgroundImagesUrls = getBackgroundOnSizeChange(backgrounds,windowSize);
        loadBackgrounds(setBackgroundsLoaded,backgroundImagesUrls);
    },[setBackgroundsLoaded])
    return (
        <>
            {backgroundsLoaded ?
                <>
                    <Header />
                    <Hero />
                    <Footer />
                </> :
                <LoadingModal isLoading={true} />
            }
        </>
    )
}

export default ChoosePackage;