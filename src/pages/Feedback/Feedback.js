import React from 'react';
import Navbar from '../../components/GuestNavbar';
import feedbackImg from "../../components/images/feedbackBG.jpg";
import "./Feedback.css";

export const Feedback = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="feedback-box">
          <div className="left">
            <img className="feedback-image"
              src={feedbackImg}
              alt="Canvas Logo"
            />
          </div>
          <div className="right">
            <h1>Feedback</h1>
            <input type="text" className="field" placeholder="Your name" />
            <input type="email" className="field" placeholder="Your email" />
            <textarea className="field area" placeholder="Your Message"></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}
