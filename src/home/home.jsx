import { urlApi } from "../services/api";
import { LayoutScaffold } from "./layouts/layout";
import React, { Component, useState } from "react";
import axios from "axios";

class Testimoni extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testimoniAlumni: [],
    };
  }

  componentDidMount() {
    axios.get(urlApi + "/testimoni").then((res) => {
      this.setState({
        testimoniAlumni: res.data.data,
      });
    });
  }

  render() {
    return (
      <section
        className="Testimoni testimoni services section-bg"
        id="testimoni"
      >
        <div className="section-title">
          <h2 className="text-uppercase">TESTIMONI ALUMNI</h2>
          <p>Berikut merupakan testimoni dari para alumni</p>
        </div>

        <div className="container">
          <div className="row">
            {this.state.testimoniAlumni.map((testi) => (
              <div className="col-md-6 mt-4">
                <div className="icon-box testimoni-box">
                  <i className="bi bi-person-circle"></i>
                  <h4>
                    <a href="#">
                      {testi.name}, {testi.school_now}
                    </a>
                  </h4>
                  <p>{testi.testimoni}</p>
                </div>
              </div>
            ))}
            {/* <a className="btn btn-primary mt-4" href="/tambahTesti">
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
        className="TestimoniOrtu testimoniOrtu services section-bg"
        id="testimoniOrtu"
      >
        <div className="section-title">
          <h2 className="text-uppercase">TESTIMONI Orang Tua</h2>
          <p>Berikut merupakan testimoni dari para Orang tua murid</p>
        </div>
        <div className="container">
          <div className="row">
            {this.state.testimoniOrtu.map((testi) => (
              <div className="col-md-6 mt-4">
                <div className="icon-box testimoni-box">
                  <i className="bi bi-person-circle"></i>
                  <h4>
                    <a href="#">{testi.name}</a>
                  </h4>
                  <p>{testi.testimoni}</p>
                </div>
              </div>
            ))}
            {/* <a className="btn btn-primary mt-4" href="/tambahTesti">
              Tambahkan Testimoni Orangtua
            </a> */}
          </div>
        </div>
      </section>
    );
  }
}

function Sambutan() {
  return (
    <div className="Sambutan my-5" id="sambutan">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="assets/img/kepalasekolah.jpg"
              className="rounded mx-auto d-block img-kepala"
              alt=""
            />
            <h4 className="text-center mt-3">KISWOJO, S.Pd</h4>
            <h6 className="text-center">Kepala Sekolah</h6>
          </div>
          <div className="col-md-6 mx-auto d-block">
            <h2 className="fw-bold">SAMBUTAN KEPALA SEKOLAH</h2>
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

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <LayoutScaffold
          homeHeader={
            <section
              id="hero"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div
                className="container text-center text-md-left"
                data-aos="fade-up"
              >
                <h1>
                  Selamat Datang di <span>Website</span>
                </h1>
                <h2>SD HANG TUAH 7 SURABAYA</h2>
                <a href="/about" className="btn-get-started scrollto">
                  Tentang Kami
                </a>
              </div>
            </section>
          }
        >
          <Sambutan />
          <Testimoni />
          {/* <TestimoniOrtu /> */}
        </LayoutScaffold>
      </div>
    );
  }
}
