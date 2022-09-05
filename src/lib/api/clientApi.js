import axios from "axios";

const clientAPI = axios.create({
    baseURL: "https://mitsubishi-50.sudahdistaging.in/api/frontend"
});

export default clientAPI;
