import axios from "axios";
import { format } from "date-fns/esm";
import React, { Component, useState, useEffect } from "react";
import { urlApi, urlMedia } from "../services/api";
import { LayoutScaffold } from "./layouts/layout";
import { useNavigate } from "react-router-dom";

const Berita = ({ props }) => {
  const [berita, setBerita] = useState([]);
  const navigate = useNavigate();
  const changeToDetail = (title) => {
    navigate("/berita/" + title, {
      state: {
        title,
      },
    });
  };

  useEffect(() => {
    if (berita.length > 0) return;
    axios.get(urlApi + "/berita").then((res) => {
      setBerita(res.data.data);
      console.log(berita);
    });
  }, [berita]);

  return (
    <div className="Berita">
      <LayoutScaffold>
        <section
          className="Content"
          id="berita"
          style={{ paddingTop: "150px" }}
        >
          <div className="container">
            <div className="section-title">
              <h2>Berita</h2>
              <p>Berita terbaru dari SD Hang Tuah 7 Surabaya</p>
            </div>
            {berita.map((berita, index) => (
              <div className="col-md mb-4" key={`card-${index++}`}>
                <div className="card">
                  <div className="card-body">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-4">
                        <img
                          src={urlMedia + "/berita/" + berita.imgPath}
                          className="card-img-top"
                          alt="..."
                          style={{ objectFit: "cover", height: "15rem" }}
                        ></img>
                      </div>
                      <div className="col-md-8">
                        <h5 className="card-title fw-bold">{berita.title}</h5>
                        <p className="fst-italic">
                          dibuat pada :{" "}
                          {format(
                            new Date(berita.created_at),
                            "dd/MM/yyyy kk:mm"
                          )}
                        </p>
                        <hr />
                        <div
                          className="card-text description"
                          dangerouslySetInnerHTML={{
                            __html: berita.description,
                          }}
                        ></div>
                        <p
                          onClick={() => changeToDetail(berita.title)}
                          className="btn btn-primary mt-2 "
                        >
                          Baca Selengkapnya
                        </p>
                      </div>
                    </div>
                    {/* <a href={`/berita/${berita.title}`}>NGENTT</a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </LayoutScaffold>
    </div>
  );
};

export default Berita;
