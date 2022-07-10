import React from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

function Content() {
  return (
    <section
      className="Content services section-bg"
      id="prestasi"
      class="prestasi"
      style={{ paddingTop: "150px" }}
    >
      <div className="container">
        <h1 className="mb-4">Prestasi Sekolah</h1>
        <div class="row">
          <div class="col-md-6">
            <div class="icon-box" style={{ height: "10rem" }}>
              <i class="bi bi-trophy-fill"></i>
              <h4>
                <a href="#">Juara I Futsal Surabaya</a>
              </h4>
              <p>Prestasi ini didapatkan oleh tim futsal SD Hangtuah 7</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-lg-0">
            <div class="icon-box" style={{ height: "10rem" }}>
              <i class="bi bi-trophy-fill"></i>
              <h4>
                <a href="#">Juara III Renang Provinsi Jawa Timur</a>
              </h4>
              <p>Prestasi ini didapatkan oleh ananda Ahmad Ricky</p>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="icon-box" style={{ height: "10rem" }}>
              <i class="bi bi-trophy-fill"></i>
              <h4>
                <a href="#">Juara II Lomba Pramuka Tingkat Kota</a>
              </h4>
              <p>
                Prestasi ini didapatkan oleh perwakilan Tim pramuka SD Hangtuah
                7
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="icon-box" style={{ height: "10rem" }}>
              <i class="bi bi-trophy-fill"></i>
              <h4>
                <a href="#">Juara II Futsal Nasional</a>
              </h4>
              <p>
                Tim Futsal SD Hangtuah 7 mendapatkan juara II Futsal Tingkat
                nasional yang diselenggarakan di Surabaya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Prestasi() {
  return (
    <div className="Prestasi">
      <Header />
      <main id="main">
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default Prestasi;
