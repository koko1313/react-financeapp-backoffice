import Cookies from "universal-cookie";

export const getJwtTokenCookie = () => {
    const cookies = new Cookies();
    return cookies.get("jwtToken");
}

export const removeJwtTokenCookie = () => {
    const cookies = new Cookies();
    cookies.remove("jwtToken");
}