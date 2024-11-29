import axios from "axios";

export const authInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_URL,
    withCredentials: true,
    responseType: "json",
    headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    },
});

export default authInstance;
