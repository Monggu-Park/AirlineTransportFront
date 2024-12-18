import publicInstance from "@/apis/base/publicInstance.js";

export const getAllAwb = async () => {
    const response = await publicInstance.get("/awb/");
    return response.data;
}

export const getAllAirline = async () => {
    const response = await publicInstance.get("/airline/");
    return response.data;
}

export const getPlane = async (data) => {
    const response = await publicInstance.get("/airline/planes", {
        params: {
            airlineId: data.airline.id,
        }
    });
    return response.data;
}

export const getAllAirport = async () => {
    const response = await publicInstance.get("/airline/airports");
    return response.data;
}

export const registerSchedule = async (data) => {
    const { awbId, ...bodyData } = data;
    const response = await publicInstance.post(`/schedule/register?awbId=${awbId}`, bodyData);
    return response.data;
}

export const getWorkedSchedule = async (data) => {
    const response = await publicInstance.get("/schedule/employee-worked", {
        params: {
            employeeId: data.employeeId,
        }
    });
    return response.data;
}