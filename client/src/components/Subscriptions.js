import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Button from "@mui/material/Button";

// Generate Some random Subscription Data
function createData(id, date, name, category, paymentMethod, amount) {
  return { id, date, name, category, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Netflix',
    'Video Streaming',
    'VISA ⠀•••• 3719',
    19.99,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Youtube Premium',
    'Video Streaming',
    'VISA ⠀•••• 2574',
    9.99,
  ),
  createData(
    2,
    '16 Mar, 2019',
    'Amazon Prime',
    'Video Streaming',
    'AMEX ⠀•••• 2000',
    12.99,
  ),
  createData(
    3,
    '15 Mar, 2019',
    'Spotify',
    'Music Streaming',
    'VISA ⠀•••• 5919',
    6.99,
  ),
  createData(
    4,
    '01 Jan, 2020',
    'Sirius XM',
    'Satellite Radio',
    'Paypal',
    5.99,
  ),

];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Streaming Subscriptions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Monthly Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
              <TableCell>
                <Button>
                  X
                </Button>
              </TableCell>
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
