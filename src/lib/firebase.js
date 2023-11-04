import { updateEmail, updatePassword } from "firebase/auth";
import { AxiosFacade } from "./axios";

export const FirebaseFacade = {
    changeUserPassword: (user, newPassword, setIsLoading, setProcessDone) => {
        updatePassword(user, newPassword).then(() => {
            setIsLoading(false);
            setProcessDone(true);
            return true;
        }).catch(err => {
            throw err;
        })

    },
    changeUserEmail: (user, oldEmail, newEmail, setIsLoading, setProcessDone) => {
        updateEmail(user, newEmail).then(async () => {
            await AxiosFacade.changeEmail(oldEmail, newEmail, setIsLoading).then(() => {
                setProcessDone(true);
                setIsLoading(false);
                return true;
            }).catch(err => {
                throw err;
            });
        }).catch(err => {
            throw err;
        })
    }
}