import { useEffect } from "react";
import { removeJwtTokenCookie } from "../../utils/utils";

export default function Register() {

    useEffect(() => {
        removeJwtTokenCookie();
        window.location.href = "/"; // use location.href instead of useNavigate to refresh the page after login (we need this in order to refresh the navbar as well)
    }, []);
}