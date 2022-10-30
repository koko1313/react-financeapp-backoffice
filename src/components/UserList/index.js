import React, { useEffect, useState } from "react";
import { get } from "../../network-client";

export default function UserList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(users.length === 0) {
            fetchUsers();
        }
    }, []);

    const fetchUsers = async () => {
        get("/user/get").then(resp => {
            setUsers(resp.data);
        });
    }

    const renderUsers = () => {
        return users.map(user => {
            return <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? "Да" : "Не"}</td>
                <td>
                    <a href="/">Редактирай</a>
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