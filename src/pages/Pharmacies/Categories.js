import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useEffect, useState } from "react";
import axios from "axios";
//import { purple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Navbar from "../../components/GuestNavbar";
import { Link } from "react-router-dom";
const onClick = () => {
  console.log("click");
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    display: "flex",
    marginTop: "55px",
    float: "right",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "30",
  },
  contents: {
    width: "100%",
    display: "fixed",
  },
  content: {
    height: "193px",

    width: "150px",
    //    backgroundColor: "#E1F5FE",
    flex: "1 0 auto ",
  },
  list: {
    // backgroundColor: "#cfe8fc",
    // height: "100vh"
  },
  listcontent: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: "20%",
    backgroundColor: "#EEEEEE",
    display: "flex-right",
    margin: "2px",
    marginTop: "55px",
    border: "1",
    float: "left",

    flexDirection: "column",
  },
  cover: {
    width: "50%",
    // marginBottom: "20px",
    // marginTop: "50px"
  },
  controls: {
    alignItems: "center",
    marginBottom: "20px",
    marginLeft: "20px",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  button: {
    marginBottom: "10px",
    marginTop: "10px",
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const demo1 = createTheme({
  palette: {
    marginBottom: "10px",
    primary: {
      // Purple and green play nicely together.
      main: "#29B6F6",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#29B6F6",
    },
  },
});
export function useAxiosGet(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setRequest({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setRequest({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return request;
}

export const Categories = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          //image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5O71KSU5PAdoL9J0cbINeGpG-qzcxcYKsEg&usqp=CAU"
          image={props.product.profilePic}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.contents}>
            <Link to={`/products/${props.product._id}`}>
              <Typography component="h5" variant="h5">
                {props.product.pharmacyName}
              </Typography>
            </Link>
            <Typography variant="subtitle1" color="textSecondary">
              {props.product.phoneNumber}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.product.pharmacyType}
            </Typography>{" "}
            <Typography variant="subtitle1" color="textSecondary">
              {props.product.openingHr}
              {props.product.closingHr}
            </Typography>
          </CardContent>
        </div>
        <CardContent
          className={classes.content}
          style={{
            marginLeft: "26px",
          }}
        >
          <ThemeProvider theme={demo1}>
            <Button onClick={onClick} variant="outlined" color="secondary">
              View Details
            </Button>
            <br></br>
            <br></br>
            <Button onClick={onClick} variant="contained" color="primary">
              Browser
            </Button>
          </ThemeProvider>
        </CardContent>
      </Card>
    </div>
  );
};
