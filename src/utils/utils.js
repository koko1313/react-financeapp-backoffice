import Cookies from "universal-cookie";

export const getJwtTokenCookie = () => {
    const cookies = new Cookies();
    return cookies.get("jwtToken");
}

export const removeJwtTokenCookie = () => {
    const cookies = new Cookies();
    cookies.remove("jwtToken");
}

export const logout = () => {
    removeJwtTokenCookie();
    window.location.href = "/"; // use location.href instead of useNavigate to refresh the page after login (we need this in order to refresh the navbar as well)
}