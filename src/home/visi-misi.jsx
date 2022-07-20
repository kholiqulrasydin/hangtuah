import React from "react";
import { LayoutScaffold } from "./layouts/layout";

function Content() {
  return (
    <section
      className="Content"
      id="visimisi"
      class="visimisi"
      style={{ paddingTop: "150px" }}
    >
      <div className="container">
        <div class="section-title">
          <h2>Visi dan Misi</h2>
        </div>

        <h2 className="mb-4 fw-bold">Visi Sekolah</h2>
        <p className="mb-4">
          "Unggul dalam Prestasi, Berwawasan IMTAQ dan IPTEK dengan menjaga,
          melestarikan lingkungan yang bersih dan sehat serta menumbuhkan
          kedisiplinan dan jiwa bahari menuju sekolah berbudaya mutu. "
        </p>

        <h2 className="mb-4 fw-bold">Misi Sekolah</h2>
        <p>
          1. Mengembangkan keunggulan akademik dan non akademik yang berwawasan
          Iman dan Taqwa; <br />
          2. Meningkatkan Ilmu Pengetahuan yang berwawasan Teknologi;
          <br />
          3. Mewujudkan sekolah berbudaya rapi, bersih dan sehat;
          <br />
          4. Meningkatkan kemandirian dan kedisiplinan; <br />
          5. Menumbuhkan rasa cinta terhadap bangsa dan tanah air serta berjiwa
          bahari; <br />
          7. Menumbuhkan Kecintaan terhadap nilai-nilai luhur budaya bangsa.
        </p>

        <h2 className="mb-4 fw-bold">Tujuan Sekolah</h2>
        <p className="mb-4">
          1. Menjadikan Siswa Unggul dalam Prestasi Akademik maupun Non
          Akademik; <br />
          2. Dapat menerapkan nilai-nilai keagamaan; <br />
          3. Menjadikan Siswa Menguasai Ilmu Pengetahuan dan Teknologi; <br />
          4. Membiasakan Siswa selalu Rapi Bersih dan Sehat; <br />
          5. Memiliki Disiplin Pribadi yang Tinggi; <br />
          6. Terukir Semangat Jiwa Bahari; <br />
          7. Menghargai Nilai-nilai luhur Budaya Bangsa.
        </p>
      </div>
    </section>
  );
}

function VisiMisi() {
  return (
    <div className="VisiMisi">
      <LayoutScaffold>
        <Content/>
      </LayoutScaffold>
    </div>
  );
}

export default VisiMisi;
