import axios from "axios";

const BASE_URL = 'http://localhost:5000/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTY1ZDhhNDI3ZDkxNzQ0ZDA1YWFlYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjYwNTU5NCwiZXhwIjoxNjY3Mjk2Nzk0fQ.AjZzdOt3hSILZ8r1Pqov8QDRk-6duaNA7s8CDXrVeUI';

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`},    
});