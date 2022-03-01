import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import {
  getMovies,
  getTV,
  getMovieProvider,
  getTVProvider,
} from "../utils/API";

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

const POSTER_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function AddToWatchList() {
  const [movieInput, setMovieInput] = useState("");
  const [tvInput, setTvInput] = useState("");
  const [searchDetails, setSearchDetails] = useState({})

  function handleChange(event) {
    const { name, value } = event.target;
    name === "movieSearch" ? setMovieInput(value) : setTvInput(value);
  }

  async function handleSearch(searchType) {
    if (searchType === "movie") {
      const {results} = await getMovies(movieInput);
      setSearchDetails({
        name: movies.
      })
    } else {
      const tvShow = await getTV(tvInput);
      console.log(tvShow);
    }
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
            <Button variant="contained" onClick={() => handleSearch("movie")}>
              Search Movies
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={() => handleSearch("tv")}>
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
          Add to Watch List
        </Button>
      </Box>
    </Box>
  );
}
