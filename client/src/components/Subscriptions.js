import * as React from "react";
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import Title from "./Title";
import { useMutation } from "@apollo/client";
import { DELETE_SUBSCRIPTION } from "../utils/mutations";

import AddSubModal from "./AddSubModal";

export default function Subscriptions({ subscriptions }) {
  const [deleteSubscription] = useMutation(DELETE_SUBSCRIPTION);

  const monthlyTotal = subscriptions.reduce((total, subscription) => {
    const addedValue = parseFloat(
      subscription.price / subscription.billingCycle
    );
    return parseFloat((total + addedValue).toFixed(2));
  }, 0);

  const handleDelete = async (_id) => {
    try {
      await deleteSubscription({
        variables: { _id: _id },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <Title>Streaming Subscriptions</Title>
      <AddSubModal />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Card Alias</TableCell>
            <TableCell align="right">Monthly Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscriptions.map((subscription) => (
            <TableRow key={subscription._id}>
              <TableCell>{subscription.dateCreated}</TableCell>
              <TableCell>
                {subscription.url ? (
                  <Link href={subscription.url}>{subscription.name}</Link>
                ) : (
                  <>{subscription.name}</>
                )}
              </TableCell>
              <TableCell>{subscription.cardAlias}</TableCell>
              <TableCell align="right">{`$${(
                subscription.price / subscription.billingCycle
              ).toFixed(2)}`}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={(e) => handleDelete(subscription._id)}
                >
                  X
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography>Monthly Total: {monthlyTotal}</Typography>
    </React.Fragment>
  );
}
