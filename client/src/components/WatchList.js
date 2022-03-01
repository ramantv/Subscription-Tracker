import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Modal,
} from "@mui/material";
import Title from "./Title";
import { getMovies } from "../utils/API";
import AddToWatchList from "./AddToWatchList";

function WatchList({ watchList }) {
  const [toggleModal, setToggleModal] = useState(false);
  const handleToggle = () => setToggleModal(!toggleModal);

  let movie;
  useEffect(async () => {
    movie = await getMovies("Die hard");
    console.log(movie);
  }, []);

  return (
    <>
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
      <Button onClick={handleToggle}>Add to Watch List</Button>
      <Modal open={toggleModal} onClose={handleToggle}>
        <AddToWatchList />
      </Modal>
    </>
  );
}

export default WatchList;
