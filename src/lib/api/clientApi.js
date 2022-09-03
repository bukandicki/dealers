import axios from "axios";

const clientAPI = axios.create({
    baseURL: "https://mitsubishi.trinix.id/api/frontend"
});

export default clientAPI;
