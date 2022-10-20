import React from "react";
import { LayoutScaffold } from "./layouts/layout";

function Content() {
  return (
    <section
      className="Content mengapakami"
      id="mengapakami"
      style={{ paddingTop: "150px" }}
    >
      <div className="container">
        <div className="section-title">
          <h2>Mengapa Kami</h2>
        </div>

        <p className="mb-4" style={{ textAlign: "justify" }}>
          Selama ini Yayasan Hang Tuah Cabang Surabaya banyak mendapatkan
          prestasi, baik dibidang akademik maupun non akademik, ditingkat
          regional ataupun tingkat nasional. Dalam pelaksanaan pendidikan,
          Yayasan Hang Tuah Cabang Surabaya mendapat dukungan dari masyarakat
          pemerhati pendidikan dan seluruh stake holder. Contohnya, dari pihak
          penerbit, pihak penyedia sarana dan prasarana, Dinas Pendidikan
          termasuk dari TNI Angkatan Laut yang menyediakan lahan untuk
          didirikannya lembaga pendidikan / sekolah.
        </p>

        <p className="mb-4" style={{ textAlign: "justify" }}>
          Dalam perkembangannya, Yayasan Hang Tuah Cabang Surabaya terus
          berusaha untuk memperbaiki kualitas pendidikan. Dengan penyediaan
          sarana dan prasarana yang baik, juga sumber daya manusia (SDM) yang
          berkualitas. Dalam usaha penyediaan pendidikan yang berkualitas,
          disamping satuan pendidik yang sudah ada, Yayasan Hang Tuah Cabang
          Surabaya saat ini sedang mempersiapkan 1 (satu) sekolah unggulan di
          tingkat SMA. Yaitu SMA Hang Tuah 5 yang berdomisili di Candi sidoarjo.
        </p>

        <p className="mb-4" style={{ textAlign: "justify" }}>
          Tentunya diharapkan siswa/siswi lulusan dari satuan pendidik yang ada
          di Yayasan Hang Tuah Cabang surabaya unggul dalam prestasi akademis
          berdasarkan iman taqwa, ilmu pengetahuan teknologi, kedisplinan yang
          tinggi dan terbinanya wawasan bahari. Juga menghasilkan tamatan
          sekolah yang memiliki motivasi, komitmen, ketrampilan, kreatifitas
          untuk mandiri, kepekasaan sosial dan kepemimpinan. Dan memberikan
          dukungan fasilitas yang memadai agar kegiatan belajar mengajar
          berjalan dengan lancar, tertib, efektif dan efisien guna menunjang
          keberhasilan peserta didik untuk melanjutkan ke perguruan tinggi
        </p>
      </div>
    </section>
  );
}

function MengapaKami() {
  return (
    <div className="MengapaKami">
      <LayoutScaffold>
        <Content />
      </LayoutScaffold>
    </div>
  );
}

export default MengapaKami;
