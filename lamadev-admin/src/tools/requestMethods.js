import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
var TOKEN = ""
TOKEN = localStorage.getItem("persist:root") ?
        JSON.parse(localStorage.getItem("persist:root")).user ?
            JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser ?
                JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
                    : ""
                : ""
            : null;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});