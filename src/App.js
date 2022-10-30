import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import UserList from "./components/UserList";
import Logout from "./components/Logout";

export default function App() {
  return <>
    <BrowserRouter>
      <Navbar />
    
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/users" element={ <UserList /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/logout" element={ <Logout /> } />
        </Routes>
      </div>
    </BrowserRouter>
  </>;
}
