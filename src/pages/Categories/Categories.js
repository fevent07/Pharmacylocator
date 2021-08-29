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
//import { purple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

import Checkbox from "@material-ui/core/Checkbox";
const onClick = () => {
  console.log("click");
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    display: "flex",
    marginTop: "55px",
    float: "right"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "30"
  },
  contents: {
    width: "100%",
    display: "fixed"
  },
  content: {
    height: "193px",

    width: "150px",
    //    backgroundColor: "#E1F5FE",
    flex: "1 0 auto "
  },
  list: {
    // backgroundColor: "#cfe8fc",
    // height: "100vh"
  },
  listcontent: {
    "& > *": {
      margin: theme.spacing(1)
    },
    width: "20%",
    backgroundColor: "#EEEEEE",
    display: "flex-right",
    margin: "2px",
    marginTop: "55px",
    border: "1",
    float: "left",

    flexDirection: "column"
  },
  cover: {
    width: "50%"
    // marginBottom: "20px",
    // marginTop: "50px"
  },
  controls: {
    alignItems: "center",
    marginBottom: "20px",
    marginLeft: "20px",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  button: {
    marginBottom: "10px",
    marginTop: "10px"
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

const demo1 = createTheme({
  palette: {
    marginBottom: "10px",
    primary: {
      // Purple and green play nicely together.
      main: "#29B6F6"
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#29B6F6"
    }
  }
});

export const Categories = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <div container className="list">
        <CardContent className={classes.listcontent}>
          <Typography>Search Filter </Typography>
          <Button onClick={onClick}> Kenema </Button>
          <br></br>
          <Button onClick={onClick}> Shorter distance </Button>
          <br></br>
          <Button onClick={onClick}> less mone </Button> <br></br>
          <Button onClick={onClick}> availability </Button> <br></br>
          <Button onClick={onClick}> 24 hour </Button> <br></br>
        </CardContent>
      </div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5O71KSU5PAdoL9J0cbINeGpG-qzcxcYKsEg&usqp=CAU"
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.contents}>
            <Typography component="h5" variant="h5">
              Pharmacy Abo ndjbkjd kdjvdkv saris
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              0912232323
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              AA saris abo
            </Typography>{" "}
            <Typography variant="subtitle1" color="textSecondary">
              open 24/7
            </Typography>
          </CardContent>
        </div>
        <CardContent
          className={classes.content}
          style={{
            marginLeft: "26px"
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

      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="data:image/png;base64,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"
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.contents}>
            <Typography component="h5" variant="h5">
              Pharmacy Abo saris c vkjsdv
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              0912232323
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              AA saris abo
            </Typography>{" "}
            <Typography variant="subtitle1" color="textSecondary">
              open 24/7
            </Typography>
          </CardContent>
        </div>
        <CardContent
          className={classes.content}
          style={{
            marginLeft: "26px"
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
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="data:image/jpeg;base64,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"
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.contents}>
            <Typography component="h5" variant="h5">
              Pharmacy A vdsnk.vsd vdmkj vdsjk
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              0912232323
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              AA saris abo
            </Typography>{" "}
            <Typography variant="subtitle1" color="textSecondary">
              open 24/7
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </div>
        </div>
        <CardContent
          className={classes.content}
          style={{
            marginLeft: "26px"
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
}
