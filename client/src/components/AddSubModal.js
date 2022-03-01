import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_SUBSCRIPTION } from "../utils/mutations";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  input: {
    "&:invalid": {
      backgroundColor: "rgba(255,0,0,.3)",
    },
  },
};

function currentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  return String(yyyy + "-" + mm + "-" + dd);
}

export default function AddSubModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const today = currentDate();

  const [addSubscription, { error }] = useMutation(ADD_SUBSCRIPTION);
  const [formState, setFormState] = React.useState({
    dateCreated: today,
    name: "",
    price: "",
    tiered: false,
    url: "",
    cardAlias: "",
    billingCycle: 1,
  });

  const handleChange = (event) => {
    let { name, value } = event.target;

    if (name === "billingCycle") {
      value === "Monthly" ? (value = 1) : (value = 12);
    }
    if (name === "price") {
      value = Number(value);
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addSubscription({
        variables: { ...formState },
      });
    } catch (err) {
      console.error(err);
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
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
                  name="price"
                  label="Price"
                  id="price"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*(.[0-9]{2})?",
                  }}
                  InputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="url"
                  fullWidth
                  id="url"
                  label="URL"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="cardAlias"
                  label="Payment Alias"
                  name="cardAlias"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="billingCycle">Billing Cycle</InputLabel>
                <Select
                  required
                  name="billingCycle"
                  labelId="billingCycle"
                  id="billingCycle"
                  label="Billing Cycle"
                  defaultValue="Monthly"
                  onChange={handleChange}
                >
                  <MenuItem value={"Monthly"}>Monthly</MenuItem>
                  <MenuItem value={"Yearly"}>Yearly</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            *required
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
