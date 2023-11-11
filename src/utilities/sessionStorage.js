
export const SessionStorage = {
    storeFileData: (key, file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result;
            sessionStorage.setItem([key], base64String);
        };
        reader.readAsDataURL(file);
    },
    getFileData: (key) => {
        const base64String = sessionStorage.getItem(key);
        if (base64String) {
            const [metadata, base64] = base64String.split(',');
            const byteCharacters = atob(base64);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'application/octet-stream' });
            return blob;
        }
        return false;
    },
    storeData: (key,value) => {
        window.sessionStorage.setItem([key],JSON.stringify(value));
    },
    deleteData: (key) => {
        window.sessionStorage.removeItem(`${key}`);
    },
    getData: (key) => {
        return JSON.parse(window.sessionStorage.getItem(`${key}`));
    }
}
