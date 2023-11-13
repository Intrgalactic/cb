import BottomServicesBranch from "./bottomServicesBranch";
import CompareService from "./compareService";
import ServiceSectionHeading from "./serviceSectionHeading";
import  bottomServicesOrb from 'src/assets/images/icons/home/bottom-services-orb.png';
import UseCaseServicesBranch from "./useCaseServicesBranch";

const BottomServices = () => {
    return (
        <div className="bottom-services">
            <ServiceSectionHeading src={bottomServicesOrb} alt="Video Orb" subHeading="Step into a New Dimension of Video Enhancement and Subtitling with AI: Unleash Unprecedented Quality, Efficiency, and Creativity" heading="Transform Your Videos with AI-Enhanced Quality and Subtitles" />
            <CompareService heading="Ultra Denoiser" description="seamlessly eliminate unwanted noise from your videos, transform videos into high-definition, visually stunning masterpieces."/>
            <BottomServicesBranch/>
            <UseCaseServicesBranch/>
        </div>
    )
}

export default BottomServices;