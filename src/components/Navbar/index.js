import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar () {
    return <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <NavLink className="navbar-brand" to="/">Finance APP</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link active" to="/">Начало</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/login">Логин</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/register">Регистрация</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>;
}