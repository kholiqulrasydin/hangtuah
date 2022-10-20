import React from "react";
import { urlFb, urlInstagram, urlYoutube } from "../../services/api";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer" id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>SD Hang Tuah 7 Surabaya</h3>
                <p>
                  Jl. Golf 1 Surabaya, <br />
                  Gn. Sari, Kec. Dukuhpakis,
                  <br />
                  Kota SBY, Jawa Timur 60224 <br />
                  <br />
                  <strong>Phone:</strong> (031) 5664789
                  <br />
                  <strong>Email:</strong> sdhttujuh@gmail.com
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Beranda</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/perpustakaan">Perpustakaan</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/berita">Berita</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Informasi</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/ppdb">PPDB</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/ekstrakurikuler">Ekstrakurikuler</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/sdm">SDM</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/prestasi">Prestasi Sekolah</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/galeri">Galeri</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>SD Hang Tuah 7 Surabaya</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="/">Vokasi UNESA</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href={urlFb} className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href={urlInstagram} className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href={urlYoutube} className="youtube">
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <script src="assets/vendor/purecounter/purecounter.js" defer></script>
      <script
        src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        defer
      ></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js" defer></script>
      <script
        src="assets/vendor/isotope-layout/isotope.pkgd.min.js"
        defer
      ></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js" defer></script>
      <script
        src="assets/vendor/waypoints/noframework.waypoints.js"
        defer
      ></script>
      <script src="assets/vendor/php-email-form/validate.js" defer></script>

      <script src="assets/js/main.js" defer></script>
    </div>
  );
}

export default Footer;
