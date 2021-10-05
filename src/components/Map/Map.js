import React, { useRef, useState, useEffect } from "react";
import { Card, CardBody, Col } from "reactstrap";
import L, { popup } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Grid from "@material-ui/core/Grid";
import GeoLocation from "../../pages/useGeoLocation";
import Navbar from "../../components/GuestNavbar/index";
import custonMarker from "./images/img/marker.png";
import "../../App.css";
// import "./map.css";
//8.885215206422316, 38.809657194171386

const Map1 = () => {
  const [center, setCenter] = useState({
    lat: 8.885215206422316,
    lng: 38.809657194171386,
  });
  const mapRef = useRef();
  const ZOOM_LEVEL = 9;
  const [activePharmacy, setActivePharmacy] = React.useState({});
  const [pharmaGeo, setPharmaGeo] = React.useState([]);
  const location = GeoLocation();
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.leafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  useEffect(async () => {
    // let url =
    //   "http://localhost:4000/pharmacy/nearest?lng=8.8853458&lat=38.8099187";
    if (
      location.coordinates.lng !== null &&
      location.coordinates.lat !== null
    ) {
      let query = localStorage.getItem("key");
      let url =
        `http://localhost:4000/meds/search?q=${query}&lng=` +
        location.coordinates.lat +
        "&lat=" +
        location.coordinates.lng;
      const resp = await fetch(url);
      const data = await resp.json();
      setPharmaGeo(data);

      // resp.then((data) => {
      //   data.json().then((re) => {
      //     console.log(re);
      //   });
      // });
    }
  }, [location]);

  const myIcon = new L.Icon({
    iconUrl: custonMarker,
    iconRetinaUrl: custonMarker,
    popupAnchor: [-0, -0],
    iconSize: [40, 40],
  });
  return (
    <div className="App">
      <Navbar />
      <div>
        <Col sm={4} lg={10}>
          {/* <h1> WELCOME {userName}</h1> */}
          <Grid container spacing={3}>
            <div>
              <MapContainer
                center={center}
                zoom={15}
                style={{
                  height: "55vh",
                  width: "70vw",
                  alignItems: "center",
                  transform: "translate(20%, 10%)",
                }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {!location.error ? (
                  <Marker
                    position={[
                      location.coordinates.lat,
                      location.coordinates.lng,
                    ]}
                    icon={myIcon}
                  >
                    <Popup>Current location</Popup>
                  </Marker>
                ) : null}
                {pharmaGeo.map((pharmacy) => (
                  <Marker
                    key={pharmacy._id}
                    position={[
                      pharmacy.location.coordinates[0],
                      pharmacy.location.coordinates[1],
                    ]}
                    eventHandlers={{
                      click: (e) => {
                        setActivePharmacy(pharmacy);
                        console.log(pharmacy);
                      },
                    }}
                  >
                    <Popup
                      position={[
                        pharmacy.location.coordinates[0],
                        pharmacy.location.coordinates[1],
                      ]}
                    >
                      <div>
                        <h2>{pharmacy.pharmacyName}</h2>
                        <p>{pharmacy.pharmacyType}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </Grid>
        </Col>
      </div>

      <div
        className=" cls "
        style={{
          marginBottom: "50px",
          // marginTop: "80px",
          // marginLeft: "80px",
          // margin: "80px 80px",
          // borderRadius: "20px",
          // border: "none",
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          // textAlign: "center",
          // width: "100%",
          // background: " linear-gradient(145deg, #bacfde, #ddf6ff)",
          // boxShadow: " 8px 8px 16px #d4d4d4,-8px -8px 16px #ffffff",
        }}
      >
        {/* <h3 className="font-bold text-xl mb-3"> */}
        {pharmaGeo.map((pharmacy) => (
          <Card
            className="p-1 col-xs-6 map-card"
            style={{ width: "600px", marginLeft: "240px",  marginTop: "50px" }}
          >
            <CardBody
              className="map-card-div"
              style={{ width: "300px", marginLeft: "50px" }}
            >
              <div className="font-bold mb-3">{pharmacy.pharmacyName}</div>
              <div className="mb-3">{pharmacy.email}</div>
            </CardBody>
          </Card>
        ))}
        {/* </h3> */}
      </div>

      {/* <div style={{ marginLeft: "30px" }}>
        <card container="container">
          <Col sm={4} lg={10}>
            <br /> <br />
            <br /> <br />
            <Col lg="12">
              dgfeygf jfwefhu bdeuhf
              <br />
              <card list="">
                {pharmaGeo.map((pharmacy) => (
                  <div>
                    <h2>{pharmacy.pharmacyName}</h2>
                    <p>{pharmacy.email}</p>
                  </div>
                ))}
              </card>
            </Col>
          </Col>
        </card>
      </div> */}
    </div>
  );
};

export default Map1;

/* {activePharmacy ? <SideCard pharmacy={activePharmacy} /> : null} */
