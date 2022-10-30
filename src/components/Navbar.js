import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getJwtTokenCookie } from "../utils/utils";

export default function Navbar () {
    const [jwtToken, setJwtToken] = useState(undefined);

    useEffect(() => {
        const jwtToken = getJwtTokenCookie();
        setJwtToken(jwtToken);
    }, []);
    
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Finance APP</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Начало</NavLink>
                        </li>
                        
                        {jwtToken && 
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">Потребители</NavLink>
                        </li>
                        }
                        
                        {!jwtToken && 
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Вход</NavLink>
                        </li> 
                        }

                        {!jwtToken && 
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Регистрация</NavLink>
                        </li>
                        }

                        {jwtToken && 
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout">Изход</NavLink>
                        </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </>;
}