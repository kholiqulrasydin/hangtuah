import React from "react";

function NavBar() {
  return (
    <div
      className="NavBar"
      id="header"
      class="fixed-top d-flex align-items-center"
    >
      <div class="container d-flex align-items-center">
        <div class="logo me-auto">
          <a href="/">
            <img src="assets/img/logo.png" alt="" class="img-fluid" />
          </a>
          {/* <h1>
              <a href="/">SD Hangtuah 7</a>
            </h1> */}
        </div>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li>
              <a class="nav-link scrollto" href="/">
                Beranda
              </a>
            </li>
            <li class="dropdown">
              <a href="#">
                <span>Profil</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="/about">Tentang Kami</a>
                </li>
                <li>
                  <a href="#">Sejarah</a>
                </li>
                <li>
                  <a href="/visi-dan-misi">Visi dan Misi</a>
                </li>
                <li>
                  <a href="#">Mengapa Kami</a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#">
                <span>Informasi</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">PPDB</a>
                </li>
                <li>
                  <a href="/ekstrakurikuler">Ekstrakulikuler</a>
                </li>
                <li>
                  <a href="/sdm">SDM</a>
                </li>
                <li>
                  <a href="/prestasi">Prestasi Sekolah</a>
                </li>
                <li>
                  <a href="/galeri">Galeri</a>
                </li>
              </ul>
            </li>
            <li>
              <a class="nav-link scrollto " href="#portfolio">
                Perpustakaan
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#testimonials">
                Berita
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#testimonials">
                kontak
              </a>
            </li>
            {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li> */}
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div class="header-social-links d-flex align-items-center">
          <a href="#" class="twitter">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="#" class="facebook">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="instagram">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="Header">
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />

      <link
        href="assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/glightbox/css/glightbox.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />

      <link href="assets/css/style.css" rel="stylesheet" />
      <link href="assets/css/home.css" rel="stylesheet" />
      <NavBar />
    </div>
  );
}

export default Header;
