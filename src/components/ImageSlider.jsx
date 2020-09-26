import React, { Component } from "react";
import SliderImage1 from "./Images/sl1.png";
import SliderImage2 from "./Images/sl2.png";
import SliderImage3 from "./Images/sl3.png";

class ImageSlider extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={SliderImage1}
                class="d-block w-100"
                style={{ height: "550px" }}
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Madu Asli Sumbawa</h5>
                <p>
                  Hanya di Elsyifa Store
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={SliderImage2}
                class="d-block w-100"
                alt="..."
                style={{ height: "550px" }}
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Product yang Tersedia</h5>
                <p>Kami memiliki beberapa Product yang tersedia</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={SliderImage3}
                class="d-block w-100"
                alt="..."
                style={{ height: "550px" }}
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Berbagai Jenis Madu ASLI</h5>
                <p>
                  Kami selalu ada
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </>
    );
  }
}

export default ImageSlider;
