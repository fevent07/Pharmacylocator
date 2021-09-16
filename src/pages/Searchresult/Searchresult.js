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

//import Checkbox from "@material-ui/core/Checkbox";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    display: "flex",
    marginTop: "40px",
    float: "right"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "30"
  },
  contents: {
    width: "350px",
    display: "fixed"
  },
  content: {
    height: "193px",
    //    backgroundColor: "#E1F5FE",
    flex: "1 0 auto "
  },
  list: {
    // backgroundColor: "#cfe8fc",
    // height: "100vh"
  },
  listcontent: {
    width: "25%",
    backgroundColor: "#E1F5FE",
    display: "flex-right",
    margin: "2px",
    marginTop: "5px",
    border: "1",
    float: "left",

    flexDirection: "column"
  },
  cover: {
    width: "30%"
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

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <div container className="list">
        <CardContent className={classes.listcontent}>
          <Typography component="h5" variant="h5">
            Search Filter
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Kenema
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Shorter distance
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            less money
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            availability
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            24 hour
          </Typography>
        </CardContent>
      </div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="data:image/jpeg;base64,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OnVpoitIu7J22u74M3Ol6HPhyKy7KSR7wUUoeVj9ATtyKPoZaO4i9bOwwedy9+VLTH8d/M35aR8ie8572xx0uP0DNXwsCx8thX4ek6UKFAVRQAAA+A4nNe2GMaFavNq038CCf5CXmvlN8j+VnJxETE5S7HtLm9E/A/1kPT+N5EJKqm/qD8ON9uJVRLczLc8upcf4hz/tDk/dHe9vz/KZD2kz/u/8ZSxHMxzy6l1/ibP+5/xkZ9oeo/zP+q/0lTEjmZPxJdWW3+Iup/zP+q/0mX+I+p/zB/wX+kp4i2Piz/qfqy5b2j6n/MA+SL/SY/4h6n/N/wCqf+sqIkWW+Pk/qfqy6T2l6kf/AGA/NV/kJkPabqd/ODfcqnx+HxMo4glcTmW05erLpfaTqB99f+C/yEZPaPqDXnA/2KefmDKWJFF/4ziP9yX/ACf6nR9L7ZdZjBGPNpB/dX+YM2B//QOvsH3/ANPd46P/AFnKRMZcLgk7lCLfgjKWbJJ3KTb722dXn9u+tdGxu6kMCD5ADRFcrVczmXcn+n98yKJfHix4lWOKXhoUlJy3NxesYJo2qw11vYFA/Ghdely48O9qPc6fd9NiGm/2yxJ7liSdt/8AkZzcTQtDJKDuLotvEvFTlJIRUBZ20rZAZwAxF8bKPzk//wA8f0cdOcS6QNmttQa7D88/33lFEBZJJt3vubL9STsfh69uBudh8ps9b4mcuRXyIlKoTQuoLpF0Njff17StiCqbSo2OoyBjaoEG2wLEX6+YkyC55EEG/wBZ4i+RQhoKCCFUUB5Qv8AJNm8bzMhTUApRUIUAeVLoWPnv6yqiTbJ5mTvmJN8VwAKA+Q4ExzZWdizElibJJsk/ORRIIJEcjg/3YP8AECbubxbMxDHIbG400u9EXS0CaJF+m0rogFmvjnUAADK1Djj+kg6rxDLk2yOWF3R4v1r6zTiS5Nk2xERIIEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/9k="
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
            <Button variant="outlined" color="secondary">
              View Details
            </Button>
            <br></br>
            <br></br>
            <Button variant="contained" color="primary">
              Browser
            </Button>
          </ThemeProvider>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="data:image/jpeg;base64,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OnVpoitIu7J22u74M3Ol6HPhyKy7KSR7wUUoeVj9ATtyKPoZaO4i9bOwwedy9+VLTH8d/M35aR8ie8572xx0uP0DNXwsCx8thX4ek6UKFAVRQAAA+A4nNe2GMaFavNq038CCf5CXmvlN8j+VnJxETE5S7HtLm9E/A/1kPT+N5EJKqm/qD8ON9uJVRLczLc8upcf4hz/tDk/dHe9vz/KZD2kz/u/8ZSxHMxzy6l1/ibP+5/xkZ9oeo/zP+q/0lTEjmZPxJdWW3+Iup/zP+q/0mX+I+p/zB/wX+kp4i2Piz/qfqy5b2j6n/MA+SL/SY/4h6n/N/wCqf+sqIkWW+Pk/qfqy6T2l6kf/AGA/NV/kJkPabqd/ODfcqnx+HxMo4glcTmW05erLpfaTqB99f+C/yEZPaPqDXnA/2KefmDKWJFF/4ziP9yX/ACf6nR9L7ZdZjBGPNpB/dX+YM2B//QOvsH3/ANPd46P/AFnKRMZcLgk7lCLfgjKWbJJ3KTb722dXn9u+tdGxu6kMCD5ADRFcrVczmXcn+n98yKJfHix4lWOKXhoUlJy3NxesYJo2qw11vYFA/Ghdely48O9qPc6fd9NiGm/2yxJ7liSdt/8AkZzcTQtDJKDuLotvEvFTlJIRUBZ20rZAZwAxF8bKPzk//wA8f0cdOcS6QNmttQa7D88/33lFEBZJJt3vubL9STsfh69uBudh8ps9b4mcuRXyIlKoTQuoLpF0Njff17StiCqbSo2OoyBjaoEG2wLEX6+YkyC55EEG/wBZ4i+RQhoKCCFUUB5Qv8AJNm8bzMhTUApRUIUAeVLoWPnv6yqiTbJ5mTvmJN8VwAKA+Q4ExzZWdizElibJJsk/ORRIIJEcjg/3YP8AECbubxbMxDHIbG400u9EXS0CaJF+m0rogFmvjnUAADK1Djj+kg6rxDLk2yOWF3R4v1r6zTiS5Nk2xERIIEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/9k="
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
            <Button variant="outlined" color="secondary">
              View Details
            </Button>
            <br></br>
            <br></br>
            <Button variant="contained" color="primary">
              Browser
            </Button>
          </ThemeProvider>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="data:image/jpeg;base64,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OnVpoitIu7J22u74M3Ol6HPhyKy7KSR7wUUoeVj9ATtyKPoZaO4i9bOwwedy9+VLTH8d/M35aR8ie8572xx0uP0DNXwsCx8thX4ek6UKFAVRQAAA+A4nNe2GMaFavNq038CCf5CXmvlN8j+VnJxETE5S7HtLm9E/A/1kPT+N5EJKqm/qD8ON9uJVRLczLc8upcf4hz/tDk/dHe9vz/KZD2kz/u/8ZSxHMxzy6l1/ibP+5/xkZ9oeo/zP+q/0lTEjmZPxJdWW3+Iup/zP+q/0mX+I+p/zB/wX+kp4i2Piz/qfqy5b2j6n/MA+SL/SY/4h6n/N/wCqf+sqIkWW+Pk/qfqy6T2l6kf/AGA/NV/kJkPabqd/ODfcqnx+HxMo4glcTmW05erLpfaTqB99f+C/yEZPaPqDXnA/2KefmDKWJFF/4ziP9yX/ACf6nR9L7ZdZjBGPNpB/dX+YM2B//QOvsH3/ANPd46P/AFnKRMZcLgk7lCLfgjKWbJJ3KTb722dXn9u+tdGxu6kMCD5ADRFcrVczmXcn+n98yKJfHix4lWOKXhoUlJy3NxesYJo2qw11vYFA/Ghdely48O9qPc6fd9NiGm/2yxJ7liSdt/8AkZzcTQtDJKDuLotvEvFTlJIRUBZ20rZAZwAxF8bKPzk//wA8f0cdOcS6QNmttQa7D88/33lFEBZJJt3vubL9STsfh69uBudh8ps9b4mcuRXyIlKoTQuoLpF0Njff17StiCqbSo2OoyBjaoEG2wLEX6+YkyC55EEG/wBZ4i+RQhoKCCFUUB5Qv8AJNm8bzMhTUApRUIUAeVLoWPnv6yqiTbJ5mTvmJN8VwAKA+Q4ExzZWdizElibJJsk/ORRIIJEcjg/3YP8AECbubxbMxDHIbG400u9EXS0CaJF+m0rogFmvjnUAADK1Djj+kg6rxDLk2yOWF3R4v1r6zTiS5Nk2xERIIEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/9k="
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
        {/* <CardMedia
          className={classes.cover}
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIWFhUXFRUWFRUSFxgYFRYWFRgWFxcVFhUYHiggGBolGxYWITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLTAvLTAtLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EAD0QAAICAQMCAwUECAYCAwEAAAECABEDEiExBEEFIlEGE2FxgTJCkaEUI1JiscHR8BZTcoKSojPSFUOyB//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAA2EQACAgECAwYEBAQHAAAAAAAAAQIRAyExBBJRQWFxgZHwEyKhsQXB0eEUQlJiIzIzU5LC8f/aAAwDAQACEQMRAD8A+c4+h6fBR6jIcnPuxjYgAWfTjm7B5v61/X0/UZA7ggBgp1gjb7PnrzVd+pr1MqlVSSSaHYcn5S06XLiXC+NiQ2QISRTAAMCONwaJ2/d+O2fLWp2/FU1yJKK33buk9G+3u6d5V5MZBrff7NirB4NfGZ5ukdL1oy0xWyDWocrfrOw8Q6lVVPfY9IxtjfC6kZEdVK3jUgCrQcHmph4z1GJsFfZYornux94AyAXe+2/B8p3AlVkk60NZ8BGKl8+qV7V9/pta11OMO5+JPy5/hJOoxaWq7rYkVVj0I5Hxkx6MobyAqNYUg7Hcaj6kUCO3eSdV0zYi6MFNtp1mjVG7FXVivpNbR5/K6bodP4jlxoyhyA66bN8LvQ+B4+pm14pgPTZ2BQNdOhfVwTqvykb3YPyl51DJmx9OrKGdFbJ7vGoTWg7KGPB0g8AkAkDePED+mr0+dEJC5RjyIRezFST8V/rOb41StrTW9e3s6PZdPA9N8K1BpSuSpx/7aa7c11vpfQsfZvxTO7KmTpgiMC6vjUhaIsXyN/nc6lTNbCgAAAAA2AGwAHAAk4M8rI1KVpUfRYsUsceWUuZ9dPyry0+xMDPbkdxcrVmpTe0HhevBkTCqq2R01lQBduLZq52szV8P9lkxnES+r3Yc6SopncUWPwoDb4D430c8MfFyRjyp6ftXiYT4TFOfPJbV4aO9ttzi/bfwhsj4mxAlyDjCigKQM+35/lM/YzwfLgy5fepR0JTDfkkkAj5b/ITqs2FSyseUsj6gg39CZW9V7Q4MSqzkrqulq222NgdrHM0WTLLF8GKtfXe19v3MJcJhhn/iJOq1302rW+99fI5Hx13dG97kCIuTM2JNJLOxyWQWrbbICN+N5T9GjqPfq6ppYBS27WKNqtHjY2OJaeK+PJlBVcBKe9982pjzpGMDy1pFAdzuZlh8JzvmXPhwK2N3LohK6FW7CuAQF2raenB/Dx1Oo+arw8WeJlis2a8bcnpspWu/wWlJavTzrcnTfqPeEAec6cnm/XE6bVRtQWibrk1MeqKPqyNl/WOwZlCtQDE6vMea8u0ssfijHPhyZD7wgZB7rQPJkJagFs2SxU6tj+E0+i6Ug4MgN68gVvdlWdSWP3K8pK8AgjY/IaqTX+bT29Pp59mxjKCekNdl9qlo/wC7tva5W2zqPDHGfEq5caZBj2DgbMo2DksNq2BFgje+RLLpfEPd+VEx4kF151ONx6r5hXfv9JJ06O4oXQP3/drjY/vBBbnjsBxvNrrOi1L+sYUCNsa6BVi73Jba9idJvcGeW5pvb86PoYwkla360tfPXSu/Xt765uvzZaDBxiblsQWsgPbGzb0fXn9m+ZSeK9XgCHGvSvpJJFEbKpFtSknci7255qdL41mXDhZ2wI9aaUbKSWABKHjcji554v4bkyV+vGNdzldR562pMZP2Vq733J47S+OSjUq08/y33/8AEUzYpTTinb7dE9Hp20ktOv6vks/Xa9sWMe6LD9HxlQNLuhRyO7AEsdiaIWc91mbJlyMXtshO+29gVVD0A/KW3ifSa8QzYwRjDlRrYl2si8rM3AJKCvr6zRTCiA6tXvBZYHZUGxVtSklibAqqFz0caSWi/X31PB4jnlKpbb93dX1SXYuiTKqSIt+nfnbgXMW5maITdAmhZrsPU/iJqcRJ07hWVjR33BF7etcHn8pYeO+bPkGNRoFNWNaWqB1FV2HPMp5Liylb0mrBB+R2IkVrZeM6jyvrf0a/M3Og6wY9Y0gh1KmwCwU39ljsDxvX4SDEgABb73Fbkb81feiN/W/SQK/HejdHjt/SdJ4L0CHTlfJj1Mw0IrkOpv7QUDkGvLttx2kOlqXxwlkddPoihXC7KzBSQPtNRNUO57TVnR+LthJworlR5veH7RUO1glR96vug/gSZQad6vvVn+Jkp2iuSHK6uzHaJbdN1mNVCtiViLBbbfcxFkcveeY/B2/WhmVTi5B31bEnTX0/ESvxAk8XxfysDn6gfWd6nQ42RcWolWFqV0+dftfaK6rquT6TR8I6NcVk6db2xxtuMaLfma/tV5rrk0PUzNz0Z6M/w/WKj327vw/JdXvVFX1mXJpOM4WKYHJXVq0qrGwrjuaO2/HwjH45eZs748ZNIBYBorQDKNvTtxtPMvRal94T7pcrtoB2X3arqvSOxIX8PlKbMzMdTfeJ3rn1O0lRTMcuSeNqn9norrSujVWtb06F74llzdSwQriNuSHxkenLsTait6YA897kmb2bze5AQAsuTJtfK+RQQWrurH5Tc8G8NyJnBBQoyLuoIR0IIsg/e+yf91+s6lBMZZHF1GqPVxcEuIU5Zr5np5aPT367lSPBSepx9RqUaUAZVFeYJpGnsF3/AC+MuOh6VcYKrwWZvqxJIHw3mayQGck7lo+5eh6uPDCDbit3fn7RIszBkYMyBmDibUSAz2R3MrlaJMrgmeXBlWgVfjfWFEIC6iy5LJICooHmdrBsCxtRu6nAdH0z9VlZ3vQi+d0UKFVVNUv2QTV1sOZ3PtOhPS5qNeS/oCCR+AM+c9L0uRsbut6EoE77liFCiuTvxO/go/4brR3V+n17F6ng/i8v8aEZJuNN1tdb/Zvw0Vblrj6j3XSFLUe/DEaQDkYKRQyfs3e3wvfiVIy5NFhzpBCUGI5sjYduZbdB7MucyJloDSMjrZsJqA0kgbMd/wADNDrvDyM2dVFLi1NRPCagF+J+0s6oZMfM1F99+Lo83Liz8kZSTSXypdu1vTpu37Zj4a6J+sffzAAd+5Lgdyp0mjQO433m2M2TAzZEojKG922OtNhrUhSCUIIOxAPpNXxHw849Lj7D3psjUpXZkYeoPfg7es2PDsqLiylhRIBUpuVOqgLJIW9961Cr773dP5t/f6mcOaL+G9Gtb8t++1ttuvB/SOjbRiT3lKVRdfAUEKL+Qu5r4fFUz48vuzYXUoP7R03a/X+E5Pwfxk5sbdNmOskH3euzbDgMR9quaPNc8A6HVL7lE/Rw1FLyZSlPqPK2ReNaqq5vvOBcN8zUt+zp77PHQ92X4iuRTgrjTv8AqvpW2m7177R0ObxrUzdI+VWJOkZq2YUaRhVBw2ncbfIzofG8yDGRkZVVzR1EAEHbv8SD9JwHsooOVeVXGGy5HFajp+yAasL8O+/0hx+KoS7HGurc4wyhkUAr5Ap2UFdQsAb6aqbvh05Uuzw1f5HLj49rHzZP5rS1ey7H2uravS32tnVeIv0wJ6hNORcWK8aKbRXBCglV2G2nc+gnC5cObJeUo7AjUX0kiuLvihVfSfROjGPIlEKFzdOnlClQNZbjSCSRXJvgcSh6zwbK2NMePqR7sKF0vaKzVZ93QtwTfbk1vJxPl9t6a6dhHG4JZKddXUaWu2tvpVVt2HK4vKNTISrBlBuvMANwa7WNvj8ZJ0XVMl+7PmZWRgVBBQ0Tz8vSdN1fs7kTpsaZMgVjk8qbFC7XZZjWkhFJ+PHM5F/KxCte5AYWLG4v1ojt8Z0RkpbHlZMeTA1dp14PXf3v3IxyOWJJ5JJPbc/AcTEDff8AKY1JBkOkr2JB+osfzMuc5FNvDqYFQCwCsQCTScMzDehsP7NTUk3mX1G2/bY/yMEol6frXRxkB8w2ve6quflI71PZNWdybNWeT3MgkmNLIHqQPxgW9i0bL0oNDHkYftFgt/Gq2nk0OqwHG7I3Kkg0QRY9DEgtLJTaaXoWvS+KuoxBmtFDUqGjdkKMh9PgO02fA+lXMR717UBggsqQ5NtVc83z3G3pR9N0rOSFFsBenufWpdeFBsb6QzNj8uWl2LAbEhSDZB2Iu9tpD7jrwTcpR51cV+y9NPI6bF0d0cjayFCq1AHkkmhwd1H+2Vh9mULOBsukaOSQSCG7+oU/Uy7wuCAQbBFg/AyQTLU918PhmlzK/f1/ZGHh/Te7xql3pULfF0KupuLIgZmDMnE6oVFJLZEqzMSMGegzNxNkyUGZgyIGe3MpRLoluZXIg0zuZSiWoyue3I7ntyjRNHjrc18fRIoAVAoU6gFFAHfeht3mxc8mbRPKnujUwYSHyO3LaVX/AEIP/ZnP1Eq/GvCyc2LMq2dSJlX9rGWAsjvX98S+nkvGTjLmXtGWXBHJDll1vzu/a6Wii6z2cXLmR2b9WigaO7sCSST2B2uvjNPxL2dZky6d8mXqA+2wVLYAb9gGJ/D0nUGeTVZcmmuxjPgMElL5d7+qry02/XU+aYfDKzIrZBjV9TI7beUagrb8aiu3zBm303jGTLk6bGchxqmhSddaqO7Mf9NAA/znXeI+B4Mra8iW1AXrYbDjYGpxftOuFMnusWIoU2Yk7Ne/B3783O/HlWV1Wtd2h4fEcLk4OLkmuW1pbuWzrbSqb8NNTez9XjPX5TqU42UqxZqDAIAQDtZ1DYbXXO9zm8mA69K21mkoG2F0pA53niZCDr53+8AwJ72CKPM3H8Zys+PJYDY/saRQHmLXp45PAoTeMeVUuleh5k8qyNuWmren9zt+nYWo8SdcWDFiF5CosABgReRQhUg21MDvxYquJL477Su6hVoakVrUm0Y6ta16nuaBo+h35n9IbVrDENd6gaN+tiYNl2AobXvW+9cnvx+ZjkV2XfGZOXlTdaLyXv7dCTH1LgkhjdEcnggg8fAn8Zn0PS68gRmCXds3CgAmz+E9x5VVCDj1EkFWYkAABgdhubJvmvKOZ7i6e0bISKUgAHlie3PAH98kWOeK1XaBkCoQCrFrDAr9nSRpdW9TuPx9ZpgXxMkS742F7kD8L5PwmI9ZJWzwiS4SLGqyLFgGiR3APYzZXG7YmcsNIa9yNTOaBA7nY3+Mi6coD5xYPcGiPl/DeBRERZ2232s/xP8AORrJnTijseCaHz2s1vIIIL9vZzINtjsDY7gix39DEq16hfvJqPclms/nEjU1vH0+v7HR+F+FlMrZCRywUD0Pr6dpvdL0RXMzbaGBI9Vc1qr4Hn6TbUSRZZxPYxwjFJLrfn792kyVJIDIgZmDM3E64zJgZkDIQZkDKuJ0RmThp6GkAMyDTNxN4tE+qZAyANMtUzcTaJMDMg0gDTINOeUTVInuNUh1QGmUi6RNcXMNUxuY0TRJcXI9U81SUKJLi5EGnuqapENEfW59CM54Uaj9Bc+b9B0eTqctb2x1Ox4AO5b+k+lEyHqtWhtH2tLaf9VHT+dTrwy5LpHm8bwS4hxcpfLHddfO+mmx868eCjqMiogVVYqoX0XYH5mr+s1ej6g42DgAkXWoWASCAwHqLsfECdL03svq0I7EZCmR3IN0SQMan66ifXfec7+isFc6WOhgpYfZBJIo2Ls9uODOyLTVHy3EYcuOXPJVbbXd215XXkQ58xc6m5NcADgVwNu0giSO19gNhx/GXOUm6fIupRk1FACKB3F2fLfxNyfosjvpw6wFJIXWLVSwI2sHTd8j59pq4XCsCQGHcHg7cbSfogpyW7+7Xm11X8loEg/OQWjujYzeGafdqwZXyEfboaR3JTkDdSCa2B2lfjxliFHJNC6HPqTsJfdO75yuXKRpRSrOceoC6GrIFYEm2q/gNqlj0XgS4g+XyZSDk0mv1YoNWzGmNrsN+d+1jb4PPrHb8vdnKHK9DEzEKGuvugmrNDntJ+s6UImMkUzC6J3oMw1EfdBFV8pN450YxPXvfeMWJLagbFLRNE0SdXJ4qVaqTtJMpLlbTJiBsBuTVaRvZry/H8OTNabfQ4yWsMqlfMNZoErvQ+O0l8YQDKxA0hvMFPIvcg/I2IK1pZrr0rncIxHYgE/nPJs9N4iUULXF+nc3EtyrqT8p2yyRTIlkgl6PUjMkEkEjEzEq0bxmZAzK5gJ6JRxN4TMrntzG4lGjqhMz1T3VI4uZuJ1wlZNqjVIQ0apjKJ1QNkPAaQB56HnJOJskTlo1R0uFnOlQWPoJdY/ZjORdAfAn+gnJPLGLp7/X0VsplzYsP+pJLxaRSFoLTY8Q8NyYtmU/Pt+M0FaXxyjkXNF2jSLjOPNF2iZWnuqQK8zHr29e064xKyRncyBkc5vxr2hfDkONcfAG+S97HIA7f0nVCFnFxXE48Eeab09S96jxIq7YwlvWM4Rf/l1HSfkFO5+G8ofaLxltRR+mtBag5dYVjwzoNqPFGyQPmZVL1r5s/vEJxFUyMTqJVTpayL+yGJA+ZlX07FiuItSFxzwC1Atvxt/CbxgkfNcR+IzyJxi9G3W1Vem67/tu7NdxX13mJlj4h0Hu1Q6tWsvwNqRtIYHuCN5pHGQASDR4PY9tvXeaHlNOLpnmICxq4sXXp3mQW2pQTZoDud9vrIyskxqx3UHajte24AP4kD6wQb3QdVkxM2imBFMD/wCMhqA171XHJ+fpOhz+H4zjxHPkZcbEaERqwqcgYggtqKrsTuNrquTKfxX2fyY3OkakKtkBHIRaJ1fKx85bdVmfDgxIyM492UyA3X61bxrV1ashFfD1MHVBOKamtvQl8U9ngMZbGiJo2xgsSX7szMTRO3lFfPsBzq9Jq6ZslWwygE0bChCSP74qWPT+Lt0/T4tNNke2t7OnGrFAgHzU7+m3pLHxHbLpVPKVfLkxpRceT3ZY7gCw5FWTQvkyaElCWsV2fcpfD/B/eG8obGCNQIXyMCNtLHYH4TX8X6YKuJgxJZBqBq1Khdtu1EVOvzeJY2xlMdhyNCqylWFir0nc6Rua9JTe2qgDCB+8AfgAtSWqRWcIqL5dTk4iJU5z6KslEiZiBdE8nb4fOaPRdWXc7mjaqONJG/8ADv8ACbncplqJlcwUVtz857FGqkSXMrkQM9uVaNozJLnsjue3KNHTDIZzyeT2ZuJ148h4Zhk2NScCq2u6/MA/z/KYOu5PwH/5J/lKONnbizkAeZDJRnijv8z27VsL2HP8JFdn6fS7rj6/Wpz5MVnoQmmfT/ZTw5ceIMR52AJP+rgToNc5zwbrQ+FGX9kAjuD6TcOc+s+e4T8T/h1KMo/Nbt9fHw27j4TjOfJnlKe9m54jhTIhVwCCO8+WeJYDiytj9G2+R4n0Vs3qZ8+8f6tWzu9jSDpvatt/5/lNuF4l8VxcpRjS5de99jff77D2PwGcoSlH+WvK/dnNZvHL1YgrplohNdXq4r4E8b95unxQ6jl+6iYkYGwAcjEvak7KFAHHx+MrvE/Bl1tkXJiXFYJAN6SdtOkKbs9r79pF0OT36r0qmy2lRkdR7ygzHQtHZQFP2mOw7cT6KMIpaHNn4viXPlzPX+Wq1atR7e11r26J1R1PTdRjylhjyK1c6aNXwdpx/TeEF8Wdc7MmTBpKlyxUIb207+Xy8j1EsE8Q/RlQ/o6BguRA6HZiurWpHOxA3JPIPepln9oshKZMuENgdTtVA0gLCwabzatm5AHHMso1sV4ri8Wavi7q7VOqa3fbo611+pyx6osDjQBVc4/Lt9pQFDFtqvf4b/CaBnXe1XS9Pia0JDMlqmMBaJ++T91Sv3e+/HM1/EE6fFjUjHq97jJWyQV81ajZNGuCPTgWZc8qeKSbUmtCjy5wVCAbCjvubrcAkbC7/KbPiGQMMS2GKrotLIIu12IB1bm/pNLLRPlFDegTZq9rPc/ID5TY6zB7sYjyWQObojdmofgBY9SZJkm6aLjrVxYV0Ek5GTCr610HRdlSKIU0uPzei8WTNrpcuDp8QcMuRi2vIMRA0kD9Wou6QF+wux8KnN9SuQhMr2Q10T+7938K/GW/X+Cr7v36BtJ8xUabCeQ7jt5XBFX3uq3lF1N22kY+LddrL+58gxk6jiusilgNbFQBzp5/jMen8SOgl+oeiANBrI3lsg2wpfNuOKkGLw5VXHldlOPIGAskEPTgAgb0GVbP7wlWUokNYI523BHao2KuUrtln4nkOQ41FtkGrVQWrY6/KFJ9ST2smW3s/wBGNPvBl1nIQjoOAH1Al75aiTx6yi6BA7Mp0qCvOnVpoitIu7J22u74M3Ol6HPhyKy7KSR7wUUoeVj9ATtyKPoZaO4i9bOwwedy9+VLTH8d/M35aR8ie8572xx0uP0DNXwsCx8thX4ek6UKFAVRQAAA+A4nNe2GMaFavNq038CCf5CXmvlN8j+VnJxETE5S7HtLm9E/A/1kPT+N5EJKqm/qD8ON9uJVRLczLc8upcf4hz/tDk/dHe9vz/KZD2kz/u/8ZSxHMxzy6l1/ibP+5/xkZ9oeo/zP+q/0lTEjmZPxJdWW3+Iup/zP+q/0mX+I+p/zB/wX+kp4i2Piz/qfqy5b2j6n/MA+SL/SY/4h6n/N/wCqf+sqIkWW+Pk/qfqy6T2l6kf/AGA/NV/kJkPabqd/ODfcqnx+HxMo4glcTmW05erLpfaTqB99f+C/yEZPaPqDXnA/2KefmDKWJFF/4ziP9yX/ACf6nR9L7ZdZjBGPNpB/dX+YM2B//QOvsH3/ANPd46P/AFnKRMZcLgk7lCLfgjKWbJJ3KTb722dXn9u+tdGxu6kMCD5ADRFcrVczmXcn+n98yKJfHix4lWOKXhoUlJy3NxesYJo2qw11vYFA/Ghdely48O9qPc6fd9NiGm/2yxJ7liSdt/8AkZzcTQtDJKDuLotvEvFTlJIRUBZ20rZAZwAxF8bKPzk//wA8f0cdOcS6QNmttQa7D88/33lFEBZJJt3vubL9STsfh69uBudh8ps9b4mcuRXyIlKoTQuoLpF0Njff17StiCqbSo2OoyBjaoEG2wLEX6+YkyC55EEG/wBZ4i+RQhoKCCFUUB5Qv8AJNm8bzMhTUApRUIUAeVLoWPnv6yqiTbJ5mTvmJN8VwAKA+Q4ExzZWdizElibJJsk/ORRIIJEcjg/3YP8AECbubxbMxDHIbG400u9EXS0CaJF+m0rogFmvjnUAADK1Djj+kg6rxDLk2yOWF3R4v1r6zTiS5Nk2xERIIEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/9k="
          title="Live from space album cover"
        /> */}
        <CardContent
          className={classes.content}
          style={{
            marginLeft: "26px",
          }}
        >
          <ThemeProvider theme={demo1}>
            <Button variant="outlined" color="secondary">
              View Details
            </Button>
            <br></br>
            <br></br>
            {/* 
            <Typography variant="subtitle1" color="secondary">
              bh
            </Typography> */}
            {/* <Button color="primary">Primary</Button> */}
            <Button variant="contained" color="primary">
              Browser
            </Button>
          </ThemeProvider>
        </CardContent>
      </Card>
    </div>
  );
}
