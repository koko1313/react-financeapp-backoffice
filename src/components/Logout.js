import { useEffect } from "react";
import { logout } from "../utils/utils";

export default function Register() {

    useEffect(() => {
        logout();
    }, []);
}