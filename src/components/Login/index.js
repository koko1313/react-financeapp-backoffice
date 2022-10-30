import React, { useState } from "react";
import Cookies from "universal-cookie";
import { request } from "../../network-client";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            const cookies = new Cookies();
            cookies.set("jwtToken", resp.data.jwtToken);
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