import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../App.css";
import Home from "../home/home.jsx";

function UrlRoutes() {
    return (
        <div className="UrlRoutes">
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="about" element={<About />} /> */}
            </Routes>
        </div>
    );
}

export default UrlRoutes;