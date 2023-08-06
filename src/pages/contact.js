import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import contactImage from "../assets/images/contact.jpg"; 

const Contact = () => {
  return (
    <>
    <Header/>
    <div className="contact-container">
      <h1 className="contact-title">CONTACT</h1>
     
      <div className="contact-content">
        <div className="contact-image">
          <img src={contactImage} alt="Contact" />
                  </div>
        <div className="contact-form-page">
          <form>
            <div className="form-group-page">
              <label htmlFor="name">NOM</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group-page">
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group-page">
              <label htmlFor="subject">OBJET</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group-page">
              <label htmlFor="message">MESSAGE</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form-group-page">
              <button type="submit">ENVOYER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
