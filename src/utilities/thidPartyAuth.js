import { GoogleAuthProvider, getAdditionalUserInfo, getAuth, signInWithPopup } from "firebase/auth";
import { AxiosFacade } from "src/lib/axios";

export const processGoogleAuth = (setIsProcessing,navigate,errDispatch) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
        .then(async (result) => {
            setIsProcessing(true);
            const user = result.user;
            const additionalInfo = getAdditionalUserInfo(result);
            if (additionalInfo.isNewUser) {
                await AxiosFacade.createUser(additionalInfo.profile.name, user.displayName, user.email).then(() => {
                    navigate("/choose-package")
                });
            }
            else {
                const dbUser = await AxiosFacade.getUser(user.email,true);
                if (dbUser.isPaying) {
                    navigate('/dashboard');
                }
                else {
                    navigate('/choose-package');
                }
            }   
        }).catch((error) => {
            console.log(error);
            errDispatch({ type: "validateErr", payload: { err: error.message } });
        }).finally(() => {
            setIsProcessing(false); 
        });
}