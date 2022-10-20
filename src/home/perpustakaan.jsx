import React from "react";
import { urlPerpustakaan } from "../services/api";
import BukuGrid from "./components/bukugrid";
import { LayoutScaffold } from "./layouts/layout";

function Content() {
  const data = [
    {
      imgUrl: "/assets/img/buku/buku.jpg",
      name: "Buku Bahasa Inggris Kelas V",
      penerbit: "Joko",
    },
    {
      imgUrl: "/assets/img/buku/buku.jpg",
      name: "Buku Bahasa Inggris Kelas VI",
      penerbit: "Joko",
    },
    {
      imgUrl: "/assets/img/buku/buku.jpg",
      name: "Buku Bahasa Inggris Kelas III",
      penerbit: "Joko",
    },
    {
      imgUrl: "/assets/img/buku/buku.jpg",
      name: "Buku Bahasa Inggris Kelas II",
      penerbit: "Joko",
    },
    {
      imgUrl: "/assets/img/buku/buku.jpg",
      name: "Buku Bahasa Inggris Kelas I",
      penerbit: "Joko",
    },
    {
      imgUrl: "/assets/img/buku/buku.jpg",
      name: "Buku Bahasa Penjas Kelas V",
      penerbit: "Joko",
    },
  ];

  return <BukuGrid data={data} />;
}

function Perpustakaan() {
  return (
    <div className="Perpustakaan">
      <LayoutScaffold
        homeHeader={
          <section
            id="hero"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div
              className="container text-center text-md-left"
              data-aos="fade-up"
            >
              <h1>
                Selamat Datang di <span>Perpustakaan</span>
              </h1>
              <h2>SD HANG TUAH 7 SURABAYA</h2>
            </div>
          </section>
        }
      >
        {/* <Content /> */}
        <div className="container mt-4">
          <div className="row text-center">
            <a href={urlPerpustakaan} className="btn btn-primary">
              Klik Untuk Meminjam Buku
            </a>
          </div>
        </div>
      </LayoutScaffold>
    </div>
  );
}

export default Perpustakaan;
