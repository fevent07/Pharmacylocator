import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import "./Navbar.css";
import img1 from '../images/logo.png';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RoomIcon from '@material-ui/icons/Room';

function Navbar() {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => setClick(!click);
  const history = useHistory()
  const logout = () => {
    window.localStorage.removeItem("token");
    history.push('/')
  }
  return (
    <>
      <nav className="navbar" style={{ width: '' }}>
        <div className="nav-container">
          <img className="logo-image"
            src={img1}
            alt="Canvas Logo"
          />
          <NavLink exact to="/PharmaHome" className="nav-logo" >
            <p>Pharmacy Locator</p>
          </NavLink>


          <div className="nav-item">
            <div className="nav-links" onClick={handleShow}>
              <ExitToAppIcon />
              Logout
            </div>
          </div>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm logout</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ marginLeft: "100px" }}>Are you sure you want to Logout ?
              <br />
              <br />
              <Button variant="secondary" onClick={logout} style={{ marginLeft: "30px" }}>
                Logout
              </Button>
              <Button variant="primary" onClick={handleClose} style={{ marginLeft: "40px" }}>
                Close
              </Button>
            </Modal.Body>

          </Modal>
        </div>
      </nav>

    </>
  )
}

export default Navbar
