import React, { useState } from "react";
import "../style/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function Login() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [role, setRole] = useState("user");

  let onlogin = (event) => {
    const loginObj = { Email, Password, role };
    axios
      .post("http://localhost:4000/users/loginuser", loginObj)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          alert("login successfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <div>
      <Grid>
        <Paper elevation={20} id="paper">
          <Grid align="center">
            <Avatar id="avatar"></Avatar>
            <h2>Login</h2>
          </Grid>
          <form>
            <TextField
              fullWidth
              label="Email"
              id="textfield"
              margin="normal"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              fullWidth
              label="Password"
              id="textfield"
              margin="normal"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <label for="role">Choose a role:</label>
            <select
              name="role"
              id="role"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <div id="button">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={onlogin}
              >
                Login
              </Button>
            </div>
          </form>
          Don't have an account?
          <Link to="/signup"> Sign up</Link>
          Forgot password? Click Here
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
