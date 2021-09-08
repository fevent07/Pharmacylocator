import React, { useState } from "react";
//import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    align: "center",
    marginLeft: "50px",
    flexGrow: 4,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    alignContent: "left",
    marginTop: "130px",
    marginLeft: "250px",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
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
}));

// const cards = [1, 2, 3, 4, 5, 6];

export const Home = () => {
  const classes = useStyles();
  const [searchResults, setSearchResults] = useState({
    loading: false,
    data: null,
    error: null,
  });

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
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <bold>Pharmacy Locator</bold>
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
                placeholder="Search products,medicine"
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
            <Typography align="center" color="textPrimary" paragraph>
              eg. painkiller,advil, etc....
            </Typography>
            {searchResults.loading ? (
              <div className="loading" />
            ) : searchResults.data && searchResults.data.length ? (
              searchResults.data.map((medicine) => (
                <p key={medicine._id}>{medicine.medName}</p>
              ))
            ) : null}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
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
                    Find Product
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
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
                    Find Medicine
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
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
                  <Button size="small" color="primary">
                    View
                  </Button>
                </CardActions>
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
