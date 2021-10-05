import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import "./ProductCard";
const onClick = () => {
  console.log("click");
};
const useStyles = makeStyles((theme) => ({
  list: {
    // backgroundColor: "#cfe8fc",
    // height: "100vh"
  },
  listcontent: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: "20%",
    backgroundColor: "#8479FC",
    display: "flex-right",
    margin: "2px",
    textDecoration: "none",
    marginTop: "55px",
    border: "1",
    float: "left",

    flexDirection: "column",
  },
}));

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

function ProductCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const handleClick = () => {
    localStorage.setItem("key", props.product.medName);
    console.log(props.product.medName);
  };
  return (
    <div
      className="card"
      style={{
        margin: "20px 10px",
        borderRadius: "20px",
        border: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "300px",
        background: " linear-gradient(145deg, #bacfde, #ddf6ff)",
        boxShadow: " 8px 8px 16px #d4d4d4,-8px -8px 16px #ffffff",
      }}
    >
      <div className="border mb-4 rounded overflow-hidden">
        <Link to={`/products/${props.product._id}`}>
          <div className="w-full h-64 bg-blue bg-cover"></div>
        </Link>
      </div>
      <div className="p-1 col-xs-6">
        <h3 className="font-bold text-xl mb-3">
          <Link to="/map" onClick={handleClick}>
            {props.product.medName}
          </Link>
        </h3>
        <div className="font-bold mb-3">Birr: {props.product.medPrice}</div>
        <div className="mb-3">{props.product.medType}</div>
        <Link
          to={`/map/${props.product._id}`}
          className="bg-blue-500 text-white p-2 flex justify-center w-full"
        >
          <Button size="small" color="primary">
            View
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
