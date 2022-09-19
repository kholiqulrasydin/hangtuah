import axios from "axios";
import React, { Component } from "react";
import { urlApi } from "../services/api";
import { LayoutScaffold } from "./layouts/layout";

export default class Berita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      berita: [],
    };
  }

  componentDidMount() {
    axios.get(urlApi + "/getPosts").then((res) => {
      this.setState({
        berita: res.data.values,
      });
    });
  }

  render() {
    return (
      <div className="Berita">
        <LayoutScaffold>
          <section
            className="Content"
            id="berita"
            class="berita"
            style={{ paddingTop: "150px" }}
          >
            <div className="container">
              <div class="section-title">
                <h2>Berita</h2>
                <p>Berita terbaru dari SD Hangtuah 7</p>
              </div>
              {this.state.berita.map((berita) => (
                <div className="col-md mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">{berita.post_title}</h5>
                      <p className="fst-italic">
                        dibuat pada : {berita.post_date}
                      </p>
                      <hr />
                      <div
                        class="card-text description"
                        dangerouslySetInnerHTML={{
                          __html: berita.post_content,
                        }}
                      ></div>
                      <a href="" className="btn btn-primary mt-2">
                        Baca Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </LayoutScaffold>
      </div>
    );
  }
}
