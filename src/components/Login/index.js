import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { request } from "../../network-client";
import { getJwtTokenCookie } from "../../utils/utils";

export default function Login() {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const jwtToken = getJwtTokenCookie();
        
        if (jwtToken) {
            navigate("/");
        }
    }, []);

    const loginUser = () => {
        request(
            "post",
            "user/login",
            undefined,
            {
                email: email,
                password: password
            }
        ).then((resp) => {
            cookies.set("jwtToken", resp.data.jwtToken);
            window.location.href ="/users"; // use location.href instead of useNavigate to refresh the page after login (we need this in order to refresh the navbar as well)
        });
    }

    return <>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
            <label className="form-label">Парола</label>
            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="text-end">
            <button type="button" className="btn btn-success" onClick={loginUser}>Вход</button>
        </div>
    </>;
}