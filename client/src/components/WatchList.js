import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import Title from "./Title";
import { getMovies } from "../utils/API";

function WatchList({ watchList }) {
  let movie;
  useEffect(async () => {
    movie = await getMovies("Die hard");
    console.log(movie);
  });
  return (
    <>
      <React.Fragment>
        <Title>Watch List</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {watchList.map((movie) => (
              <TableRow key={movie._id}>
                <TableCell>{movie.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button onClick={handleClick}>Add to Watch List</Button>
      </React.Fragment>
    </>
  );
}

export default WatchList;
