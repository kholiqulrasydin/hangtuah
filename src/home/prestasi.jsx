import React, { Component } from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { LayoutScaffold } from "./layouts/layout";
import axios from "axios";
import { urlApi } from "../services/api";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prestasi: [],
    };
  }

  componentDidMount() {
    axios.get(urlApi + "/prestasi").then((res) => {
      this.setState({
        prestasi: res.data.data,
      });
    });
  }

  render() {
    return (
      <section
        className="Content services section-bg"
        id="prestasi"
        style={{ paddingTop: "150px" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Prestasi</h2>
            <p>Prestasi dari SD Hang Tuah 7 Surabaya</p>
          </div>
          <div className="row">
            {this.state.prestasi.map((prestasi) => (
              <div className="col-md-6 mb-3">
                <div className="icon-box" style={{ height: "10rem" }}>
                  <i className="bi bi-trophy-fill"></i>
                  <h4>
                    <a href="#">{prestasi.prestasi_name}</a>
                  </h4>
                  <p>{prestasi.prestasi_desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default class Prestasi extends Component {
  render() {
    return (
      <div className="Prestasi">
        <LayoutScaffold>
          <Content />
        </LayoutScaffold>
      </div>
    );
  }
}
