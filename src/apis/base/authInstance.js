import axios from "axios";
import Cookies from "js-cookie";

const accessToken = Cookies.get("access_token");
export const authInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_URL,
    withCredentials: true,
    responseType: "json",
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
    },
});

/*
Date: 2024.11.29
Author: 이창준
아래 interceptors 코드는 다른 프로젝트에서 가져온 예시 코드라서, 필요 없으면 삭제해도 됩니다.
 */
authInstance.interceptors.request.use(
    (config) => {
        const accessToken = Cookies.get("access_token");

        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
            config.withCredentials = true;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

authInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401 && error.response.data.error.code === "40101") {
            const originalRequest = error.config;
            if (!originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    // 토큰 재발급 요청
                    const response = await axios.post(
                        `${import.meta.env.VITE_APP_SERVER_URL}/auth/reissue/token`,
                        {},
                        {
                            withCredentials: true,
                        }
                    );

                    if (response.status === 200) {
                        const accessToken = Cookies.get("access_token");
                        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
                        return authInstance(originalRequest);
                    }
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }
        }

        return Promise.reject(error);
    }
);

export default authInstance;
