import React from 'react'
import './Contact.css' // css file for the contact
import location from '../../Assets/icons/location.png' //location image
import mail from '../../Assets/icons/gmail.png' // email image
const Contact = () => {
  return (
    <div id='contact'>
        {/* contact div */}
      <div className="contact-container">
        {/* contact heading */}
        <div className="contact-content">
            <h2>Contact</h2>
            <h3>Send Me a Mail !</h3>
        </div>
        <div className="contact-detail">
            <div className="location">
                <div className="contact-col">
                    <img src={location} alt='location'></img>
                </div>
                <div className="contact-col">
                    <h3>Location</h3>
                    <p>Madurai, TN</p>
                </div>
            </div>
            <div className="mail">
               <div className="contact-col">
                    <img src={mail} alt='mail'></img>
                </div>
                <div className="contact-col">
                    <h3>E mail</h3>
                    <a href='mail-to:amuthuraman98@gmail.com' target='blank'>amuthuraman98@gmail.com</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
