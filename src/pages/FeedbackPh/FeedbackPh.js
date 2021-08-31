
import React from 'react';
import Sidebar from '../../components/pharma/Sidebar/sidebar';
import Navbar from '../../components/PharmaNavbar';
import feedbackImg from "../../images/feedbackBG.jpg"
import "./Feedback.css";
import "../style.css"

export const FeedbackPh = () => {
  return (
    <div >
      <Navbar />
      <div className="home1">
        <div className="side" > <Sidebar /></div>
        <div className="home">
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
      </div>
    </div>
  )
}
export default FeedbackPh