import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { Icon, Card } from "semantic-ui-react";

// const description = [
//   "Amy is a violinist with 2 years experience in the wedding industry.",
//   "She enjoys the outdoors and currently resides in upstate New York.",
// ].join(" ");

class FooterOwner extends Component {
  state = {};
  render() {
    return (
      <>
        <Jumbotron fluid style={{ backgroundColor: "#0d8b04" }}>
          <div className="row">
            <div className="col col-md-4">
              <div className="ml-5">
                <Card style={{ backgroundColor: "#0d8b04" }}>
                  <Card.Header>
                    <h1
                      className="ml-5"
                      style={{
                        fontSize: "35px",
                        fontFamily: "Kaushan Script",
                        color: "white",
                      }}
                    >
                      Elsyifa Store
                    </h1>
                  </Card.Header>
                  <Card.Content style={{color: "white"}}>
                    Alamat : Gang Sindoro 4 no. 955 Rt 4 Rw 5 Kec.Gombong Kab.
                    Kabupaten Prov. Jawa Tengah
                  </Card.Content>
                  {/* <Card.Content extra>
                    <Icon name="user" />4 Friends
                  </Card.Content> */}
                </Card>
              </div>

              <text className="ml-5" style={{ color: "white" }}></text>
            </div>
            <div className="col col-md-4">
              {/* <text>Alamat</text> */}
              <br />
            </div>
            <div className="col col-md-4">
              <text
                style={{
                  fontFamily: "Oswald",
                  fontSize: "19px",
                  color: "white",
                }}
              >
                Contact :
              </text>
              <br />
              <Icon name="whatsapp" size="big" color="yellow" />
              <text style={{ color: "white", fontSize: "20px" }}>
                Harry Feryanto ( +62 822-4214-1303 )
              </text>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default FooterOwner;
