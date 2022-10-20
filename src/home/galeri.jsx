import axios from "axios";
import React, { Component } from "react";
import { urlApi, urlMedia } from "../services/api";
import { LayoutScaffold } from "./layouts/layout";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galeri: [],
    };
  }

  componentDidMount() {
    axios.get(urlApi + "/galeri").then((res) => {
      this.setState({
        galeri: res.data.data,
      });
    });
  }

  render() {
    return (
      <section
        className="Portofolio portfolio"
        id="galeri"
        style={{ paddingTop: "150px" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Galeri</h2>
            <p>Galeri dari SD Hangtuah 7</p>
          </div>
          <div className="row portfolio-container">
            {this.state.galeri.map((galeri) => (
              <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src={urlMedia + "/galeri/" + galeri.imgPath}
                      className="img-fluid"
                      alt=""
                    />
                    <a
                      href={urlMedia + "/galeri/" + galeri.imgPath}
                      data-gallery="portfolioGallery"
                      className="link-preview portfolio-lightbox"
                      title="Preview"
                    >
                      <i className="bx bx-zoom-in"></i>
                    </a>
                  </figure>

                  <div className="portfolio-info">
                    <h4>
                      <a href="#">{galeri.title}</a>
                    </h4>
                    <p>{galeri.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

function Galeri() {
  return (
    <div className="Prestasi">
      <LayoutScaffold>
        <Content />
      </LayoutScaffold>
    </div>
  );
}

export default Galeri;
