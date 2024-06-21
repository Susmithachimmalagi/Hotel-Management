import React from "react";
import "../style/Packages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pac1 from "../images/p1.jpg";
import pac2 from "../images/p2.jpg";
import pac3 from "../images/p3.jpg";
import pac9 from "../images/p9.jpg";
import pac5 from "../images/p5.jpg";
import pac6 from "../images/p6.avif";
function Packages() {
  return (
    <div>
      <div class="title">
        <h1>Packages</h1>
      </div>
      <div class="packages">
        <Container>
          <Row>
            <Col>
              <div class="card" style={{ width: "20rem", margin: 2 }}>
                <img src={pac1} />
                <div class="card-body">
                  <h5 class="card-title">
                    <i class="bi bi-geo-alt-fill" id="location"></i>
                    Mumbai
                  </h5>
                  <p class="card-text">
                    Five-start sophisticated bangkok Escape with daily breakfast
                    nightly Cocktails & afternoon Tea travel Until 30 Nov 2023.
                  </p>
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="far fa-star" />
                </div>
                <div class="amount">
                  <FontAwesomeIcon icon="fas fa-dollar-sign" />
                  900.0
                  <div class="button">
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div class="card" style={{ width: "20rem" }}>
                <img src={pac2} />
                <div class="card-body">
                  <h5 class="card-title">
                    <i class="bi bi-geo-alt-fill" id="location"></i>
                    Hyderabad
                  </h5>
                  <p class="card-text">
                    Five-start sophisticated bangkok Escape with daily breakfast
                    nightly Cocktails & afternoon Tea travel Until 30 Nov 2023.
                  </p>
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="far fa-star" />
                </div>
                <div class="amount">
                  <FontAwesomeIcon icon="fas fa-dollar-sign" />
                  900.0
                </div>
                <div class="button">
                  <button>Book Now</button>
                </div>
              </div>
            </Col>
            <Col>
              <div class="card" style={{ width: "20rem" }}>
                <img src={pac3} />
                <div class="card-body">
                  <h5 class="card-title">
                    <i class="bi bi-geo-alt-fill" id="location"></i>
                    Kolkata
                  </h5>
                  <p class="card-text">
                    Five-start sophisticated bangkok Escape with daily breakfast
                    nightly Cocktails & afternoon Tea travel Until 30 Nov 2023.
                  </p>
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="far fa-star" />
                  <FontAwesomeIcon icon="far fa-star" />
                </div>
                <div class="amount">
                  <FontAwesomeIcon icon="fas fa-dollar-sign" />
                  900.0
                </div>
                <div class="button">
                  <button>Book Now</button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div class="card" style={{ width: "20rem", margin: 2 }}>
                <img src={pac9} />
                <div class="card-body">
                  <h5 class="card-title">
                    <i class="bi bi-geo-alt-fill" id="location"></i>
                    Pune
                  </h5>
                  <p class="card-text">
                    Five-start sophisticated bangkok Escape with daily breakfast
                    nightly Cocktails & afternoon Tea travel Until 30 Nov 2023.
                  </p>
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="far fa-star" />
                  <FontAwesomeIcon icon="far fa-star" />
                </div>
                <div class="amount">
                  <FontAwesomeIcon icon="fas fa-dollar-sign" />
                  900.0
                </div>
                <div class="button">
                  <button>Book Now</button>
                </div>
              </div>
            </Col>
            <Col>
              <div class="card" style={{ width: "20rem" }}>
                <img src={pac5} />
                <div class="card-body">
                  <h5 class="card-title">
                    <i class="bi bi-geo-alt-fill" id="location"></i>
                    Dehli
                  </h5>
                  <p class="card-text">
                    Five-start sophisticated bangkok Escape with daily breakfast
                    nightly Cocktails & afternoon Tea travel Until 30 Nov 2023.
                  </p>
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="far fa-star" />
                  <FontAwesomeIcon icon="far fa-star" />
                </div>
                <div class="amount">
                  <FontAwesomeIcon icon="fas fa-dollar-sign" />
                  900.0
                </div>
                <div class="button">
                  <button>Book Now</button>
                </div>
              </div>
            </Col>
            <Col>
              <div class="card" style={{ width: "20rem" }}>
                <img src={pac6} />
                <div class="card-body">
                  <h5 class="card-title">
                    <i class="bi bi-geo-alt-fill" id="location"></i>
                    Hawaii
                  </h5>
                  <p class="card-text">
                    Five-start sophisticated bangkok Escape with daily breakfast
                    nightly Cocktails & afternoon Tea travel Until 30 Nov 2023.
                  </p>
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="fas fa-star" />
                  <FontAwesomeIcon icon="far fa-star" />
                  <FontAwesomeIcon icon="far fa-star" />
                  <FontAwesomeIcon icon="far fa-star" />
                </div>
                <div class="amount">
                  <FontAwesomeIcon icon="fas fa-dollar-sign" />
                  900.0
                </div>
                <div class="button">
                  <button>Book Now</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Packages;
library.add(fab, fas, far);
