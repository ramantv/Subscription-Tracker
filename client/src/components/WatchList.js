import React, { useState } from "react";
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
import AddToWatchList from "./AddToWatchList";

const style = {
  overflow: "scroll",
};

function WatchList({ watchList }) {
  const [toggleModal, setToggleModal] = useState(false);
  const handleToggle = () => setToggleModal(!toggleModal);

  return (
    <>
      <Title>Watch List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Providers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {watchList.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.name}</TableCell>
              {<TableCell>{item.providers.join(", ")}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={handleToggle}>Add to Watch List</Button>
      <Modal style={style} open={toggleModal} onClose={handleToggle}>
        <AddToWatchList handleToggle={handleToggle} />
      </Modal>
    </>
  );
}

export default WatchList;
