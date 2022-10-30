import axios from "axios";

const BASE_URL = "https://financeapp-be.vercel.app";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkZDI3MjEzLThhOGUtNDg2MC1hMDFkLTEwZDFjNjdmMThkMyIsImVtYWlsIjoiZXhhbXBsZTJAbWFpbC5jb20iLCJuYW1lIjoiUGVzaG8gU2h2ZXBzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzEzODYxOCwiZXhwIjoxNjY3MTQyMjE4fQ.wtrCS8JowJfttQUfhWGy-jKcIkzx4eMOkSRcibyywOM";

export const request = (method, resource, params, requestBody) => {
    return axios.request( 
        {
            method,
            url: resource,
            params: params,
            data: requestBody,
            baseURL: BASE_URL,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
}
