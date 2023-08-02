import React from "react";
import backgroundImage from "../assets/images/banner2.jpg";

const ContactForm = () => {
  return (
    <section
      className="contact-section">
      <img src={backgroundImage} alt="Background" className="background-image" />
    
        <h2>CONTACT</h2>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Objet</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
