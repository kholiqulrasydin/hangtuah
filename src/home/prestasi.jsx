import React from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { LayoutScaffold } from "./layouts/layout";

function Content() {
  return (
    <section
      className="Content services section-bg"
      id="prestasi"
      class="prestasi services section-bg"
      style={{ paddingTop: "150px" }}
    >
      <div className="container">
        <div class="section-title">
          <h2>Prestasi</h2>
          <p>Prestasi dari SD Hangtuah 7</p>
        </div>
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
      <LayoutScaffold>
        <Content/>
      </LayoutScaffold>
    </div>
  );
}

export default Prestasi;
