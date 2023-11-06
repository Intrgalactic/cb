import { getAdditionalUserInfo, getAuth, signInWithPopup } from "firebase/auth";
import { AxiosFacade } from "src/lib/axios";
import { FirebaseFacade } from "src/lib/firebase";

export const processThirdPartyAuth = (setIsProcessing,navigate,errDispatch,provider) => {
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
                if (dbUser.isPaying === 'true') {
                    navigate('/dashboard');
                }
                else {
                    navigate('/choose-package');
                }
            }   
        }).catch((error) => {
            const msg = FirebaseFacade.getErrorMessage(error.message);
            errDispatch({ type: "validateErr", payload: { err: msg } });
        }).finally(() => {
            setIsProcessing(false); 
        });
}