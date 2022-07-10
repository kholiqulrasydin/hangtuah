import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../App.css";
import About from "../home/about";
import Home from "../home/home.jsx";
import GuruDanStaff from "../home/sdm";

function UrlRoutes() {
    return (
        <div className="UrlRoutes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sdm" element={<GuruDanStaff />} />
            </Routes>
        </div>
    );
}

export default UrlRoutes;