import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  ImageList,
  ImageListItem,
} from "@mui/material";
import {
  getMovies,
  getTV,
  getMovieProvider,
  getTVProvider,
} from "../utils/API";
import { useMutation } from "@apollo/client";
import { ADD_TO_WATCH_LIST } from "../utils/mutations";

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

export default function AddToWatchList({ setToggleModal }) {
  const [movieInput, setMovieInput] = useState("");
  const [tvInput, setTvInput] = useState("");
  const [searchDetails, setSearchDetails] = useState(null);
  const [selected, setSelected] = useState({});
  const [addToWatchList] = useMutation(ADD_TO_WATCH_LIST);

  function handleChange(event) {
    const { name, value } = event.target;
    name === "movieSearch" ? setMovieInput(value) : setTvInput(value);
  }

  async function handleSearch(searchType) {
    if (searchType === "movie") {
      const { results } = await getMovies(movieInput);
      const movieSelection =
        results.length >= 3
          ? [results[0], results[1], results[2]]
          : [results[0]];
      const movieData = movieSelection.map((movie) => ({
        name: movie.title,
        tmdbId: movie.id,
        image: POSTER_BASE_URL + movie.poster_path,
        type: "movie",
      }));

      setSearchDetails(movieData);
    } else {
      const { results } = await getTV(tvInput);
      const tvSelection =
        results.length >= 3
          ? [results[0], results[1], results[2]]
          : [results[0]];
      const tvData = tvSelection.map((tv) => ({
        name: tv.name,
        tmdbId: tv.id,
        image: POSTER_BASE_URL + tv.poster_path,
        type: "tv",
      }));

      setSearchDetails(tvData);
    }
  }

  async function handleClick(item) {
    let providers;
    if (item.type === "movie") {
      const { results } = await getMovieProvider(item.tmdbId);
      results.US.flatrate === undefined
        ? (providers = ["Sorry, no providers found"])
        : (providers = results.US.flatrate.map((item) => item.provider_name));
    } else {
      const { results } = await getTVProvider(item.tmdbId);
      results.US.flatrate === undefined
        ? (providers = ["Sorry, no providers found"])
        : (providers = results.US.flatrate.map((item) => item.provider_name));
    }

    setSelected({
      name: item.name,
      tmdbId: item.tmdbId,
      type: item.type,
      providers: providers,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await addToWatchList({
        variables: { ...selected },
      });
    } catch (err) {
      console.error(err);
    }
    setToggleModal(false);
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
          <Grid item xs={12}>
            {searchDetails && (
              <>
                <Typography>Select from the options below</Typography>
                <ImageList sx={12} cols={3}>
                  {searchDetails.map((item, index) => (
                    <Button onClick={() => handleClick(item)}>
                      <ImageListItem key={item.name}>
                        <img
                          src={item.image}
                          srcSet={item.image}
                          alt={item.name}
                          loading="lazy"
                        />
                      </ImageListItem>
                    </Button>
                  ))}
                </ImageList>
              </>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography>You selected: {selected.name}</Typography>
          </Grid>
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
