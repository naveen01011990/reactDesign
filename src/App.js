import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
