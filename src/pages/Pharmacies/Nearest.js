import Footer1 from "../../components/Footer/Footer1";
import { Categories } from "./Categories";
import Loader from "./Loader";
import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import GeoLocation from "../useGeoLocation";
import Button from "@material-ui/core/Button";
import Navbar from "../../components/GuestNavbar";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
    display: "flex",
    marginTop: "55px",
    float: "left",
  },

  list: {
    // backgroundColor: "#cfe8fc",
    height: "100%",
    float: "left",
    width: "20%",
    display: "flex",
  },
  listcontent: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: "20%",
    height: "100%",
    backgroundColor: "#EEEEEE",
    display: "flex",
    overflow: "scroll initial",

    // display: "flex-right",
    margin: "2px",
    marginTop: "0px",
    border: "1",
    float: "left",
    flexDirection: "column",
    //  style={{ display: "flex", overflow: "scroll initial" }}
  },
}));

const onClick = () => {
  console.log("click");
};
const Nearest = () => {
  const classes = useStyles();
  const [request, setRequest] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const location = GeoLocation();
  const [pharmaGeo, setPharmaGeo] = useState([]);

  useEffect(async () => {
    // let url =
    //   "http://localhost:4000/pharmacy/nearest?lng=8.8853458&lat=38.8099187";
    if (
      location.coordinates.lng !== null &&
      location.coordinates.lat !== null
    ) {
      let query = localStorage.getItem("key");
      let url =
        `http://localhost:4000/pharmacy/nearest?lng=` +
        location.coordinates.lat +
        "&lat=" +
        location.coordinates.lng;
      const resp = await fetch(url);
      const data = await resp.json();
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

      // resp.then((data) => {
      //   data.json().then((re) => {
      //     console.log(re);
      //   });
      // });
    }
  }, [location]);
  return (
    <div>
      <div>
        <div>
          <Navbar />
          <div container className="list">
            <CardContent className={classes.listcontent}>
              <Typography>Search Filter </Typography>
              <Link exact to="/Pharmacies" activeClassName="activeClicked">
                <Button onClick={onClick}> All pharmacy </Button>
                <br />
              </Link>
              <Link exact to="/Kenema" activeClassName="activeClicked">
                <Button onClick={onClick}> Kenema </Button>
                <br />
              </Link>
              <Link exact to="/Nearest" activeClassName="activeClicked">
                <Button onClick={onClick}> Nearest Pharmacy </Button>
                <br />
              </Link>
              {/* <Link exact to="/Kenema" activeClassName="activeClicked" >
                <Button onClick={onClick}> Kenema </Button><br />
              </Link>
              <Link exact to="/Kenema" activeClassName="activeClicked" >
                <Button onClick={onClick}> Kenema </Button><br />
              </Link>
              <Button onClick={onClick}> Kenema </Button>
              <br></br>
              <Button onClick={onClick}> Shorter distance </Button>
              <br></br>
              <Button onClick={onClick}> less mone </Button> <br></br>
              <Button onClick={onClick}> availability </Button> <br></br>
              <Button onClick={onClick}> 24 hour </Button> <br></br> */}
            </CardContent>
          </div>
          <div>
            {request.loading ? (
              <Loader />
            ) : (
              request.data.map((pharmacy) => (
                <Categories key={pharmacy._id} product={pharmacy} />
              ))
            )}
          </div>
        </div>
      </div>
      {/* <Footer1 /> */}
    </div>
  );
};

export default Nearest;
