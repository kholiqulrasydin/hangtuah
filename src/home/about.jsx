import React from "react";
import { LayoutScaffold } from "./layouts/layout";

function Content() {
  return (
    <section
      className="Content about"
      id="about"
      style={{ paddingTop: "150px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="assets/img/HANGTUAH 7.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3>PROFIL SEKOLAH</h3>
            <p>
              Alamat : Jl. Golf 1 , Kel. Gunungsari, Kec. Dukuh Pakis, Kota{" "}
              <br />
              Surabaya Email : hangtuahtujuhyes@yahoo.com sdhttujuh@gmail.com
              <br />
              Telepon : 031-5664789
            </p>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="600"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Sd%20Hangtuah%207&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <a href="#">map</a>
                <br />
                <style>
                  {
                    ".mapouter{position:relative;text-align:right;height:400px;width:600px;}"
                  }
                </style>
                <a href="https://www.embedgooglemap.net">
                  google maps embed api
                </a>
                <style>
                  {
                    ".gmap_canvas {overflow:hidden;background:none!important;height:400px;width:600px;}"
                  }
                </style>
              </div>
            </div>
            {/* <ul>
                        <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      </ul>
                      <div className="row icon-boxes">
                        <div className="col-md-6">
                          <i className="bx bx-receipt"></i>
                          <h4>Corporis voluptates sit</h4>
                          <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                        <div className="col-md-6 mt-4 mt-md-0">
                          <i className="bx bx-cube-alt"></i>
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
      <LayoutScaffold>
        <Content />
      </LayoutScaffold>
    </div>
  );
}

export default About;
