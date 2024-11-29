import publicInstance from "@/apis/base/publicInstance.js";

export const getMyAwb = async () => {
    const storedData = localStorage.getItem("sender");
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        const customId = parsedData.sender?.customId;

        return await publicInstance.get("/awb/custom", {
            params: {
                customId: customId,
            }
        });
    } else {
        return console.log("No such stored data");
    }
}

export const createAWB = async (data) => {
    const response = await publicInstance.post("/awb/create", data);
    return response.data;
}