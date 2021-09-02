
import Footer1 from '../../components/Footer/Footer1'
import { Categories } from './Categories'
import Loader from './Loader'
import React, { useEffect, useState } from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Navbar from '../../components/GuestNavbar';
import axios from 'axios';
import "../../components/Footer/Footer.css"
const useStyles = makeStyles((theme) => ({

  list: {
    // backgroundColor: "#cfe8fc",
    // height: "100vh"
  },

}));


const onClick = () => {
  console.log("click");
};
const Pharmacies = () => {
  const classes = useStyles();
  const [request, setRequest] = useState({
    loading: true,
    data: null,
    error: null,
  })

  useEffect(() => {
    const url = 'http://localhost:4000/pharmacy/show'
    axios.get(url).then(resp => {
      console.log(resp)
      setRequest({ loading: false, data: resp.data, error: null });
    }).catch(error => {
      console.log(error)
      if (error.response) {
        setRequest({ loading: false, data: null, error: error.response.data })
      }
      else {
        setRequest({ loading: false, data: null, error: error.message })
      }
    })
  }, [])

  return (
    <div>
      <div>
        <Navbar />
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
        <div>
          {(request.loading) ? <Loader /> :
            request.data.map(pharmacy => <Categories key={pharmacy._id} product={pharmacy} />)}
        </div>
      </div>
      <Footer1 />
    </div>
  )
}

export default Pharmacies