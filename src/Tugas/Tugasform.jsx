import React from "react";

export default class Tugasform extends React.Component {
  state = {
    nama: "",
    jurusan: "",
    gender: "",
    alamat: "",
    member: false,
  };

  render() {
    return (
      <div
        style={{
          margin: "100px auto",
          border: "1px solid gray",
          padding: "20px",
        }}
      >
        <form>
          <label>
            Nama :{" "}
            <input
              type="text"
              name="nama"
              onChange={(e) =>
                this.setState({ nama: e.target.value }, () =>
                  console.log(this.state)
                )
              }
            />
          </label>
          <br />
          <label>
            Jurusan :{" "}
            <select name="jurusan">
              <option value="Pilih Jurusan"></option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Design Komunikasi Visual">DKV</option>
            </select>
          </label>
          <br />
          <label>
            Jenis Kelamin :
            <input
              type="radio"
              value="laki-laki"
              name="gender"
              onChange={(e) =>
                this.setState({ gender: e.target.value }, () =>
                  console.log(this.state)
                )
              }
            />{" "}
            Laki
            <input
              type="radio"
              value="perempuan"
              name="gender"
              onChange={(e) =>
                this.setState({ gender: e.target.value }, () =>
                  console.log(this.state)
                )
              }
            />{" "}
            Perempuan
          </label>
          <br />
          <label>
            Alamat :{" "}
            <textarea
              cols="30"
              rows="10"
              name="alamat"
              onChange={(e) =>
                this.setState({ alamat: e.target.value }, () =>
                  console.log(this.state)
                )
              }
            ></textarea>
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
