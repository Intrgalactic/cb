import { useEffect, useState } from "react";
import ServiceMainInput from "src/layouts/dashboard/services/serviceMainInput";
import Recording from "./recording";

const AudioRecorder = ({ setRecordingFile, recordingFiles,selectedRecordingFile,setSelectedRecordingFile }) => {
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioURL, setAudioURL] = useState('');
    const filesLength = recordingFiles ? recordingFiles.length : 0;
    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        let chunks = [];
        recorder.ondataavailable = (async (e) => {
            chunks.push(e.data)
        }
        )
        recorder.onstop = () => {
            const completeBlob = new Blob(chunks, { type: 'audio/mp3' });
            setAudioURL(URL.createObjectURL(completeBlob));
        };

        recorder.start(100);
        setRecording(true);
    };

    const stopRecording = () => {
        mediaRecorder.stop();
        setRecording(false);
    };
    useEffect(() => {
        if (audioURL) {
            setRecordingFile(audioURL);
        }
    }, [audioURL])
    console.log(audioURL,55);
    return (
        <div className="audio-recorder__container">
            <ServiceMainInput heading="Record Your Voice">
                <button className="record-btn" disabled={filesLength === 5 ? true : false} style={filesLength === 5 ? {backgroundColor:"grey"} : {}} onClick={recording ? stopRecording : startRecording}>
                    {recording ? "Stop Recording" : "Start Recording"}
                </button>
                {recordingFiles &&
                    <div className="recordings__container">
                        {recordingFiles.map((file, index) => (
                            <Recording selectedRecordingFile={selectedRecordingFile} setSelectedRecordingFile={setSelectedRecordingFile} src={file} key={index} index={index}/>
                        ))}
                    </div>
                }
            </ServiceMainInput>
        </div>
    )
}

export default AudioRecorder;