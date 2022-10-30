import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../network-client";
import { getJwtTokenCookie } from "../utils/utils";

export default function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    useEffect(() => {
        const jwtToken = getJwtTokenCookie();
        
        if (jwtToken) {
            navigate("/");
        }
    }, []);

    const registerUser = () => {
        if (password === rePassword) {
            request(
                "post",
                "/user/register", 
                undefined,
                {
                    email: email,
                    name: name,
                    password: password,
                    isAdmin: true
                }
            ).then(() => {
                navigate("/login");
            });
        }
    }

    return <>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
            <label className="form-label">Име</label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
            <label className="form-label">Парола</label>
            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
            <label className="form-label">Повтори парола</label>
            <input type="password" className="form-control" onChange={(e) => setRePassword(e.target.value)} />
        </div>
        <div className="text-end">
            <button type="button" className="btn btn-success" onClick={registerUser}>Регистрация</button>
        </div>
    </>;
}