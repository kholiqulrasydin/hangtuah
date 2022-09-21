import Api, { urlApi } from "../services/api";
import { LayoutScaffold } from "./layouts/layout";
import React, { Component, useState } from "react";
import axios from "axios";

function WhatWeDo() {
  return (
    <section className="WhatWeDo" id="what-we-do" class="what-we-do">
      <div class="container">
        <div class="section-title">
          <h2>TESTIMONI SISWA</h2>
          <p>Magnam dolores commodi suscipit consequatur ex aliquid</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon">
                <i class="bx bxl-dribbble"></i>
              </div>
              <h4>
                <a href="">Lorem Ipsum</a>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon">
                <i class="bx bx-file"></i>
              </div>
              <h4>
                <a href="">Sed ut perspiciatis</a>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon">
                <i class="bx bx-tachometer"></i>
              </div>
              <h4>
                <a href="">Magni Dolores</a>
              </h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

class Testimoni extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testimoniAlumni: [],
    };
  }

  componentDidMount() {
    axios.get(urlApi + "/getTestiAlumni").then((res) => {
      this.setState({
        testimoniAlumni: res.data.values,
      });
    });
  }

  render() {
    return (
      <section
        className="Testimoni"
        id="testimoni"
        class="testimoni services section-bg"
      >
        <div class="section-title">
          <h2 class="text-uppercase">TESTIMONI ALUMNI</h2>
          <p>Berikut merupakan testimoni dari para alumni</p>
        </div>

        <div className="container">
          <div class="row">
            {this.state.testimoniAlumni.map((testi) => (
              <div class="col-md-6 mt-4">
                <div class="icon-box testimoni-box">
                  <i class="bi bi-person-circle"></i>
                  <h4>
                    <a href="#">{testi.name}</a>
                  </h4>
                  <p>{testi.testimoni}</p>
                </div>
              </div>
            ))}
            {/* <a class="btn btn-primary mt-4" href="/tambahTesti">
              Tambahkan Testimoni Alumni
            </a> */}
          </div>
        </div>
      </section>
    );
  }
}

class TestimoniOrtu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testimoniOrtu: [],
    };
  }

  componentDidMount() {
    axios.get(urlApi + "/getTestiOrtu").then((res) => {
      this.setState({
        testimoniOrtu: res.data.values,
      });
    });
  }

  render() {
    return (
      <section
        className="TestimoniOrtu"
        id="testimoniOrtu"
        class="testimoniOrtu services section-bg"
      >
        <div class="section-title">
          <h2 class="text-uppercase">TESTIMONI Orang Tua</h2>
          <p>Berikut merupakan testimoni dari para Orang tua murid</p>
        </div>
        <div className="container">
          <div class="row">
            {this.state.testimoniOrtu.map((testi) => (
              <div class="col-md-6 mt-4">
                <div class="icon-box testimoni-box">
                  <i class="bi bi-person-circle"></i>
                  <h4>
                    <a href="#">{testi.name}</a>
                  </h4>
                  <p>{testi.testimoni}</p>
                </div>
              </div>
            ))}
            {/* <a class="btn btn-primary mt-4" href="/tambahTesti">
              Tambahkan Testimoni Orangtua
            </a> */}
          </div>
        </div>
      </section>
    );
  }
}

function Extra() {
  return (
    <section className="Extra" id="services" class="services section-bg">
      <div class="container">
        <div class="section-title">
          <h2>TESTIMONI ALUMNI</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="icon-box">
              <i class="bi bi-briefcase"></i>
              <h4>
                <a href="#">Lorem Ipsum</a>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-lg-0">
            <div class="icon-box">
              <i class="bi bi-card-checklist"></i>
              <h4>
                <a href="#">Dolor Sitema</a>
              </h4>
              <p>
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="icon-box">
              <i class="bi bi-bar-chart"></i>
              <h4>
                <a href="#">Sed ut perspiciatis</a>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="icon-box">
              <i class="bi bi-binoculars"></i>
              <h4>
                <a href="#">Nemo Enim</a>
              </h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="icon-box">
              <i class="bi bi-brightness-high"></i>
              <h4>
                <a href="#">Magni Dolore</a>
              </h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="icon-box">
              <i class="bi bi-calendar4-week"></i>
              <h4>
                <a href="#">Eiusmod Tempor</a>
              </h4>
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Portofolio() {
  return (
    <section className="Portofolio" id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img
                  src="assets/img/portfolio/portfolio-1.jpg"
                  class="img-fluid"
                  alt=""
                />
                <a
                  href="assets/img/portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  class="link-preview portfolio-lightbox"
                  title="Preview"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bx bx-link"></i>
                </a>
              </figure>

              <div class="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">App 1</a>
                </h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="portfolio-wrap">
              <figure>
                <img
                  src="assets/img/portfolio/portfolio-2.jpg"
                  class="img-fluid"
                  alt=""
                />
                <a
                  href="assets/img/portfolio/portfolio-2.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Preview"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bx bx-link"></i>
                </a>
              </figure>

              <div class="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">Web 3</a>
                </h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="portfolio-wrap">
              <figure>
                <img
                  src="assets/img/portfolio/portfolio-3.jpg"
                  class="img-fluid"
                  alt=""
                />
                <a
                  href="assets/img/portfolio/portfolio-3.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Preview"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bx bx-link"></i>
                </a>
              </figure>

              <div class="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">App 2</a>
                </h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img
                  src="assets/img/portfolio/portfolio-4.jpg"
                  class="img-fluid"
                  alt=""
                />
                <a
                  href="assets/img/portfolio/portfolio-4.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Preview"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bx bx-link"></i>
                </a>
              </figure>

              <div class="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">Card 2</a>
                </h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="portfolio-wrap">
              <figure>
                <img
                  src="assets/img/portfolio/portfolio-5.jpg"
                  class="img-fluid"
                  alt=""
                />
                <a
                  href="assets/img/portfolio/portfolio-5.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Preview"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bx bx-link"></i>
                </a>
              </figure>

              <div class="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">Web 2</a>
                </h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="portfolio-wrap">
              <figure>
                <img
                  src="assets/img/portfolio/portfolio-6.jpg"
                  class="img-fluid"
                  alt=""
                />
                <a
                  href="assets/img/portfolio/portfolio-6.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Preview"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bx bx-link"></i>
                </a>
              </figure>

              <div class="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">App 3</a>
                </h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img
                  src="assets/img/portfolio/portfolio-7.jpg"
                  class="img-fluid"
                  alt=""
                />
                <a
                  href="assets/img/portfolio/portfolio-7.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Preview"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bx bx-link"></i>
                </a>
              </figure>

              <div class="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">Card 1</a>
                </h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="portfolio-wrap">
              <figure>
                <img
                  src="assets/img/portfolio/portfolio-8.jpg"
                  class="img-fluid"
                  alt=""
                />
                <a
                  href="assets/img/portfolio/portfolio-8.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Preview"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bx bx-link"></i>
                </a>
              </figure>

              <div class="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">Card 3</a>
                </h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div
            class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="portfolio-wrap">
              <figure>
                <img
                  src="assets/img/portfolio/portfolio-9.jpg"
                  class="img-fluid"
                  alt=""
                />
                <a
                  href="assets/img/portfolio/portfolio-9.jpg"
                  class="link-preview portfolio-lightbox"
                  data-gallery="portfolioGallery"
                  title="Preview"
                >
                  <i class="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  class="link-details"
                  title="More Details"
                >
                  <i class="bx bx-link"></i>
                </a>
              </figure>

              <div class="portfolio-info">
                <h4>
                  <a href="portfolio-details.html">Web 1</a>
                </h4>
                <p>Web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Comment() {
  return (
    <section
      className="Comment"
      id="testimonials"
      class="testimonials section-bg"
    >
      <div class="container">
        <div class="section-title">
          <h2>KOMENTAR</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div
          class="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-1.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-2.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-3.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-4.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-5.jpg"
                  class="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="Team" id="team" class="team">
      <div class="container">
        <div class="section-title">
          <h2>Guru Dan Staff</h2>
          <p>Sit sint consectetur velit quos quisquam cupiditate nemo qui</p>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/team/team-1.jpg" alt="" />
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <p>
                Magni qui quod omnis unde et eos fuga et exercitationem. Odio
                veritatis perspiciatis quaerat qui aut aut aut
              </p>
              <div class="social">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/team/team-2.jpg" alt="" />
              <h4>Sarah Jhinson</h4>
              <span>Product Manager</span>
              <p>
                Repellat fugiat adipisci nemo illum nesciunt voluptas
                repellendus. In architecto rerum rerum temporibus
              </p>
              <div class="social">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/team/team-3.jpg" alt="" />
              <h4>William Anderson</h4>
              <span>CTO</span>
              <p>
                Voluptas necessitatibus occaecati quia. Earum totam consequuntur
                qui porro et laborum toro des clara
              </p>
              <div class="social">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/team/team-3.jpg" alt="" />
              <h4>William Anderson</h4>
              <span>CTO</span>
              <p>
                Voluptas necessitatibus occaecati quia. Earum totam consequuntur
                qui porro et laborum toro des clara
              </p>
              <div class="social">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/team/team-3.jpg" alt="" />
              <h4>William Anderson</h4>
              <span>CTO</span>
              <p>
                Voluptas necessitatibus occaecati quia. Earum totam consequuntur
                qui porro et laborum toro des clara
              </p>
              <div class="social">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="Contact" id="contact" class="contact section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Contact</h2>
          <p>
            Magnam dolores commodi suscipit eius consequatur ex aliquid fuga
          </p>
        </div>

        <div class="row mt-5 justify-content-center">
          <div class="col-lg-10">
            <div class="info-wrap">
              <div class="row">
                <div class="col-lg-4 info">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>
                    A108 Adam Street
                    <br />
                    New York, NY 535022
                  </p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>
                    info@example.com
                    <br />
                    contact@example.com
                  </p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>
                    +1 5589 55488 51
                    <br />
                    +1 5589 22475 14
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5 justify-content-center">
          <div class="col-lg-10">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              class="php-email-form"
            >
              <div class="row">
                <div class="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div class="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sambutan() {
  return (
    <div className="Sambutan" id="sambutan" class="my-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img
              src="assets/img/kepalasekolah.jpg"
              class="rounded mx-auto d-block img-kepala"
              alt=""
            />
            <h4 class="text-center mt-3">KISWOJO, S.Pd</h4>
            <h6 class="text-center">Kepala Sekolah</h6>
          </div>
          <div class="col-md-6 mx-auto d-block">
            <h2 class="fw-bold">SAMBUTAN KEPALA SEKOLAH</h2>
            <p>
              Di Era Revolusi 4.0 saat ini, kebutuhan akan informasi yang cepat,
              mudah dan akurat menjadi kebutuhan utama masyarakat dalam memantau
              kinerja Satuan Pendidikan. Oleh sebab itu, di SD Hang Tuah 7
              Kecamatan Dukuh Pakis Kota Surabaya Provinsi Jawa Timur terus
              menerus meningkatkan kualitas pelayanan informasi pendidikan
              melalui website ini. (Kepala Sekolah SD Hang Tuah 7 Surabaya)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TambahkanTesti() {
  const [nama, setNama] = useState("");
  const [testi, setTesti] = useState("");
  const [type, setType] = useState("");

  const postTesti = (e) => {
    e.preventDefault();
    axios
      .post(urlApi + "/insertTesti", {
        nama,
        testi,
        type,
      })
      .then((res) => console.log("Berhasil", res))
      .catch((err) => console.log(err));
  };

  return (
    <section
      className="tambahTesti"
      id="tambahTesti"
      class="tambahTesti services section-bg"
    >
      <div className="container">
        <div class="section-title">
          <h2 class="text-uppercase">Tambahkan Testimoni</h2>
        </div>
        <form>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Tambahkan Testimoni Sebagai
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="1" selected>
                Orang tua
              </option>
              <option value="2">Alumni</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={nama}
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nama Lengkap"
              onChange={(e) => setNama(e.target.value)}
            ></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Testimoni
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={testi}
              onChange={(e) => setTesti(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <button type="button" class="btn btn-primary" onClick={postTesti}>
              Tambahkan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <LayoutScaffold
          homeHeader={
            <section
              id="hero"
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <div
                class="container text-center text-md-left"
                data-aos="fade-up"
              >
                <h1>
                  Selamat Datang di <span>Website</span>
                </h1>
                <h2>SD HANG TUAH 7 SURABAYA</h2>
                <a href="/about" class="btn-get-started scrollto">
                  Tentang Kami
                </a>
              </div>
            </section>
          }
        >
          <Sambutan />
          <Testimoni />
          <TestimoniOrtu />
          <TambahkanTesti />
        </LayoutScaffold>
      </div>
    );
  }
}
