import React, { useState } from "react";
import "../style/Login.css";
import { Link } from "react-router-dom";
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
  const [user, setUser] = useState("user");

  let onlogin = (event) => {
    console.log(Email);
    console.log(Password);
    console.log(user);
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
            <label for="users">Choose a role:</label>
            <select
              name="users"
              id="users"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
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
          <Link to="/signup"> Sign up</Link> <br />
          Forgot password?
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
