import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

 const FormContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="contact-form-page" ref={form} onSubmit={sendEmail}>
      <div className="form-group-page">
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" name="from_email" autoComplete="off" required />
      </div>
      <div className="form-group-page">
        <label htmlFor="subject">OBJET</label>
        <input type="text" id="subject" name="from_subject" autoComplete="off"required />
      </div>
      <div className="form-group-page">
        <label htmlFor="message">MESSAGE</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <div className="form-group-button">
        <button className="button-contact" type="submit">
          ENVOYER
        </button>
      </div>
    </form>
  );
};
export default FormContact;