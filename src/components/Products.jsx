import React, { Component } from "react";
// import { Card, Jumbotron } from "reactstrap";
import CardModel from "./CardModel";
import { Card, Icon, Image } from "semantic-ui-react";
import mdsbb01 from "./Images/bb01.png";
import mdsbb02 from "./Images/bb02.png";
import mdsbb03 from "./Images/bb03.png";
import mdsbk01 from "./Images/bk01.png";
import mdsbk02 from "./Images/bk02.png";
import mdsbk03 from "./Images/bk03.png";
import mdsbb04 from "./Images/bb04.png";
import skybx01 from "./Images/skyGoat1Cklt.png";
import skybx02 from "./Images/skyGoat2Vnl.png";
import sumacbk01 from "./Images/sumac1.png";
import viniditeabb01 from "./Images/vinidiTea1.png";

class Products extends Component {
  constructor(props) {
    super();

    this.state = {
      productsX: [
        {
          Image: `${mdsbb01}`,
          KodeBarang: "MDS-BB01",
          NamaBarang: "Madu Putih",
          Ukuran: "760 ml",
          StockTersedia: 20,
          Harga: "Rp. 170,000,-",
          Deskripsi: "Madu Putih Sumbawa Botol Besar",
        },
        {
          Image: `${mdsbb02}`,
          KodeBarang: "MDS-BB02",
          NamaBarang: "Madu Pahit",
          Ukuran: "760 ml",
          Harga: "Rp. 170,000,-",
          Deskripsi: "Madu Pahit Sumbawa Botol Besar",
        },
        {
          Image: `${mdsbb03}`,
          KodeBarang: "MDS-BB03",
          NamaBarang: "Madu Manis",
          Ukuran: "760 ml",
          Harga: "Rp. 170,000,-",
          Deskripsi: "Madu Manis Sumbawa Botol Besar",
        },
        {
          Image: `${mdsbk01}`,
          KodeBarang: "MDS-BK01",
          NamaBarang: "Madu Hitam",
          Ukuran: "250 ml",
          Harga: "Rp. 65,000,-",
          Deskripsi: "Madu Hitam Sumbawa Botol Kecil",
        },
        {
          Image: `${mdsbk02}`,
          KodeBarang: "MDS-BK02",
          NamaBarang: "Madu Putih",
          Ukuran: "250 ml",
          Harga: "Rp. 65,000,-",
          Deskripsi: "Madu Putih Sumbawa Botol Kecil",
        },
        {
          Image: `${mdsbk03}`,
          KodeBarang: "MDS-BK03",
          NamaBarang: "Madu Manis",
          Ukuran: "250 ml",
          Harga: "Rp. 65,000,-",
          Deskripsi: "Madu Manis Sumbawa Botol Kecil",
        },
        {
          Image: `${mdsbb04}`,
          KodeBarang: "MDS-BB04",
          NamaBarang: "Madu Hutan",
          Ukuran: "760 ml",
          Harga: "Rp. 210,000,-",
          Deskripsi: "Madu Hutan Sumbawa Botol Besar",
        },
        {
          Image: `${skybx01}`,
          KodeBarang: "SKY-BX01",
          NamaBarang: "Susu Kambing Rasa Coklat",
          Ukuran: "- ml",
          Harga: "Rp. ,-",
          Deskripsi: "Susu Box Kecil Isi -",
        },
        {
          Image: `${skybx02}`,
          KodeBarang: "SKY-BX02",
          NamaBarang: "Susu Kambing Rasa Vanila",
          Ukuran: "- ml",
          Harga: "Rp. ,-",
          Deskripsi: "Susu Box Kecil Isi -",
        },
        {
          Image: `${sumacbk01}`,
          KodeBarang: "SMC-BK01",
          NamaBarang: "Madu Herbal Sumac",
          Ukuran: "215 gram",
          Harga: "Rp. 125,000,-",
          Deskripsi: "Madu Herbal Racikan Rempah Sumac",
        },
        {
          Image: `${viniditeabb01}`,
          KodeBarang: "OIL-VIN-BB01",
          NamaBarang: "Message Oil",
          Ukuran: "Netto 1 Liter",
          Harga: "Rp. 100,000,-",
          Deskripsi: "Message Oil Zaitun Deviti",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <center>
          <h1>Products</h1>
        </center>

        <div className="mt-3">
          <Card.Group centered>
            {this.state.productsX.map((datax) => {
              return (
                <CardModel
                  Image={datax.Image}
                  KodeBarang={datax.KodeBarang}
                  NamaBarang={datax.NamaBarang}
                  Ukuran={datax.Ukuran}
                  Harga={datax.Harga}
                  Deskripsi={datax.Deskripsi}
                />
              );
            })}
          </Card.Group>
        </div>
      </>
    );
  }
}

export default Products;
