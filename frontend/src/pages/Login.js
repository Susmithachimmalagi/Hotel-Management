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
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPwd, setConfirmPassword] = useState();
  return (
    <div>
      <Grid>
        <Paper elevation={20} id="paper">
          <Grid align="center">
            <Avatar id="avatar"></Avatar>
            <h2>Login</h2>
            <Typography variant="caption" id="caption">
              Create your account
            </Typography>
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
            <div id="button">
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
          </form>
          Don't have an account?
          <Link to="/signup"> Sign up</Link>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;
