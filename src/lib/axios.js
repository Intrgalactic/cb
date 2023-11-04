import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";

const config = {
    headers: {
        'Content-Type': "application/x-www-form-urlencoded"
    }
}

export const AxiosFacade = {
    getUser: async (email,getJwtToken) => {
        var user;
        user = await axios.post(`${process.env.EXPO_PUBLIC_SERVICES_FETCH_URL}get-user`,{
            email: email.toLowerCase(),
            getToken:getJwtToken,
            web:true
        },config).then(function (response) {
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
            username:newUsername,
            email:userEmail
        }
        return await putFetchDB("update-user",body,204,setIsLoading);
    },
    changeEmail: async (userEmail,newEmail,setIsLoading) => {
        const body = {
            email:userEmail,
            newEmail:newEmail.toLowerCase(),
            emailChanged: true
        }
        return await putFetchDB("update-user",body,204,setIsLoading);
    },
    createUser: async (name, userName, email) => {
        const body = {
            name: name,
            userName: userName,
            email: email.toLowerCase(),
            isPaying: true,
            isNew: true,
            emailChanged: false,
            web:true
        }
        return await postFetchDB('create-user',body,201,true);
    },
    deleteUser: async (email, password) => {
        const body = {
            email: email.toLowerCase()
        }
        signInWithEmailAndPassword(email, password).then(async () => {
            return await postFetchDB('delete-user',body,200);
        })
    },
    getUserCreatedVoices: async (userEmail) => {
        return await axios.get(`${import.meta.env.VITE_SERVER_FETCH_URL}get-user-voices?email=${userEmail}`).then(async response => {
            return response.data;
        })
    },
    getVideoSubtitles: async (formData) => {
        return  await postFetchDB('api/subs-to-video',formData,200,true);
    },
    getJwtToken: async() => {
        return await axios.get(`${import.meta.env.VITE_SERVER_FETCH_URL}api/check-auth`,{withCredentials:true}).then(response => {
            return response.data.authenticated;
        }).catch(() => {
            return false;
        })
    }

}

async function postFetchDB(endpoint,body,successCode,hasBody) {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_FETCH_URL}${endpoint}`, body, config);
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

async function putFetchDB(endpoint,body,successCode,setIsLoading) {
    const response = await axios.put(`${import.meta.env.VITE_SERVER_FETCH_URL}${endpoint}`, body, config);
    if (response.status === successCode) {
        setIsLoading(false);
        return true;
    }
    else {
        throw new Error("Request Failed");
    }
}