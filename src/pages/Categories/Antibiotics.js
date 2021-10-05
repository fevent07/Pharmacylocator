import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import { Link } from "react-router-dom";

import Navbar from "../../components/GuestNavbar";
import ProductCard from "./ProductCard";
import axios from "axios";
import Loader from "./Loader";
const onClick = () => {
  console.log("click");
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
    display: "flex",
    marginTop: "55px",
    float: "left",
  },

  list: {
    // backgroundColor: "#cfe8fc",
    // height: "100vh"
    float: "left",
    width: "20%",
    height: "100vh",
  },
  listcontent: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: "20%",
    height: "100vh",
    backgroundColor: "lightgray",
    // display: "flex-right",
    marginTop: "0px",
    border: "1",
    float: "left",
    flexDirection: "column",
  },
}));
export const Antibiotics = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [request, setRequest] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const url = "http://localhost:4000/meds/medType/Antibiotics";
    axios
      .get(url)
      .then((resp) => {
        console.log(resp);
        setRequest({ loading: false, data: resp.data, error: null });
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          setRequest({
            loading: false,
            data: null,
            error: error.response.data,
          });
        } else {
          setRequest({ loading: false, data: null, error: error.message });
        }
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="list">
        <CardContent className={classes.listcontent}>
          <Typography>Search By </Typography>
          <Link exact to="/Prescribed" activeClassName="activeClicked">
            <Button onClick={onClick}> Prescriped Only </Button>
            <br />
          </Link>
          <Link exact to="/Prenatal" activeClassName="activeClicked">
            <Button onClick={onClick}> Prenatal </Button>
            <br />
          </Link>
          <Link exact to="/Antibiotics" activeClassName="activeClicked">
            <Button onClick={onClick}> Antibiotics </Button>
            <br />
          </Link>
          <Link exact to="/Others" activeClassName="activeClicked">
            <Button onClick={onClick}> Others </Button>
            <br />
          </Link>
        </CardContent>
      </div>
      <div>
        <br />
        <br />
        <h3 style={{ textAlign: "center" }}> Antibiotic Medication</h3>
      </div>
      <div
        className="l"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          griGap: "20px",
        }}
      >
        {request.loading ? (
          <Loader />
        ) : (
          request.data.map((med) => <ProductCard key={med._id} product={med} />)
        )}
      </div>
    </div>
  );
};

export default Antibiotics;
