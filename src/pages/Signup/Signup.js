import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Publish from "@material-ui/icons/Publish";
import Location from "@material-ui/icons/LocationOn";
import { red } from "@material-ui/core/colors";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://veganfoodandliving-1321f.kxcdn.com/wp-content/uploads/2019/03/featured.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 929,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(-3),
  },
  register: {
    margin: theme.spacing(3, 7, 2),
    width: "100px",
    height: "30px",
    fontWeight: "bold",
  },
  cancel: {
    margin: theme.spacing(3, 10, 2),
    width: "100px",
    height: "30px",
    fontWeight: "bold",
  },
}));

export const Signup = () => {
  const classes = useStyles();

  const [pharmacyName, setPharmacyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pharmacyType, setPharmacyType] = useState("");
  const [location, setLocation] = useState("");
  const [openingHr, setOpeningHr] = useState("");
  const [closingHr, setClosingHr] = useState("");
  const [TIN_Number, setTIN_Number] = useState("");
  const [businessLicense, setBusinessLicense] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const changePharmacyName = (event) => {
    setPharmacyName(event.target.value);
  };

  const changePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const changePharmacyType = (event) => {
    setPharmacyType(event.target.value);
  };

  const changeLocation = (event) => {
    setLocation(event.target.value);
  };

  const changeOpeningHr = (event) => {
    setOpeningHr(event.target.value);
  };

  const changeClosingHr = (event) => {
    setClosingHr(event.target.value);
  };

  const changeTIN_Number = (event) => {
    setTIN_Number(event.target.value);
  };

  const changeBusinessLicense = (event) => {
    setBusinessLicense(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const registered = {
      pharmacyName: pharmacyName,
      phoneNumber: phoneNumber,
      location: location,
      openingHr: openingHr,
      closingHr: closingHr,
      TIN_number: TIN_Number,
      businessLicense: businessLicense,
      pharmacyType: pharmacyType,
      email: email,
      userName: username,
      password: password,
    };

    axios
      .post("http://localhost:4000/app/sign-up", registered)
      .then((response) => console.log(response.data));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            <h3>Registration Form</h3>
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              id="text"
              label="Pharmacy Name"
              name="text"
              autoComplete="text"
              autoFocus
              value={pharmacyName}
              onChange={changePharmacyName}
            />

            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              id="phone_number"
              label="Phone Number"
              name="text"
              autoComplete="number"
              autoFocus
              value={phoneNumber}
              onChange={changePhoneNumber}
            />
            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              id="text"
              label="Pharmacy Type"
              name="text"
              autoComplete="text"
              autoFocus
              value={pharmacyType}
              onChange={changePharmacyType}
            />
            <TextField
              label="Location"
              name="text"
              variant="standard"
              //margin="normal"
              required
              fullWidth
              autoComplete="text"
              autoFocus
              value={location}
              onChange={changeLocation}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Location style={{ color: red[500], fontSize: 30 }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              id="text"
              label="Opening Hour"
              name="text"
              autoComplete="text"
              autoFocus
              value={openingHr}
              onChange={changeOpeningHr}
            />
            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              id="text"
              label="Closing Hour"
              name="text"
              autoComplete="text"
              autoFocus
              value={closingHr}
              onChange={changeClosingHr}
            />
            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              id="text"
              label="Pharmacy TIN Number"
              name="text"
              autoComplete="text"
              autoFocus
              value={TIN_Number}
              onChange={changeTIN_Number}
            />
            <TextField
              label="Upload Business License"
              name="text"
              variant="standard"
              //margin="normal"
              required
              fullWidth
              autoComplete="text"
              autoFocus
              value={businessLicense}
              onChange={changeBusinessLicense}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Publish style={{ fontSize: 30 }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={changeEmail}
            />
            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="current-username"
              autoFocus
              value={username}
              onChange={changeUsername}
            />
            <TextField
              variant="standard"
              //margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={changePassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.register}
            >
              Register
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.cancel}
            >
              Cancel
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
