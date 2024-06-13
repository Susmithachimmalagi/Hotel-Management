import React from "react";

function Login() {
  return (
    <div>
      <form class="Login">
        <div class="L-email">
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
        <div class="L-pass">
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
        <button type="submit" id="input">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
