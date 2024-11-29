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
    const response = await publicInstance.get("/airline/plane", {
        params: {
            airlineId: data.airlineId,
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
    const response = await publicInstance.post("/schedule/register", bodyData, {
        params: {awbId: awbId}
    });
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