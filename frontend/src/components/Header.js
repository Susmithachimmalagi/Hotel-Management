import React from "react";
import "../style/Header.css";
import "../../../frontend/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div class="nav">
        <div class="title">
          <div id="logo">
            <i class="bi bi-buildings-fill"></i>
          </div>
          <div>ASSP Hotel Management</div>
        </div>
        <div class="nav-bar">
          <Link class="" to="/">
            <div>Home</div>
          </Link>
          <div>About</div>
          <div>Packages</div>
          <div>Book</div>
          <div>Services</div>
          <div>Reviews</div>
          <div>Contact</div>
        </div>
        <div class="search">
          <Link class="/SignUp">
            <i class="bi bi-search" id="se"></i>
          </Link>
          <i class="bi bi-person-rolodex"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
