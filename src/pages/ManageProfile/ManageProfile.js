import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import pl from "../../images/p1.jpg";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Navbar from "../../components/PharmaNavbar";
import Sidebar from "../../components/pharma/Sidebar/sidebar";
import axios from "axios";
import setting from "./setting.css";
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  // image: {
  //   backgroundImage:
  //     "url(https://retailpharmacymagazine.com.au/wp-content/uploads/2020/05/dexamethasone-retail-pharmacy.jpg)",
  //   backgroundRepeat: "no-repeat",
  //   backgroundColor:
  //     theme.palette.type === "light"
  //       ? theme.palette.grey[500]
  //       : theme.palette.grey[900],
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // },
  paper: {
    margin: theme.spacing(4, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.info.light,
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
function handleClickPassword(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export const ManageProfile = () => {
  const classes = useStyles();
  const [datas, setDatas] = useState([]);
  const [file, setFile] = useState(null);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [profilepic, setProfilepic] = useState("");

  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const changeUsername = (event) => {
    setUserName(event.target.value);
  };
  const changeEmail = (event) => {
    if (event.target.value === "") {
      setEmail(datas.email);
      // console.log(datas[0].email);
    } else {
      setEmail(event.target.value);
    }
  };
  const changePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    axios.get(
      `http://localhost:4000/pharmacy/show/${localStorage.getItem("token")}`
    )
      .then((res) => res)
      .then((res) => {
        console.log(res.data);
        setDatas(res.data);
      });
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    const updateUser = {
      userName: username,
      email: email,
      phoneNumber: phonenumber,
      profilePic: profilepic,
      // password: password,
    };
    // axios.get("http://localhost:4000/show")
    //   .then(response);
    // console.log(respose);


    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePic = filename;
      try {
        await axios.post("http://localhost:4000/upload", data);
      } catch (err) { }
      data.append("name", filename);
    }

    axios
      .put(
        `http://localhost:4000/pharmacy/${localStorage.getItem("token")}`,
        updateUser
      )
      .then((response) => {
        setSuccess(true);
        console.log(response.data);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="home1">
        <div className="side">
          {" "}
          <Sidebar />
        </div>
        <div className="home">
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid
              item
              xs={12}
              sm={8}
              md={4}
              component={Paper}
              elevation={6}
              square
            >
              <div className={classes.paper}>
                <Avatar
                  className={classes.avatar}
                  alt="pl"
                  src={file ? URL.createObjectURL(file) : profilepic}
                />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon far fa-user-circle" />
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <div className="allProfile">
                  <h2>
                    <div> User Name :  {datas.userName}</div>
                    <div> Email : {datas.email}</div>
                    <div>PhoneNumber : {datas.phoneNumber}</div>
                    <div>UserRole: Pharmacy</div>
                  </h2>
                </div>

              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={8}
              component={Paper}
              elevation={6}
              square
            >
              <div className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h3"
                  type="submit"
                  fullWidth
                  color="primary"
                  className={classes.submit}
                >
                  About
                </Typography>
                <h1>Personal Details</h1>
                <form onSubmit={onSubmit}>
                  <div>
                    <TextField
                      style={{ width: "500px" }}
                      variant="outlined"
                      margin="normal"
                      // required
                      id="text"
                      label="user name"
                      name="text"
                      autoComplete="text"
                      autoFocus
                      value={username}
                      onChange={changeUsername}
                    />
                  </div>
                  <div>
                    <TextField
                      style={{ width: "500px" }}
                      variant="outlined"
                      margin="normal"
                      //required
                      id="text"
                      label="phone number"
                      name="text"
                      autoComplete="text"
                      autoFocus
                      value={phonenumber}
                      onChange={changePhoneNumber}
                    />
                  </div>

                  <div>
                    <TextField
                      style={{ width: "500px" }}
                      variant="outlined"
                      // required
                      margin="normal"
                      id="text"
                      label={datas.email}
                      name="text"
                      autoComplete="text"
                      autoFocus
                      value={email}
                      onChange={changeEmail}
                    />
                  </div>

                  <h2> Pharmacy Bio </h2>
                  {/* <div>
                    <TextField
                      style={{ width: "500px" }}
                      variant="outlined"
                      id="text"
                      margin="normal"
                      label=""
                      name="text"
                      autoComplete="text"
                      autoFocus
                      value={datas.password}
                      onChange={changePassword}
                    />
                  </div> */}

                  <div>
                    <TextField
                      style={{ width: "500px" }}
                      variant="outlined"
                      //required
                      id="text"
                      label="Location"
                      name="text"
                      autoComplete="text"
                      autoFocus
                    />
                  </div>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Save Changes
                  </Button>
                  {success && (
                    <span
                      style={{
                        color: "green",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      {" "}
                      profile has been changed{" "}
                    </span>
                  )}
                </form>

                {/* {handleClickPassword && (
                  <form onSubmit={onSubmit}>
                    <div>
                      <TextField
                        style={{ width: "500px" }}
                        variant="outlined"
                        margin="normal"
                        // required
                        id="text"
                        label="Pharmacy Name"
                        name="text"
                        autoComplete="text"
                        autoFocus
                        value={username}
                        onChange={changeUsername}
                      />
                    </div>
                    <div>
                      <TextField
                        style={{ width: "500px" }}
                        variant="outlined"
                        margin="normal"
                        //required
                        id="text"
                        label="Phone Number"
                        name="text"
                        autoComplete="text"
                        autoFocus
                        value={phonenumber}
                        onChange={changePhoneNumber}
                      />
                    </div>

                    <div>
                      <TextField
                        style={{ width: "500px" }}
                        variant="outlined"
                        // required
                        margin="normal"
                        id="text"
                        label="Email"
                        name="text"
                        autoComplete="text"
                        autoFocus
                        value={email}
                        onChange={changeEmail}
                      />
                    </div>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Save Changes
                    </Button>
                    {success && (
                      <span
                        style={{
                          color: "green",
                          textAlign: "center",
                          marginTop: "20px",
                        }}
                      >
                        {" "}
                        password has been changed{" "}
                      </span>
                    )}
                  </form> */}
                {/* )} */}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
export default ManageProfile;
