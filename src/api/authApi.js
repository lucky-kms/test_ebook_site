import axios from 'axios';

const authClient = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type" : "application/json",
    }
});

export async function loginApi({ username, password }) {
    const response = await authClient.post("/auth/login", {
        username,
        password,
        expiresInMins: 30,
    });

    return response.data;
}