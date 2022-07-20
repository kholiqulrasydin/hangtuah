import React from "react";
import { LayoutScaffold } from "./layouts/layout";

function Content() {
  return (
    <section
      className="Content"
      id="ekstra"
      class="ekstra"
      style={{ paddingTop: "150px" }}
    >
      <div className="container">
        <div class="section-title">
          <h2>Ekstrakurikuler</h2>
          <p>Ekstrakurikuler dari SD Hangtuah 7</p>
        </div>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div class="card" style={{ width: "16rem", height: "20rem" }}>
              <img
                src="assets/img/pramuka.png"
                class="card-img-top"
                alt="..."
                style={{ height: "8rem" }}
              ></img>
              <div class="card-body">
                <h5 class="card-title">Pramuka</h5>
                <p class="card-text description">
                  Pramuka adalah sebuah organisasi yang merupakan wadah proses
                  pendidikan kepramukaan yang dilaksanakan di Indonesia.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div class="card" style={{ width: "16rem", height: "20rem" }}>
              <img
                src="assets/img/englishtalks.jpg"
                class="card-img-top"
                alt="..."
                style={{ height: "8rem" }}
              ></img>
              <div class="card-body">
                <h5 class="card-title">English Conversation</h5>
                <p class="card-text description">
                  English Conversation merupakan ekstrakurikuler di SD Hangtuah
                  7 yang bertujuan untuk melatih siswanya agar bisa berbahasa
                  inggris dan bisa melakukan percakapan menggunakan bahasa
                  inggris
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div class="card" style={{ width: "16rem", height: "20rem" }}>
              <img
                src="assets/img/drumband.jpg"
                class="card-img-top"
                alt="..."
                style={{ height: "8rem" }}
              ></img>
              <div class="card-body">
                <h5 class="card-title">Drumband</h5>
                <p class="card-text description">
                  Drumband merupakan ekstrakurikuler yang bertujuan agar siswa
                  siswi SD Hangtuah 7 ini bisa menyalurkan hobi musik drumband
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div class="card" style={{ width: "16rem", height: "20rem" }}>
              <img
                src="assets/img/senitari.jpeg"
                class="card-img-top"
                alt="..."
                style={{ height: "8rem" }}
              ></img>
              <div class="card-body">
                <h5 class="card-title">Seni Tari</h5>
                <p class="card-text description">
                  Seni Tari merupakan ekstrakurikuler untuk mewadahi siswa siswi
                  yang berminat di seni tari
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div class="card" style={{ width: "16rem", height: "20rem" }}>
              <img
                src="assets/img/karawitan.jpg"
                class="card-img-top"
                alt="..."
                style={{ height: "8rem" }}
              ></img>
              <div class="card-body">
                <h5 class="card-title">Karawitan</h5>
                <p class="card-text description">
                  Karawitan merupakan ekstrakurikuler yang bertujuan agar siswa
                  siswi di SD Hangtuah 7 ini dapat mewarisi dan melestarikan
                  budaya jawa
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div class="card" style={{ width: "16rem", height: "20rem" }}>
              <img
                src="assets/img/religi.jpg"
                class="card-img-top"
                alt="..."
                style={{ height: "8rem" }}
              ></img>
              <div class="card-body">
                <h5 class="card-title">Religi</h5>
                <p class="card-text description">
                  Ekstrakurikuler Religi ini bertujuan sebagai wadah untuk siswa
                  yang ingin berkegiatan di bidang keagamaan
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div class="card" style={{ width: "16rem", height: "20rem" }}>
              <img
                src="assets/img/renang.jpeg"
                class="card-img-top"
                alt="..."
                style={{ height: "8rem" }}
              ></img>
              <div class="card-body">
                <h5 class="card-title">Renang</h5>
                <p class="card-text description">
                  Renang merupakan ekstrakurikuler yang bertujuan agar siswa
                  siswi yang mempunyai bakat dibidang renang ini bisa
                  menyalurkan bakatnya
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div class="card" style={{ width: "16rem", height: "20rem" }}>
              <img
                src="assets/img/futsal.jpeg"
                class="card-img-top"
                alt="..."
                style={{ height: "8rem" }}
              ></img>
              <div class="card-body">
                <h5 class="card-title">Futsal</h5>
                <p class="card-text description">
                  Futsal sendiri merupakan ekstrakurikuler yang umum,
                  ekstrakurikuler ini bertujuan agar siswa siswi SD Hangtuah 7
                  yang memiliki bakat dibidang olahraga futsal bisa tersalurkan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ekstra() {
  return (
    <div className="Ekstrakurikuler">
      <LayoutScaffold>
          <Content/>
      </LayoutScaffold>
    </div>
  );
}

export default Ekstra;
