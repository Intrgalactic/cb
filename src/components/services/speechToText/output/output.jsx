import OutputSection from "../../outputSection"
import OutputTypeContentList from "./outputTypeContentList"
import textIcon from 'src/assets/images/icons/white-service-outputs/speech-to-text/text.png'
import summarizationIcon from 'src/assets/images/icons/white-service-outputs/speech-to-text/summarization.png';
import timestampsIcon from 'src/assets/images/icons/white-service-outputs/speech-to-text/timestamps.png';
import topicsIcon from 'src/assets/images/icons/white-service-outputs/speech-to-text/topic.png';
import diarizationIcon from 'src/assets/images/icons/white-service-outputs/speech-to-text/diarization.png';
import Transcript from "./transcript";

const Output = ({ outputData }) => {
    console.log(outputData);
    return (
        <OutputSection>
            <OutputTypeContentList category="Text" icon={textIcon} alt="text">
                <Transcript transcription={outputData.transcription} />
            </OutputTypeContentList>
            {outputData.summary &&
                <OutputTypeContentList category="Summary" icon={summarizationIcon} alt="summary">
                    <Transcript transcription={outputData.summary}/>
                </OutputTypeContentList>
            }
            {outputData.timestamps &&
                <OutputTypeContentList category="Timestamps" icon={timestampsIcon} alt="timestamps">
                    {outputData.timestamps.map((timestamp, index) => (
                        <div className="timestamps__container" key={index}>
                            <div className="timestamp">
                                <p>Spoken Phrase Interval</p>
                                {timestamp.timestamp}
                            </div>
                            <p className="transcript">{timestamp.transcript}</p>
                        </div>
                    ))}
                </OutputTypeContentList>
            }
            {outputData.diarization &&
                <OutputTypeContentList category="Speakers" icon={diarizationIcon} alt="diarization">
                    <Transcript transcription={outputData.diarization}/>
                </OutputTypeContentList>
            }
            {outputData.topics && outputData.topics.length > 0 &&
                <OutputTypeContentList category="Topics" icon={topicsIcon} alt="topics">
                    <Transcript transcription={outputData.topics}/>
                </OutputTypeContentList>
            }
        </OutputSection>
    )
}

export default Output;
