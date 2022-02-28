import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_SUBSCRIPTION } from "../utils/mutations";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function currentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  return (String(yyyy + '-' + mm + '-' + dd));
}

export default function AddSubModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [addSubscription, { error }] = useMutation(ADD_SUBSCRIPTION);
  const [formState, setFormState] = React.useState({
    date: "",
    name: "",
    category: "",
    price: "",
    tiered: "",
    url: "",
    cardAlias: "",
    billingCycle: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addSubscription({
        variables: { ...formState },
      });

    } catch (err) {
      console.error(err);
    }
  };

  const today = currentDate();

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
      >
        Add Subscription
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a Subscription
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="date"
                  label="Date"
                  type="date"
                  name="date"
                  defaultValue={today}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="cardAlias"
                  label="Payment Method"
                  name="cardAlias"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  id="price"
                  onChange={handleChange}
                />
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
      </Modal>
    </div>
  );
}
