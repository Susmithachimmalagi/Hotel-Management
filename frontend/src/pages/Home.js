import React from "react";
import "../style/Home.css";
import Home1 from "../images/home.jpg";
import Home2 from "../images/home2.jpg";
import Home3 from "../images/home3.jpg";
import Home4 from "../images/home4.jpg";

function Home() {
  return (
    <>
      <div class="image">
        <h1>WELCOME TO GLOBAL ICON OF LUXURY</h1>
        <h5>Discover New Places With Us,Luxury Awaits</h5>
      </div>
      {/* <div class="slideshow-container">
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src={Home1} />
          <div class="text">Caption Text</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src={Home2} />
          <div class="text">Caption Two</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src={Home3} />
          <div class="text">Caption Three</div>
        </div>
        <a class="prev" onclick="plusSlides(-1)">
          &#10094;
        </a>
        <a class="next" onclick="plusSlides(1)">
          &#10095;
        </a>
      </div>
      <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div> */}
    </>
  );
}

export default Home;
