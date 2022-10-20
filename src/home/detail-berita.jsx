import axios from "axios";
import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { urlApi, urlMedia } from "../services/api";
import { LayoutScaffold } from "./layouts/layout";

const DetailBerita = ({ props }) => {
  const params = useLocation();
  // const [title, setTitle] = useState("");
  const { title } = useParams();
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    if (berita.length > 0) return;
    axios.get(urlApi + "/berita/?title=" + title).then((res) => {
      setBerita(res.data.data);
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
          <div className="section-title">
            <div className="container">
              {berita.map((data, index) => (
                <div className="row">
                  <h2 className="mb-3">{title}</h2>
                  <p className="fst-italic mb-3">
                    dibuat pada :{" "}
                    {format(new Date(data.created_at), "dd/MM/yyyy kk:mm")}
                  </p>
                  <div className="container border border-light border-4 rounded-5">
                    <img
                      src={urlMedia + "/berita/" + data.imgPath}
                      className="img-fluid mx-auto"
                      alt="..."
                      style={{
                        objectFit: "cover",
                        height: "30rem",
                        width: "50%",
                      }}
                    ></img>
                  </div>
                  <div
                    className="text-start mt-3 h4"
                    dangerouslySetInnerHTML={{
                      __html: data.description,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LayoutScaffold>
    </div>
  );
};

export default DetailBerita;
