import axios from 'axios';

// auth가 없는 상태에서 진행하는 API instance
export const publicInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_URL,
    withCredentials: true,
    responseType: "json",
    headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
});

export default publicInstance;
