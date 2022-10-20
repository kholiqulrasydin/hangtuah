import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { urlApi, urlMedia } from "../../services/api";

class PeopleGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchStr: "",
      sdm: [],
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(onChanged) {
    this.state({ searchStr: onChanged });
  }

  componentDidMount() {
    axios.get(urlApi + "/pegawai").then((res) => {
      this.setState({
        sdm: res.data.data,
      });
    });
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
            <h2 class="col-sm-12 col-md-6">Guru Dan Staff</h2>
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
            {this.state.sdm.map((item) => (
              <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" style={{ width: "300px", height: "250px" }}>
                  <img
                    src={urlMedia + "/pegawai/" + item.imgPath}
                    style={{
                      objectFit: "cover",
                      width: "8rem",
                      height: "8rem",
                    }}
                    alt=""
                  />
                  <h4>{item.name}</h4>
                  <span>{item.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default PeopleGrid;
