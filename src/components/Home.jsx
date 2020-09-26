import React, { Component } from "react";
import ImageSlider from "./ImageSlider";
import Products from "./Products";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <ImageSlider />
        </div>
        <div className="mt-4 ml-4 mr-4">
          <Products />
        </div>
      </div>
    );
  }
}

export default Home;
