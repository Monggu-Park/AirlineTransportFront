import authInstance from "@/apis/base/authInstance";
import publicInstance from "@/apis/base/publicInstance";

/**
 * @description 1-1. 일반 로그인
 * @param data
 */
export const postFormLogin = async (data) => {
    const formData = new FormData();

    formData.append("serial_id", data.email);
    formData.append("password", data.password);

    const response = await authInstance.post("/auth/login", formData, {
        headers: {
            "Content-type": "multipart/form-data",
        }
    });

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
 * @description 2-1. 이메일 검증하기 (Authentication Code) 발급
 */
export const validateEmail = async (email) => {
    const response = await publicInstance.post("/auth/validations/email", {
        email: email,
        is_duplicate_check: true,
    });

    return response.data;
}

/**
 * @description 2-2. 인증코드 검증하기 (Temporary Token) 발급
 */
export const validateAuthCode = async (email, authenticationCode) => {
    const response = await publicInstance.post("/auth/validations/authentication-code", {
        email: email,
        authentication_code: authenticationCode
    });

    return response.data;
}

/**
 * @description 2-3. 일반 회원가입
 */
export const postRegisterSender = async (data) => {
    const response = await authInstance.post("/senders/register", data);
    return response.data;
}

/**
 * @description 2-4. 회원 탈퇴
 */
export const withdrawal = async () => {
    return await authInstance.post("/auth/withdrawal");
}