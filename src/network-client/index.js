import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = "https://financeapp-be.vercel.app";

export const request = (method, resource, params, requestBody) => {
    const cookies = new Cookies();
    const token = cookies.get("jwtToken");

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
