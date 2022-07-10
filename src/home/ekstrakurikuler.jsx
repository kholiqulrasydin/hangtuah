import React from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

function Content() {
  return (
    <section
      className="Content"
      id="ekstra"
      class="ekstra"
      style={{ paddingTop: "150px" }}
    >
      <div className="container">
        <h1 className="text-center mb-4">EKSTRAKURIKULER</h1>

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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
      <Header />
      <main id="main">
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default Ekstra;
