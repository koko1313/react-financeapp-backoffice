import React, { useEffect, useState } from "react";
import { request } from "../network-client";
import { useNavigate } from "react-router-dom";
import { getJwtTokenCookie } from "../utils/utils";

export default function UserList() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [version, setVersion] = useState(1); // we will use this to force update the component

    useEffect(() => {
        const token = getJwtTokenCookie();
        if (!token) {
            navigate("/login");
            return;
        }

        fetchUsers();
    }, [version]);

    const fetchUsers = async () => {
        request("get", "/user/get").then(resp => {
            setUsers(resp.data);
        });
    }

    const deleteUser = async (id, name) => {
        const confirm = window.confirm(`Сигурен ли сте, че искате да изтриете ${name}?`);

        if (confirm) {
            request("delete", `user/delete/${id}`).then(() => {
                setVersion(version => version + 1);
            });
        }
    }

    const renderUsers = () => {
        return users.map(user => {
            return <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? "Да" : "Не"}</td>
                <td>
                    <button className="btn btn-link" onClick={() => { deleteUser(user.id, user.name) }}>Изтрий</button>
                </td>
            </tr>;
        });
    }

    return <>
    <div className="table-responsive">
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
    </div>
    </>;
}