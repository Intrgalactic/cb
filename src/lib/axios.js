import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";

const config = {
    headers: {
        'Content-Type': "application/x-www-form-urlencoded"
    }
}

export const AxiosFacade = {
    getUser: async (email, getJwtToken) => {
        var user;
        if (getJwtToken === true) {
            var authConfig = {
                ...config,
                withCredentials: true
            }
        }
        user = await axios.post(`${import.meta.env.VITE_SERVER_FETCH_URL}db/get-user`, {
            email: email.toLowerCase(),
            getToken: getJwtToken,
            web: true
        }, authConfig || config).then(function (response) {
            const data = response.data;
            console.log(data);
            user = data
            return user;
        }).catch(err => {
            throw err;
        });
        return user;
    },
    changeUserName: async (userEmail, newUsername, setIsLoading) => {
        const body = {
            username: newUsername,
            email: userEmail
        }
        return await putFetchDB("db/update-user", body, 204, setIsLoading);
    },
    changeEmail: async (userEmail, newEmail, setIsLoading) => {
        const body = {
            email: userEmail,
            newEmail: newEmail.toLowerCase(),
            emailChanged: true
        }
        return await putFetchDB("db/update-user", body, 204, setIsLoading);
    },
    createUser: async (name, userName, email) => {
        const body = {
            name: name,
            userName: userName,
            email: email.toLowerCase(),
            isPaying: false,
            emailChanged: false,
            web: true
        }
        return await postFetchDB('db/create-user', body, 201, false);
    },
    deleteUser: async (email, password) => {
        const body = {
            email: email.toLowerCase()
        }
        signInWithEmailAndPassword(email, password).then(async () => {
            return await postFetchDB('db/delete-user', body, 200);
        })
    },
    getUserCreatedVoices: async (userEmail) => {
        return await axios.get(`${import.meta.env.VITE_SERVER_FETCH_URL}api/get-user-voices?email=${userEmail}`).then(async response => {
            return response.data;
        })
    },
    getJwtToken: async () => {
        return await axios.get(`${import.meta.env.VITE_SERVER_FETCH_URL}api/check-auth`, { withCredentials: true }).then(response => {
            return response.data.authenticated;
        }).catch(() => {
            return false;
        })
    },
    requestUserPasswordReset: async (email,) => {
        const body = {
            email: email
        }
        return await postFetchDB('api/request-user-password-reset', body, 200, false);
    },
    resetUserPassword: async (email, code, newPassword) => {
        const body = {
            email: email,
            newPassword: newPassword,
            code: code
        }
        return await postFetchDB("api/reset-user-password", body, 200, false);
    },
    getService: async (formData,config,endpoint) => {
        console.log(formData,config,endpoint)
        return await postFetchDB(endpoint,formData,200,true,config);
    },
    getServiceFile: async (fileName, ext) => {
        const config = {
            responseType: "blob"
        }
        return await axios.get(`${import.meta.env.VITE_SERVER_FETCH_URL}api/get/${fileName}.${ext}`, config).then(response => {
            return response.data;
        })
    },
    removeUserVoice: async (voiceId) => {
        const body = {
            voiceId:voiceId,
        }

        return await deleteFetchDB("api/user-voice",body,200);
    }

}

async function postFetchDB(endpoint, body, successCode, hasBody,reqConfig) {
    if (endpoint === "db/create-user") {
        var authConfig = {
            ...config,
            withCredentials: true,
        }
    }
    const response = await axios.post(`${import.meta.env.VITE_SERVER_FETCH_URL}${endpoint}`, body, reqConfig || authConfig || config);
    if (response.status === successCode) {
        if (hasBody) {
            return response.data;
        }
        else return true;
    }
    else {
        throw new Error("Request Failed");
    }
}

async function putFetchDB(endpoint, body, successCode, setIsLoading) {
    const response = await axios.put(`${import.meta.env.VITE_SERVER_FETCH_URL}${endpoint}`, body, config);
    if (response.status === successCode) {
        setIsLoading(false);
        return true;
    }
    else {
        throw new Error("Request Failed");
    }
}

async function deleteFetchDB(endpoint,body,successCode) {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_FETCH_URL}${endpoint}`,{params: {...body}},config);
    if (response.status === successCode) {
        return true;
    }
}