import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../App.css";
import About from "../home/about";
import Berita from "../home/berita";
import Peminjaman from "../home/components/form-peminjaman";
import Ekstra from "../home/ekstrakurikuler";
import Galeri from "../home/galeri";
import Home from "../home/home.jsx";
import MengapaKami from "../home/mengapakami";
import Perpustakaan from "../home/perpustakaan";
import Prestasi from "../home/prestasi";
import GuruDanStaff from "../home/sdm";
import Sejarah from "../home/sejarah";
import VisiMisi from "../home/visi-misi";

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
        <Route path="/visi-dan-misi" element={<VisiMisi />} />
        <Route path="/mengapa-kami" element={<MengapaKami />} />
        <Route path="/perpustakaan" element={<Perpustakaan />} />
        <Route path="/pinjam" element={<Peminjaman />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/sejarah" element={<Sejarah />} />
      </Routes>
    </div>
  );
}

export default UrlRoutes;
