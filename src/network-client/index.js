import axios from "axios";

const BASE_URL = "https://financeapp-be.vercel.app";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkZDI3MjEzLThhOGUtNDg2MC1hMDFkLTEwZDFjNjdmMThkMyIsImVtYWlsIjoiZXhhbXBsZTJAbWFpbC5jb20iLCJuYW1lIjoiUGVzaG8gU2h2ZXBzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzEzNDQ0MywiZXhwIjoxNjY3MTM4MDQzfQ.VdarQovNZT6QJ1jV8XLi2peLLl0XAI_WnM-21ZyKZ_s";

const config = {
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${token}`
    }
}

export const get = (resource) => {
    return axios.get(resource, config);
}