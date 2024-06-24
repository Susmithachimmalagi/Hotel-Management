import React, { useState } from "react";
import "../style/Book.css";
import book from "../images/book1.jpg";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
function Book() {
  const [Name, setWhereTo] = useState();
  const [Rooms, setGuestsrooms] = useState();
  const [In, setCheckIn] = useState();
  const [Out, setCheckOut] = useState();
  // const [user, setUser] = useState("user");
  const handleSubmit = (event) => {
    let userObj = {
      Name,
      Rooms,
      In,
      Out,
    };
  };
  return (
    <div id="fullbook">
      <div id="Firstbook">
        <div class="title">
          <h1>BOOKNOW</h1>
        </div>
        <Grid>
          <Paper elevation={20} id="paper">
            <form>
              <h5>Hotel Name</h5>
              <TextField
                fullWidth
                label="Name"
                id="textfield"
                placeholder="PlaceName"
                margin="normal"
                onChange={(e) => {
                  setWhereTo(e.target.value);
                }}
                required
              />
              <h5>AC & Non-AC</h5>
              {
                <TextField
                  fullWidth
                  label="Rooms"
                  id="textfield"
                  placeholder=" 2 adults,1 child,0 aged"
                  margin="normal"
                  onChange={(e) => {
                    setGuestsrooms(e.target.value);
                  }}
                  required
                />
              }
              <h5>Check-In</h5>
              <TextField
                fullWidth
                label="In"
                id="textfield"
                placeholder="07-10-2002"
                margin="normal"
                onChange={(e) => {
                  setCheckIn(e.target.value);
                }}
              />
              <h5> Check-Out</h5>
              <TextField
                fullWidth
                label="Out"
                id="textfield"
                placeholder="07-10-2002"
                margin="normal"
                onChange={(e) => {
                  setCheckOut(e.target.value);
                }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                id="BookNow"
                onClick={handleSubmit}
              >
                Book Now
              </Button>
            </form>
          </Paper>
        </Grid>
      </div>

      <div id="Secondbook">
        <img src={book} height="300px" width="350px" id="img" />
      </div>
    </div>
  );
}

export default Book;
