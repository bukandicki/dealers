import clientAPI from "./clientApi";

export const getProvinces = async () => {
    const { data } = await clientAPI.get("/get-provinces");

    return data;
};
