import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap-icons/font/bootstrap-icons.css";
import home from "../images/home.jpg";
import ClubLounge1 from "../images/ClubLounge1.webp";
import See from "../images/See.jpg";
import Can from "../images/Can.jpg";
import Two from "../images/Two.jpg";
import Wel from "../images/Wel.webp";
import Park from "../images/Park.webp";
import Bar3 from "../images/Bar3.jpg";
import "../style/Services.css";

function Services() {
  return (
    <Container>
      <div className="Tag">
        <h1>SERVICES</h1>
        {/* <h1>Our Services</h1> */}
      </div>
      <Row>
        <Col>
          <div class="card" style={{ width: "18rem", margin: 5 }}>
            <img src={home} />
            <div class="card-body">
              <h5 class="card-title">Resort</h5>
              <p class="card-text">Resorts kind of rooms are also provided.</p>
            </div>
                
          </div>
        </Col>
        <Col>
          <div class="card" style={{ width: "18rem", margin: 5 }}>
            <img src={ClubLounge1} />
            <div class="card-body">
              <h5 class="card-title">Club Lounge</h5>
              <p class="card-text">
                Club suites are available with exclusive space.
              </p>
            </div>
                
          </div>
        </Col>
        <Col>
          <div class="card" style={{ width: "18rem", margin: 5 }}>
            <img src={See} />
            <div class="card-body">
              <h5 class="card-title">SightSeeing</h5>
              <p class="card-text">
                We strive to help you by SightSeeing tours.
              </p>
            </div>
                
          </div>
        </Col>
        <Col>
          <div class="card" style={{ width: "18rem", margin: 5 }}>
            <img src={Can} />
            <div class="card-body">
              <h5 class="card-title">Kids Club</h5>
              <p class="card-text">
                Kids club provides a sort of entertainment
              </p>
            </div>
                
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class="card" style={{ width: "18rem", margin: 5 }}>
            <img src={Two} />
            <div class="card-body">
              <h5 class="card-title">VIP Services</h5>
              <p class="card-text">
                VIP service is about more than a mere luxury.
              </p>
            </div>
                
          </div>
        </Col>
        <Col>
          <div class="card" style={{ width: "18rem", margin: 5 }}>
            <img src={Wel} />
            <div class="card-body">
              <h5 class="card-title">A Warm Welcome</h5>
              <p class="card-text">
                Enjoy a special meet and greet service at the airport.
              </p>
            </div>
                
          </div>
        </Col>
        <Col>
          <div class="card" style={{ width: "18rem", margin: 5 }}>
            <img src={Park} />
            <div class="card-body">
              <h5 class="card-title">Parking</h5>
              <p class="card-text">
                There is huge parking area for parking cars.
              </p>
            </div>
                
          </div>
        </Col>
        <Col>
          <div class="card" style={{ width: "18rem", margin: 5 }}>
            <img src={Bar3} />
            <div class="card-body">
              <h5 class="card-title">Pub</h5>
              <p class="card-text">
                There is pub to enjoy the drinks, music and dance.
              </p>
            </div>
                
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
