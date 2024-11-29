import authInstance from "@/apis/base/authInstance";

/**
 * @description 일반사용자 로그인
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
 * @description 일반사용자 회원가입
 */
export const postRegisterSender = async (data) => {
    const response = await authInstance.post("/senders/register", data);
    return response.data;
}
/**
 * @description 세관직원 로그인
 */
export const loginCustomsEmployee = async (data) => {
    const response = await authInstance.get("/customs/employee/login", {
        params: {
            customId: data.customId,
        }
    });
    return response.data;
}
/**
 * @description 세관직원 회원가입
 */
export const registerCustomsEmployee = async (data) => {
    const response = await authInstance.post("/customs/employee/register", data);
    return response.data;
}
/**
 * @description 항공사직원 로그인
 */
export const loginAirlineEmployee = async (data) => {
    const response = await authInstance.get("/airline/employee/login", {
        params: {
            customId: data.customId,
        }
    });
    return response.data;
}
/**
 * @description 항공사직원 회원가입
 */
export const registerAirlineEmployee = async (data) => {
    const response = await authInstance.post("/airline/employee/register", data);
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