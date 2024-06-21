import React, { useState } from "react";
import "../style/SignUp.css";
import axios from "axios";
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
  const [confirmPassword, setConfirmPassword] = useState();
  const [role, setRole] = useState("user");

  const handleSubmit = (event) => {
    let userObj = {
      FirstName,
      LastName,
      Email,
      Phone,
      Password,
      confirmPassword,
      role,
    };
    axios
      .post("http://localhost:4000/users/createuser", userObj)
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
        } else {
          Promise.reject();
        }
        console.log(res);
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
            <label for="users">Choose a role:</label>
            <select
              name="users"
              id="users"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <div id="signbutton">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
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
