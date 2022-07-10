import React from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

function Content() {
  return (
    <section
      className="Content"
      id="about"
      class="about"
      style={{ paddingTop: "150px" }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img src="assets/img/HANGTUAH 7.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3>PROFIL SEKOLAH</h3>
            <p>
              Alamat : Jl. Golf 1 , Kel. Gunungsari, Kec. Dukuh Pakis, Kota{" "}
              <br />
              Surabaya Email : hangtuahtujuhyes@yahoo.com sdhttujuh@gmail.com
              <br />
              Telepon : 031-5664789
            </p>
            {/* <ul>
                        <li><i class="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><i class="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      </ul>
                      <div class="row icon-boxes">
                        <div class="col-md-6">
                          <i class="bx bx-receipt"></i>
                          <h4>Corporis voluptates sit</h4>
                          <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                        <div class="col-md-6 mt-4 mt-md-0">
                          <i class="bx bx-cube-alt"></i>
                          <h4>Ullamco laboris nisi</h4>
                          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                      </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <div className="About">
      <Header />
      <main id="main">
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default About;
