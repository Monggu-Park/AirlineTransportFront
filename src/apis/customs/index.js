import publicInstance from "@/apis/base/publicInstance.js";

export const getAllCargo = async () => {
    const response = await publicInstance.get("/cargo/");
    return response.data;
}

export const changeStatus = async (data) => {
    const response = await publicInstance.post(
        `/cargo/changeStatus?cargoId=${data.cargoId}&cargoStatus=${data.cargoStatus}`,
        {}
    );
    return response.data;
}

export const getAllCustoms = async () => {
    const response = await publicInstance.get("/customs/");
    return response.data;
}