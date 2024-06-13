import React from "react";
import "../style/SignUp.css";

function SignUp() {
  return (
    <div>
      <form class="signup">
        <div class="Name">
          <label for="name" id="label">
            Name
          </label>
          <input
            type="text"
            id="name input"
            //   onChange={(e) => {
            //     setName(e.target.value);
            //   }}
          />
        </div>
        <div class="Email">
          <label for="email" id="label">
            Email
          </label>
          <input
            type="email"
            id="email input"
            //   onChange={(e) => {
            //     setEmail(e.target.value);
            //   }}
          />
        </div>
        <div class="Pass">
          <label for="password" id="label">
            Password
          </label>
          <input
            type="password"
            id="password input"
            //   onChange={(e) => {
            //     setPassword(e.target.value);
            //   }}
          />
        </div>
        <div class="PassW">
          <label for="password" id="label">
            Confirm
          </label>
          <input
            type="password confirm"
            id="password input"
            //   onChange={(e) => {
            //     setPassword(e.target.value);
            //   }}
          />
        </div>
        <div class="Contact">
          <label for="contact" id="label">
            Contact
          </label>
          <input
            type="text"
            id="contact input"
            //   onChange={(e) => {
            //     setContact(e.target.value);
            //   }}
          />
        </div>
        <button type="submit" id="input">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
