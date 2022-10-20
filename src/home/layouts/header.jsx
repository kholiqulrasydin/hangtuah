import React from "react";
import { urlFb, urlInstagram, urlYoutube } from "../../services/api";
import "../../assets/vendor/swiper/swiper-bundle.min.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/vendor/boxicons/css/boxicons.min.css";
import "../../assets/vendor/glightbox/css/glightbox.min.css";
import "../../assets/css/style.css";
import "../../assets/css/home.css";
import logo from "../../assets/img/logo.png";

function NavBar() {
  return (
    <div className="NavBar fixed-top d-flex align-items-center" id="header">
      <div className="container d-flex align-items-center">
        <div className="logo me-auto">
          <a href="/">
            <img src={logo} alt="" className="img-fluid" />
          </a>
          {/* <h1>
              <a href="/">SD Hangtuah 7</a>
            </h1> */}
        </div>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto" href="/">
                Beranda
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Profil</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="/about">Tentang Kami</a>
                </li>
                <li>
                  <a href="/sejarah">Sejarah</a>
                </li>
                <li>
                  <a href="/visi-dan-misi">Visi dan Misi</a>
                </li>
                <li>
                  <a href="/mengapa-kami">Mengapa Kami</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Informasi</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="/ppdb">PPDB</a>
                </li>
                <li>
                  <a href="/ekstrakurikuler">Ekstrakurikuler</a>
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
              <a className="nav-link scrollto " href="/perpustakaan">
                Perpustakaan
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/berita">
                Berita
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#footer">
                Kontak
              </a>
            </li>
            {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
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
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="header-social-links d-flex align-items-center">
          <a href={urlFb} className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href={urlInstagram} className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href={urlYoutube} className="youtube">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="Header">
      {/* <link
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
      <link href="assets/css/home.css" rel="stylesheet" /> */}
      <NavBar />
    </div>
  );
}

export default Header;
