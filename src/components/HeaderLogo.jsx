import React, { Component } from "react";

class HeaderLogo extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-8">
            <h1 className="" style={{ fontFamily: "Kaushan Script" }}>
              Elsyifa Store
            </h1>
          </div>
          <div className="col-4">
            <h1
              className="mt-3 ml-5"
              style={{
                fontFamily: "Oswald",
                fontSize: "19px",
                fontWeight: "bolder",
              }}
            >
              Pemesanan : +62 822-4214-1303 ( Hari )
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderLogo;
