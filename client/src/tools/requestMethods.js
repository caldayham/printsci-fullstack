import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTU4MTExN2VlZThhMDUyMDhjMGViOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTc4MzE1NywiZXhwIjoxNjU2MDQyMzU3fQ.WRoGFIpOikkRcU3yHlKP-8OM8HT3IV5X8w_Aocatvfw"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});