import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import UserList from "./components/UserList";

export default function App() {
  return <>
    <BrowserRouter>
      <Navbar />
    
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={ <UserList /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>
      </div>
    </BrowserRouter>
  </>;
}
