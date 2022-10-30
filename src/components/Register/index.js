import React from "react";

export default function Register() {
    return <>
        <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input type="email" className="form-control" id="emailInput" />
        </div>
        <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Име</label>
            <input type="email" className="form-control" id="nameInput" />
        </div>
        <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Парола</label>
            <input type="email" className="form-control" id="passwordInput" />
        </div>
        <div className="mb-3">
            <label htmlFor="rePasswordInput" className="form-label">Повтори парола</label>
            <input type="email" className="form-control" id="rePasswordInput" />
        </div>
        <div className="text-end">
            <button type="button" class="btn btn-success">Вход</button>
        </div>
    </>;
}