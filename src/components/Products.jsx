import React, { Component } from "react";
// import { Card, Jumbotron } from "reactstrap";
import CardModel from "./CardModel";
import { Card, Icon, Image } from "semantic-ui-react";

class Products extends Component {
  constructor() {
    super();

    this.state = {
      productsX: [
        {
          Image: "",
          KodeBarang: "MDS A1",
          Harga: "Rp. 30,000",
        },
        {
          Image: "",
          KodeBarang: "MDS A2",
          Harga: "Rp. 45,000",
        },
        {
          Image: "",
          KodeBarang: "MDS A3",
          Harga: "Rp. 20,000",
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
          {this.state.productsX.map((data, index) => (
              <CardModel Name={data.KodeBarang} />
          ))}
        </div>
      </>
    );
  }
}

export default Products;
