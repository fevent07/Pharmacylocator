import React, { useState } from "react";
//import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import "./home.css";
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import background from "../../components/images/location.jpg";

import background2 from "../../components/images/feedbackBG.jpg";
import Navbar from "../../components/GuestNavbar";
import { faLandmark, faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Footer1 from "../../components/Footer/Footer1";
//import { Style } from '@material-ui/icons';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,

    backgroundImage: `url(${background})`,

    backgroundImage2: `url(${background2})`,
    backgroundRepeat: "no-repeat",
    // //  backgroundSize: 'cover',
    //  backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundPosition: "bottom-center",
    backgroundAttachment: "fixed",

    display: "flex",
    padding: theme.spacing(8, 0, 20),
  },
  heroButtons: {
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(0),
  },
  button: {
    margin: theme.spacing(1),
  },
  titleGrid: {
    align: "center",
  },
  cardGrid: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
    maxWidth: "100%",
    paddingLeft: theme.spacing(18),
    paddingRight: theme.spacing(17),
    backgroundColor: "#edf3f9",
  },
  card: {
    height: "100%",
    display: "flex",
    width: "90%",
    flexDirection: "column",
  },
  carder: {
    height: "100%",
    maxWidth: "63.333%,"

  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9

  },
  cardContent: {
    // maxWidth: "19.333%",
    align: "center",
    marginLeft: "2px",
    flexGrow: 4,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    alignContent: "left",
    marginTop: "130px",
    marginLeft: "150px",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  iconButton: {
    padding: 10,
    height: "40px",
    width: "40px",
  },
  iconSearchButton: {
    marginTop: "0",
    marginLeft: "250px",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  p: {
    marginLeft: "250px",
  },
}));


// const cards = [1, 2, 3, 4, 5, 6];

export const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [searchResults, setSearchResults] = useState({
    loading: false,
    data: null,
    error: null,
  });

  // function onClick(event) {
  //   event.preventDefault();
  //   history.push("/Pharmacies");
  //   console.info("You clicked a breadcrumb.");
  // };

  const searchClick = async (query) => {
    console.log("here")
    await axios.post('http://localhost:4000/search', { query });
    // history.push("/TO MEDICINE")
  }
  const searchMedicine = (ev) => {
    // useEffect(() => {
    setSearchResults({ loading: true, data: null, error: null });
    axios
      .get(`http://localhost:4000/meds/search?q=${ev.target.value}`)
      .then((resp) =>
        setSearchResults({
          loading: false,
          data: resp.data,
          error: null,
        })
      );
    console.log(searchResults);
    // }, []);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <div className="title1">
                <bold>Pharmacy Locator</bold></div>
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Find your medication Discover the nearest pharmacy
            </Typography>

            <Paper component="form" className={classes.root}>
              {/* <SearchIcon className={classes.iconButton} aria-label="menu">
            <MenuIcon />
            </SearchIcon> */}
              <InputBase
                className={classes.input}
                placeholder="Search products,medicine  Eg. painkiller,advil, etc...."
                inputProps={{ "aria-label": "search google maps" }}
                onChange={searchMedicine}
              />
              {/* <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </div>
  
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton> */}
              {/* <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <DirectionsIcon />
      </IconButton>      */}
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton
                color="primary"
                className={classes.iconButton}
                aria-label="SearchIcon"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
            <div style={{ backgroundColor: "rgba(175,212,238,0.5)", borderRadius: "6px", width: "600px", alignContent: "center", marginLeft: "150px", marginTop: '7px' }}>
              {searchResults.loading ? (
                <div className="loading" />
              ) : searchResults.data && searchResults.data.length ? (
                searchResults.data.map((medicine) => (
                  <p style={{ paddingLeft: "5px", color: "black" }} onClick={() => searchClick(medicine.medName)} key={medicine._id}>{medicine.medName}</p>
                ))
              ) : null}
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} >
          {/* End hero unit */}
          <div className="titleGrid">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <bold>What are you lookin for ???</bold>
            </Typography>
          </div>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://thumbs.dreamstime.com/b/storefronts-pharmacy-big-hand-vector-illustration-building-design-sales-cartoon-medicines-pills-sprays-store-fronts-180943943.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Find Pharmacy
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                <CardActions>
                  <form>
                    <Button size="small" color="primary" onClick={() => history.push("/Pharmacies")}>View</Button>
                  </form>

                </CardActions>
              </Card>
              {/* <Button onClick={() => history.push("/pharmacie")}>View</Button> */}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvzteLCxjkxenBcnRpiLtC9OJKcO1AUDqXg&usqp=CAU"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Advil
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                <CardActions>
                  <Button Styles={{ border: "none" }} size="small" color="primary" onClick={() => history.push("/Prescriped")}>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKpRGeS-bT9WwJhW8wzWeKnhIlJRuU1BnQ6IWxJxIh-5vL29oTrLaaxmBoGu_oleukbE&usqp=CAU"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Health Tips
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => history.push("/healthTips")}>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <bold>Covid Informations</bold>
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Find your medication
            </Typography>

            {/* <Paper component="form" className={classes.root}> */}
            {/* <SearchIcon className={classes.iconButton} aria-label="menu">
            <MenuIcon />
            </SearchIcon> */}
            {/* <InputBase
                className={classes.input}
                placeholder="Search products,medicine  Eg. painkiller,advil, etc...."
                inputProps={{ "aria-label": "search google maps" }}
                onChange={searchMedicine}
              /> */}
            {/* <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </div>
  
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton> */}
            {/* <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <DirectionsIcon />
      </IconButton>      */}
            {/* <Divider className={classes.divider} orientation="vertical" />
              <IconButton
                color="primary"
                className={classes.iconButton}
                aria-label="SearchIcon"
              >
                <SearchIcon />
              </IconButton>
            </Paper> */}
            <div style={{ backgroundColor: "rgba(175,212,238,0.5)", borderRadius: "6px", width: "600px", alignContent: "center", marginLeft: "150px", marginTop: '7px' }}>

            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} >
          {/* End hero unit */}
          <div className="titleGrid">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <bold>Popular Medications</bold>
            </Typography>
          </div>

          <Grid container spacing={4}>
            <Grid item xs={4} sm={4} md={4}>
              <div className={classes.carder}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="data:image/jpeg;base64,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"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      viagra
                    </Typography>
                    <Typography></Typography>
                  </CardContent>
                  {/* <CardActions>
                    <form>
                      <Button size="small" color="primary" onClick={() => history.push("/Pharmacies")}>View</Button>
                    </form>

                  </CardActions> */}
                </Card>
              </div>
              {/* <Button onClick={() => history.push("/pharmacie")}>View</Button> */}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="data:image/jpeg;base64,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"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Amoxycillin
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                {/* <CardActions>
                  <Button Styles={{ border: "none" }} size="small" color="primary" onClick={() => history.push("/Prescriped")}>
                    View
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="data:image/jpeg;base64,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"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Eye Drop
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                {/* <CardActions>
                  <Button Styles={{ border: "none" }} size="small" color="primary" onClick={() => history.push("/Prescriped")}>
                    View
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="data:image/jpeg;base64,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"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cough Syrup
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                {/* <CardActions>
                  <Button Styles={{ border: "none" }} size="small" color="primary" onClick={() => history.push("/Prescriped")}>
                    View
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-D7TRY9NU_uW-Zsbrz-1KR___U_jYJM3H_Q&usqp=CAU"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Omeprazole
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                {/* <CardActions>
                  <Button Styles={{ border: "none" }} size="small" color="primary" onClick={() => history.push("/Prescriped")}>
                    View
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="data:image/jpeg;base64,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"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Advil
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                {/* <CardActions>
                  <Button Styles={{ border: "none" }} size="small" color="primary" onClick={() => history.push("/Prescriped")}>
                    View
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="data:image/jpeg;base64,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"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Health Tips
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small" color="primary" onClick={() => history.push("/healthTips")}>
                    View
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      End footer */}
      <Footer1 />
    </React.Fragment>
  );
};
