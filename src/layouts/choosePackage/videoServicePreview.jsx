import playVideoImg from 'src/assets/images/play-video.png';
import ServicePreviewHeading from 'src/components/servicePreviewHeading';

const VideoServicePreview = ({ src, heading, subHeading, img, alt, width, height }) => {
    const playVideo = () => {

    }
    return (
        <article className="video-service-preview">
            <ServicePreviewHeading alt={alt} img={img} width={width} height={height} heading={heading} subHeading={subHeading}/>
            <div className="video-service-preview__video-container">
                <div className="video-service-preview__video-inner-container">
                    <video>
                        <source src={src} type="video/mp4" />
                        <p>Failed To Load Video</p>
                    </video>
                    <button onClick={playVideo} className='play-video-btn'>
                        <img src={playVideoImg} alt="play button"/>
                    </button>
                </div>
            </div>
        </article>
    )
}

export default VideoServicePreview;