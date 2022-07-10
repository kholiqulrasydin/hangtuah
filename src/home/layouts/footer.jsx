import React from "react";

function Footer(){
    return (
        <div className="Footer">
            <div className="Footer" id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>SD Hangtuah 7</h3>
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

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Beranda</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Perpustakaan</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Berita</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Informasi</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">PPDB</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Ekstrakuliler</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">SDM</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Prestasi Sekolah</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Galeri</a>
                </li>
              </ul>
            </div>

            {/* <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div> */}
          </div>
        </div>
      </div>

      <div class="container d-md-flex py-4">
        <div class="me-md-auto text-center text-md-start">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>SD Hangtuah 7</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="/">Vokasi UNESA</a>
          </div>
        </div>
        <div class="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" class="twitter">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="#" class="facebook">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="#" class="instagram">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="#" class="google-plus">
            <i class="bx bxl-skype"></i>
          </a>
        </div>
      </div>
    </div>
            <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
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