import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import contactImage from "../assets/images/contact.jpg"; 
import FormContact from "../components/formContact";

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
         <FormContact/>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
