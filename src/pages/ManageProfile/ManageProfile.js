import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import pl from '../../images/p1.jpg';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  image: {
    backgroundImage: 'url(https://retailpharmacymagazine.com.au/wp-content/uploads/2020/05/dexamethasone-retail-pharmacy.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[500] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
export const ManageProfile = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} alt="pl" src={pl} />
          <h2>
            <div>12admin_34</div>
            <div>feventsige.gg@gmail.com</div>
            <div>0934412666</div>
            <div>UserRole: Pharmacy</div>
          </h2>
          <Breadcrumbs aria-label="breadcrumb">
            {/* <Typography color="textPrimary">About</Typography> */}
            <Link href="/" onClick={handleClick}
              color="primary" component="h1"
              className={classes.submit}>
              About</Link>
            <Link color="textPrimary" href="/" onClick={handleClick} component="h1" >
              Password</Link>
          </Breadcrumbs>

        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3" type="submit"
            fullWidth
            color="primary"
            className={classes.submit}>
            About
          </Typography>
          <h1 >Personal Details</h1>
          <form >
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="text"
                label="Pharmacy Name"
                name="text"
                autoComplete="text"
                autoFocus
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="text"
                label="Phone Number"
                name="text"
                autoComplete="text"
                autoFocus
              />
            </div>

            <div>
              <TextField
                variant="outlined"
                required
                margin="normal"
                id="text"
                label="Email"
                name="text"
                autoComplete="text"
                autoFocus
              />
            </div>

            <h2> Pharmacy Bio  </h2>
            <div>
              <TextField
                variant="outlined"
                id="text"
                margin="normal"
                label="Text Area"
                name="text"
                autoComplete="text"
                autoFocus
              />
            </div>

            <div>
              <TextField
                variant="outlined"
                required
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
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
export default ManageProfile