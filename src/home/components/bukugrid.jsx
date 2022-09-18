import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BukuGrid extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.state = {
      searchStr: "",
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(onChanged) {
    this.state({ searchStr: onChanged });
  }

  render() {
    return (
      <section
        className="Team"
        id="team"
        class="team"
        style={{ marginTop: "2rem" }}
      >
        <div class="container-fluid col-md-6">
          <div class="row d-flex justify-content-between">
            <h2 class="col-sm-12 col-md-6">Cari Judul Buku</h2>
            <div class="row col-sm-12 col-md-6">
              <div class="input-group">
                <input
                  class="form-control py-2"
                  type="text"
                  placeholder="search"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container" style={{ marginTop: "4rem" }}>
          <div class="row">
            {this.data.map((item) => (
              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src={item.imgUrl} alt="" />
                  <h4>{item.name}</h4>
                  <span>Penerbit : {item.penerbit}</span>
                  <div class="btn">
                    <a class="btn btn-primary" href="/pinjam">
                      Pinjam
                    </a>
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

export default BukuGrid;
