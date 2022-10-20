import React, { Component } from "react";
import { urlPendaftaran } from "../services/api";
import { LayoutScaffold } from "./layouts/layout";

export default class Ppdb extends Component {
  render() {
    return (
      <LayoutScaffold>
        <section
          className="Content ppdb"
          id="ppdb"
          style={{ paddingTop: "150px" }}
        >
          <div className="container">
            <div className="section-title">
              <h2>PPDB</h2>
              <p>Penerimaan Peserta Didik Baru SD Hang Tuah 7 Surabaya</p>
            </div>
            <div className="row text-center">
              <div className="mb-4">
                <img
                  src="assets/img/ppdb-1.png"
                  style={{ width: "60rem" }}
                  alt=""
                />
              </div>
              <div className="mb-4">
                <img
                  src="assets/img/ppdb-2.png"
                  style={{ width: "60rem" }}
                  alt=""
                />
              </div>
              <a href={urlPendaftaran} className="btn btn-primary">
                Link Pendaftaran
              </a>
            </div>
          </div>
        </section>
      </LayoutScaffold>
    );
  }
}
