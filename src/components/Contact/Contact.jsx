import React, { useState } from "react";
import "./Contact.css";
import Gif from "../../assests/images/contact.gif"

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    mobile: false,
    message: false,
  });
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
     // Perform form validation
     let errors = {
        name: false,
        email: false,
        mobile: false,
        message: false,
      };

      if (name.trim() === "") {
        errors.name = true;
      }

      if (email.trim() === "" || !isValidEmail(email)) {
        errors.email = true;
      }

      if (mobile.trim() === "" || !isValidMobile(mobile)) {
        errors.mobile = true;
      }

      if (message.trim() === "") {
        errors.message = true;
      }

      setFormErrors(errors);
    };

    const isValidEmail = (email) => {
      // Add your email validation logic here
      // Example: Use a regular expression to check email format
      const emailRegex = /^\S+@\S+\.\S+$/;
      return emailRegex.test(email);
    };

    const isValidMobile = (mobile) => {
      // Add your mobile validation logic here
      // Example: Use a regular expression to check mobile format
      const mobileRegex = /^\d{10}$/;
      return mobileRegex.test(mobile);
    };

  return (
  <div className="contact-form-container">
  <div className="contact-form-content">
    <div className="gif-container">
      <img src={Gif} alt="GIF" />
    </div>
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
      <div className={`form-field ${formErrors.name ? "error" : ""}`}>
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text" placeholder="Name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          {formErrors.name && (
                <span className="error-message">Please enter your name</span>
              )}
        </div>
        <div className={`form-field ${formErrors.email ? "error" : ""}`}>
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email" placeholder="Email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {formErrors.email && (
                <span className="error-message">Please enter a valid email</span>
              )}
        </div>
        <div className={`form-field ${formErrors.mobile ? "error" : ""}`}>
          {/* <label htmlFor="mobile">Mobile</label> */}
          <input
            type="tel" placeholder="Mobile"
            id="mobile"
            value={mobile}
            onChange={handleMobileChange}
          />
           {formErrors.mobile && (
                <span className="error-message">Please enter a valid mobile number</span>
              )}
        </div>
        <div className={`form-field ${formErrors.message ? "error" : ""}`}>
          {/* <label htmlFor="message">Message</label> */}
          <textarea
            id="message" placeholder="Message" rows="5"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
           {formErrors.message && (
                <span className="error-message">Please enter your message</span>
              )}
        </div>
        <button className="btnn" type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>


  );
}

