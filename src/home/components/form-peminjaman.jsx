import React from "react";
import { LayoutScaffold } from "../layouts/layout";

function Content() {
  return (
    <section
      className="Content"
      id="peminjaman"
      class="peminjaman"
      style={{ paddingTop: "150px" }}
    >
      <div className="container">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Nama Lengkap"
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Kelas
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Kelas</option>
            <option value="1">Kelas 1</option>
            <option value="2">Kelas 2</option>
            <option value="3">Kelas 3</option>
            <option value="3">Kelas 4</option>
            <option value="3">Kelas 5</option>
            <option value="3">Kelas 6</option>
          </select>
        </div>
        <button type="button" class="btn btn-primary">
          Konfirmasi Peminjaman
        </button>
      </div>
    </section>
  );
}

function Peminjaman() {
  return (
    <div className="Form">
      <LayoutScaffold>
        <Content />
      </LayoutScaffold>
    </div>
  );
}

export default Peminjaman;
