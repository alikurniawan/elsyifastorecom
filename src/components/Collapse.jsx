import React, { Component } from "react";
import { Container } from "reactstrap";

class Collapse extends Component {
  state = {};
  render() {
    return (
      <>
        <Container>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    style={{ textDecoration: "none", fontFamily: "Kaushan Script", fontSize: "25px" }}
                    class="btn btn-link btn-block text-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Madu Sumbawa
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body" style={{fontFamily: "Courgette", fontSize: "24px"}}>
                  Madu sumbawa adalah madu yang didapatkan dari lebah perkebunan
                  di daerah Sumbawa. Tersedia 3 macam madu yaitu madu manis,
                  madu pahit dan madu putih. <br /><br/> Secara umum madu memiliki fungsi
                  anti virus. Manfaat madu manis untuk menurunkan asam lambung,
                  meningkatkan nutrisi tubuh, meningkatkan stamina. <br /><br/> Manfaat madu
                  hitam menurunkan kolesterol, untuk asam lambung, untuk
                  diabetes. <br /><br/> Manfaat madu putih meningkatkan stamina, nutrisi ibu
                  hamil dan menyusui. Memenuhi standar SNI Pengolahan dan
                  pengemasan higienis.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    style={{ textDecoration: "none", fontFamily: "Kaushan Script", fontSize: "25px" }}
                    class="btn btn-link btn-block text-right collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Susu Kambing SKY GOAT
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body" style={{fontFamily: "Courgette", fontSize: "24px"}}>
                  Susu kambing sky goat dibuat dengan menggunakan susu kambing
                  etawa pilihan . <br /><br/> Susu skygoat diproduksi dengan menggunakan
                  teknologi tepat guna dan proses produksi yang baik, ini
                  dibuktikan dengsn telah dikeluarkan izin oleh BPOM RI MD
                  dengan nomor 802812001005 Susu kambing Sky goat memiliki 2
                  varian rasa yaitu plain dan coklat. <br /><br/> Kondisi ini sangat baik
                  untuk orang yang mengalami intoleransi laktosa
                </div>
              </div>
            </div>
            {/* <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Collapsible Group Item #3
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div> */}
          </div>
        </Container>
      </>
    );
  }
}

export default Collapse;
