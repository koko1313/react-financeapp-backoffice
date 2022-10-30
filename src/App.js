import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return <>
    <BrowserRouter>
      <Navbar />
    
      <Routes>
        <Route path="/" element={ <h1>Елемент 1</h1> } />
        <Route path="/login" element={ <h1>Елемент 2</h1> } />
        <Route path="/register" element={ <h1>Елемент 3</h1> } />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
