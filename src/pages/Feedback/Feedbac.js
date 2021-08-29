import React from 'react'
import "./Feedback.css";

export const Feedbac = () => {
  return (
    <div className="form">
      <form>
        <label className="text-label">Name: </label><br/>
        <input type="text" name="name" className="text-fields"/><br/><br/>

        <label className="text-label">Email: </label><br/>
        <input type="Email" name="email" className="text-fields"/><br/><br/>
        
        <label className="text-label">Meassage: </label><br/>
        <textarea type="textarea" name="message" className="msg-textarea"/><br/><br/>
      </form>
    </div>
  )
}
 export default Feedbac