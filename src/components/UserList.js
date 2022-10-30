import React, { useEffect, useState } from "react";
import { request } from "../network-client";
import { useNavigate } from "react-router-dom";
import { getJwtTokenCookie } from "../utils/utils";

export default function UserList() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const token = getJwtTokenCookie();
        if (!token) {
            navigate("/login");
            return;
        }

        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        request("get", "/user/get").then(resp => {
            setUsers(resp.data);
        });
    }

    const renderUsers = () => {
        return users.map(user => {
            return <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? "Да" : "No"}</td>
                <td>
                    <button className="btn btn-link" onClick={() => { alert("Епа не работи тва все още") }}>Редактирай</button>
                </td>
            </tr>;
        });
    }

    return <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Име</th>
                    <th scope="col">Email</th>
                    <th scope="col">Админ</th>
                    <th scope="col">Действие</th>
                </tr>
            </thead>
            <tbody>
                {renderUsers()}
            </tbody>
        </table>
    </>;
}