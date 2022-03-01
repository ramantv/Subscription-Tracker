import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Button from "@mui/material/Button";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { DELETE_SUBSCRIPTION } from "../utils/mutations";

import AddSubModal from "./AddSubModal";

import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const { user, loading } = useQuery(GET_ME);
  const subscriptions = user.subscriptions;
  console.log(user);

  const [deleteSubscription, { error }] = useMutation(DELETE_SUBSCRIPTION);

  const handleDelete = async (row, e) => {
    console.log({ ...row });

    try {
      const { data } = await deleteSubscription({
        variables: { ...row },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      <Title>Streaming Subscriptions</Title>
      <AddSubModal />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Tiered</TableCell>
            <TableCell>Card Alias</TableCell>
            <TableCell align="right">Monthly Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscriptions.map((subscription) => (
            <TableRow key={subscription._id}>
              <TableCell>{subscription.name}</TableCell>
              <TableCell>{subscription.url}</TableCell>
              <TableCell>{subscription.tiered}</TableCell>
              <TableCell>{subscription.cardAlias}</TableCell>
              <TableCell align="right">{`$${subscription.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Subscriptions
      </Link>
    </React.Fragment>
  );
}
