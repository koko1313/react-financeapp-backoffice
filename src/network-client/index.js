import axios from "axios";
import { getJwtTokenCookie, removeJwtTokenCookie } from "../utils/utils";

const BASE_URL = "https://financeapp-be.vercel.app";

export const request = (method, resource, params, requestBody) => {
    const jwtToken = getJwtTokenCookie();

    const sentRequest = axios.request( 
        {
            method,
            url: resource,
            params: params,
            data: requestBody,
            baseURL: BASE_URL,
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }
    ).catch(ex => {
        const resp = ex.response;
        if (resp.status === 401 || resp.status === 403) {
            // remove jwtToken from the cookies and redirect to login
            removeJwtTokenCookie();
            window.location.href = "/login";
        }
    });

    return sentRequest;
}
