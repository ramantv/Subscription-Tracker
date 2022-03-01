import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddToWatchList() {
  const [movieInput, setMovieInput] = useState("");
  const [tvInput, setTvInput] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
  }

  function handleSearch() {
    return;
  }

  function handleSubmit() {
    return;
  }

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Search for something to add
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={6}>
            <TextField
              name="movieSearch"
              required
              fullWidth
              id="movieSearch"
              label="Movie Search"
              onChange={handleChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="tvSearch"
              label="TV Search"
              name="tvSearch"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              searchType="movie"
              onClick={handleSearch}
            >
              Search Movies
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" searchType="tv" onClick={handleSearch}>
              Search TV
            </Button>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add Subscription
        </Button>
      </Box>
    </Box>
  );
}
