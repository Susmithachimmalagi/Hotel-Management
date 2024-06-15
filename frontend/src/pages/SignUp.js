import React, { useState } from "react";
import "../style/SignUp.css";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
function SignUp() {
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
            <h2>Sign Up</h2>
            <Typography variant="caption" id="caption">
              Create your account
            </Typography>
          </Grid>
          <form>
            <TextField
              fullWidth
              label="First Name"
              id="textfield"
              placeholder="Enter your first name"
              margin="normal"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
            <TextField
              fullWidth
              label="Last Name"
              id="textfield"
              placeholder="Enter your last name"
              margin="normal"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
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
              label="Phone Number"
              id="textfield"
              margin="normal"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
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
            <TextField
              fullWidth
              label="Confirm Password"
              id="textfield"
              margin="normal"
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              required
            />
            <div id="signbutton">
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default SignUp;
