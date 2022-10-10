import React, { Component } from "react";
import PeopleGrid from "./components/grid";
import { LayoutScaffold } from "./layouts/layout";

function Content() {
  const data = [
    {
      imgUrl: "/assets/img/kepalasekolah.jpg",
      name: "Kiswojo, S.Pd",
      title: "Kepala Sekolah",
    },
    {
      imgUrl: "/assets/img/avatar.png",
      name: "Apriyani D.C., S.Pd",
      title: "Guru Kelas 5",
    },
    {
      imgUrl: "/assets/img/buerna.jpg",
      name: "Hj. Ernawati",
      title: "Ekskul Religi",
    },
    {
      imgUrl: "/assets/img/butitin.jpg",
      name: "Suharni, A.Md",
      title: "Bendahara",
    },
    {
      imgUrl: "/assets/img/paksan.jpg",
      name: "Santoso, S.Pd",
      title: "Guru Kelas 6",
    },
    {
      imgUrl: "/assets/img/bulilik.jpg",
      name: "Lilik Z. M.",
      title: "Ekskul Religi",
    },
    {
      imgUrl: "/assets/img/buyashinta.jpg",
      name: "Yashinta S., S.Si",
      title: "TU / Operator",
    },
    {
      imgUrl: "/assets/img/paknur.jpg",
      name: "Nuryadin F., S.Pd",
      title: "Guru PJOK",
    },
    {
      imgUrl: "/assets/img/buanita.jpg",
      name: "Anita Mores",
      title: "Ekskul Drumband",
    },
    {
      imgUrl: "/assets/img/buendah.jpg",
      name: "Endah S., S.Pd",
      title: "Guru Kelas 1A",
    },
    {
      imgUrl: "/assets/img/pakasikin.jpg",
      name: "M. Asikin, S.Pd",
      title: "Guru Bahasa Inggris",
    },
    {
      imgUrl: "/assets/img/buerika.jpg",
      name: "Erika K. H.",
      title: "Ekskul Drumband",
    },
    {
      imgUrl: "/assets/img/budjum.jpg",
      name: "Djumiati, S.Pd",
      title: "Guru Kelas 1B",
    },
    {
      imgUrl: "/assets/img/buyashinta.jpg",
      name: "M. Muslim, SHI",
      title: "Guru Agama Islam",
    },
    {
      imgUrl: "/assets/img/buvia.jpg",
      name: "Salfiatul U., S.Pd",
      title: "Ekskul English Conversation",
    },
    {
      imgUrl: "/assets/img/bulucy.jpg",
      name: "Dra. Luciana",
      title: "Guru Kelas 2A",
    },
    {
      imgUrl: "/assets/img/bupiti.jpeg",
      name: "Piti After W.H., M.Th",
      title: "Guru Agama Kristen",
    },
    {
      imgUrl: "/assets/img/avatar.png",
      name: "Dzulaikah",
      title: "Ekskul Tari",
    },
    {
      imgUrl: "/assets/img/buyatni.jpg",
      name: "Soeyatni, S.Pd",
      title: "Guru Kelas 2B",
    },
    {
      imgUrl: "/assets/img/avatar.png",
      name: "Drs. Antonius S.",
      title: "Guru Agama Katholik",
    },
  ];

  return <PeopleGrid data={data} />;
}

class GuruStaff extends Component {
  render() {
    return (
      <section
        className="Content"
        id="gurustaff"
        class="gurustaff"
        style={{ paddingTop: "150px" }}
      >
        <div className="container">
          <div class="section-title">
            <h2>Guru dan Staff</h2>
            <p>Guru dan Staff SD Hang Tuah 7 Surabaya</p>
          </div>
          <div className="row text-center">
            <div className="mb-4">
              <img
                src="assets/img/dataguru.jpg"
                style={{ width: "60rem" }}
                alt=""
              />
            </div>
            <div className="mb-2">
              <img
                src="assets/img/struktur.jpg"
                style={{ width: "60rem" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function GuruDanStaff() {
  return (
    <LayoutScaffold>
      {/* <Content /> */}
      <GuruStaff />
    </LayoutScaffold>
  );
}

export default GuruDanStaff;
