import { useWindowSize } from "@uidotdev/usehooks"
import NavDetector from "./dashboard/navDetector"
import SettingsPanel from "src/layouts/dashboard/settings/settingsPanel";
import 'src/styles/settings.css';

const Settings = () => {
    const windowSize = useWindowSize();
    return (
        <>
            <div className="settings">
                <NavDetector windowSize={windowSize}/>
                <SettingsPanel/>
            </div>
        </>
    )
}

export default Settings;