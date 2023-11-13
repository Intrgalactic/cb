import SingleServiceAside from "./singleServiceAside"
import UseCase from "./useCase";

const UseCaseServicesBranch = () => {
    return (
        <div className="use-case-services__branch">
            <SingleServiceAside
                hasBtn={false}
                heading="Subtitles To Video"
                description="to make your message truly accessible and engaging, the addition of subtitles is paramount. Introducing our Subtitling Service, a seamless solution that enhances your videos by overlaying precise, synchronized subtitles"
            />
            <div className="use-case-service__branch__container">
                <UseCase heading="Modern Use Case" src="" type="video/mp4"/>
                <UseCase heading="Dubbing Case" src="" type="video/mp4"/>
            </div>
        </div>
    )
}

export default UseCaseServicesBranch;