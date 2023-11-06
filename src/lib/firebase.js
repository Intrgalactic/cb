import { getAuth, signOut, updateEmail, updatePassword } from "firebase/auth";
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
    },
    logoutUser: () => {
        const auth = getAuth();
        signOut(auth);
    },
    getErrorMessage: (err) => {
        switch(err) {
            case "Firebase: Error (auth/email-already-in-use).": return "Email Is Already In Use";
            case "Firebase: Error (auth/wrong-password).": return "Wrong Password";
            case "Firebase: Error (auth/user-not-found).": return "User Not Found";
            case "Firebase: Error (auth/cancelled-popup-request).": return "User Closed The Popup";
        }
    }
}