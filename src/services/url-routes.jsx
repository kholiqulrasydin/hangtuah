import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../App.css";
import About from "../home/about";
import Ekstra from "../home/ekstrakurikuler";
import Galeri from "../home/galeri";
import Home from "../home/home.jsx";
import Prestasi from "../home/prestasi";
import GuruDanStaff from "../home/sdm";

function UrlRoutes() {
  return (
    <div className="UrlRoutes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sdm" element={<GuruDanStaff />} />
        <Route path="/ekstrakurikuler" element={<Ekstra />} />
        <Route path="/prestasi" element={<Prestasi />} />
        <Route path="/galeri" element={<Galeri />} />
      </Routes>
    </div>
  );
}

export default UrlRoutes;
