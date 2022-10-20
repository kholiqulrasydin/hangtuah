import axios from "axios";
import React, { Component } from "react";
import { urlApi, urlMedia } from "../services/api";
import { LayoutScaffold } from "./layouts/layout";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ekstrakurikuler: [],
    };
  }

  componentDidMount() {
    axios.get(urlApi + "/ekstrakurikuler").then((res) => {
      this.setState({
        ekstrakurikuler: res.data.data,
      });
    });
  }

  render() {
    return (
      <section
        className="Content ekstra"
        id="ekstra"
        style={{ paddingTop: "150px" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Ekstrakurikuler</h2>
            <p>Ekstrakurikuler dari SD Hang Tuah 7 Surabaya</p>
          </div>
          <div className="row">
            {this.state.ekstrakurikuler.map((ekstrakurikuler) => (
              <div className="col-md-3 mb-4">
                <div
                  className="card"
                  style={{ width: "16rem", height: "20rem" }}
                >
                  <img
                    src={
                      urlMedia + "/ekstrakurikuler/" + ekstrakurikuler.imgPath
                    }
                    className="card-img-top"
                    alt="..."
                    style={{ height: "8rem" }}
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">
                      {ekstrakurikuler.ekstrakurikuler_name}
                    </h5>
                    <p className="card-text description">
                      {ekstrakurikuler.description}
                    </p>
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

function Ekstra() {
  return (
    <div className="Ekstrakurikuler">
      <LayoutScaffold>
        <Content />
      </LayoutScaffold>
    </div>
  );
}

export default Ekstra;
