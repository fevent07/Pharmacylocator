import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import "./Navbar.css";

import img1 from '../images/logo.png';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <img className="logo-image"
            src={img1}
            alt="Canvas Logo"
          />
          <NavLink exact to="/" className="nav-logo">
            <p>Pharmacy Locator</p>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <DropdownButton id="dropdown-basic-button" title="Categories" >
                <Dropdown.Item href="/Prescribed">Prescription Only</Dropdown.Item>
                <Dropdown.Item href="/Prenatal">Prenatal</Dropdown.Item>
                <Dropdown.Item href="/Antibiotics">Antibiotics</Dropdown.Item>
                <Dropdown.Item href="/Others">Others</Dropdown.Item>
              </DropdownButton>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/Pharmacies"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Pharmacies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/feedback"
                activeClassName="active"
                className="nav-links" style={{ textDecoration: 'none' }}
                onClick={handleClick}>
                Feedback
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
