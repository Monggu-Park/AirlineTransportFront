import authInstance from "@/apis/base/authInstance";

/**
 * @description 일반 로그인
 * @param data
 */
export const loginSender = async (data) => {
    const response = await authInstance.get("/senders/", {
        params: {
            customId: data.customId,
        }
    });
    return response;
}
/**
 * @description 일반 회원가입
 */
export const postRegisterSender = async (data) => {
    const response = await authInstance.post("/senders/register", data);
    return response.data;
}

/**
 * @description 항공사 회원가입
 */
export const postRegisterAirline = async (data) => {
    const response = await authInstance.post("/airline/employee/register", data);
    return response.data;
}

/**
 * @description 세관 회원가입
 */
export const postRegisterCustoms = async (data) => {
    const response = await authInstance.post("/customs/employee/register", data);
    return response.data;
}

/**
 * @description 1-2. 로그아웃
 */
export const logout = async () => {
    const response = await authInstance.post("/auth/logout");

    return response.data;
}



/**
 * @description 2-4. 회원 탈퇴
 */
export const withdrawal = async () => {
    return await authInstance.post("/auth/withdrawal");
}