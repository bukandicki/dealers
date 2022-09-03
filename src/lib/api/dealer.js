import clientAPI from "./clientApi";

export const getDealers = async ({ latlong, keyword, page, limit }) => {
    const { data } = await clientAPI.get("/search-dealers", {
        params: { latlong, keyword, page, limit }
    });

    return data;
};
