import React from "react";

export default function UserList() {
    return <>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Име</th>
                    <th scope="col">Email</th>
                    <th scope="col">Админ</th>
                    <th scope="col">Действие</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Димчо Господинов</td>
                    <td>dimcho@mail.com</td>
                    <td>Да</td>
                    <td>
                        <a href="/">Редактирай</a>
                    </td>
                </tr>
                <tr>
                    <td>Калоян Величков</td>
                    <td>koko@mail.com</td>
                    <td>Да</td>
                    <td>
                        <a href="/">Редактирай</a>
                    </td>
                </tr>
                <tr>
                    <td>Иван Иванов</td>
                    <td>vanko@mail.com</td>
                    <td>Да</td>
                    <td>
                        <a href="/">Редактирай</a>
                    </td>
                </tr>
                <tr>
                    <td>Пешо Швепса</td>
                    <td>pesho@mail.com</td>
                    <td>Не</td>
                    <td>
                        <a href="/">Редактирай</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </>;
}