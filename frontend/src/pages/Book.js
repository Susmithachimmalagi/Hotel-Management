import React, { useState } from "react";
import "../style/Book.css";
import book from "../images/booking.jpg";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
function Book() {
  const [WhereTo, setWhereTo] = useState();
  const [Guestsrooms, setGuestsrooms] = useState();
  const [CheckIn, setCheckIn] = useState();
  const [CheckOut, setCheckOut] = useState();
  const [user, setUser] = useState("user");
  return (
    <div id="fullbook">
      <div id="Firstbook">
        <div class="title">
          <h1>BOOKNOW</h1>
        </div>
        <Grid>
          <Paper elevation={20} id="paper">
            <form>
              <TextField
                fullWidth
                label="WhereTo"
                id="textfield"
                placeholder="PlaceName"
                margin="normal"
                onChange={(e) => {
                  setWhereTo(e.target.value);
                }}
                required
              />
              {
                <TextField
                  fullWidth
                  label="Guestsrooms"
                  id="textfield"
                  placeholder=" 2 adults,1 child,0 aged"
                  margin="normal"
                  onChange={(e) => {
                    setGuestsrooms(e.target.value);
                  }}
                  required
                />
              }
              <TextField
                fullWidth
                label="dd-mm-yy"
                id="textfield"
                placeholder="07-10-2002"
                margin="normal"
                onChange={(e) => {
                  setCheckIn(e.target.value);
                }}
              />
              <TextField
                fullWidth
                label="dd-mm-yy"
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
              >
                Book Now
              </Button>
            </form>
          </Paper>
        </Grid>
      </div>

      <div id="Secondbook">
        <img src={book} height="300px" width="350px" />
      </div>
    </div>
  );
}

export default Book;
