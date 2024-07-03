import React, { useState } from "react";
import "../style/Contact.css";
import contact from "../images/contact1.png";
import axios from "axios";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
function Contact() {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Moblie, setMoblie] = useState();
  const [Message, setMessage] = useState();

  const handleSubmit = (event) => {
    let msgObj = {
      Name,
      Email,
      Moblie,
      Message,
    };
    axios
      .post("http://localhost:4000/users/msgObj", msgObj)
      .then((res) => {
        if (res.status === 200) {
          alert("Sent successfully");
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
    <div class="Contactus-1">
      <h1>CONTACT</h1>
      <div class="Contact-2">
        <div id="Contactimg">
          <img src={contact} />
        </div>
        <div id="Contact-Pg">
          <Grid>
            <Paper id="paper">
              <form>
                <TextField
                  fullWidth
                  label="Name"
                  id="textfield-name"
                  placeholder="Enter your name"
                  margin="normal"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />

                {
                  <TextField
                    fullWidth
                    label="Email"
                    id="textfield-eamil"
                    placeholder=" Enter your email"
                    margin="normal"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                }

                <TextField
                  fullWidth
                  label="Moblie"
                  id="textfield"
                  placeholder="Moblie-Number"
                  margin="normal"
                  onChange={(e) => {
                    setMoblie(e.target.value);
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  id="textfield-msg"
                  placeholder="Enter your message"
                  margin="normal"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  id="contact"
                  onClick={handleSubmit}
                >
                  submit
                </Button>
              </form>
            </Paper>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Contact;
