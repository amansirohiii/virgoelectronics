import React, { useState, useEffect } from "react";
import "./Contact.css";
import Gif from "../../assests/images/contact.gif";
import emailjs from "emailjs-com";

export default function Contact() {
  const USER_ID = process.env.REACT_APP_USER_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;

  const [submissionStatus, setSubmissionStatus] = useState(null);
  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

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

  // New function to handle input changes and remove errors
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };

  const handleDismiss = () => {
    setSubmissionStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    let errors = {
      name: name.trim() === "",
      email: email.trim() === "" || !isValidEmail(email),
      mobile: mobile.trim() === "" || !isValidMobile(mobile),
      message: message.trim() === "",
    };

    setFormErrors(errors);

    if (!errors.name && !errors.email && !errors.mobile && !errors.message) {
      // Create the email parameters
      const emailParams = {
        from_name: name,
        from_email: email,
        from_mobile: mobile,
        message: message,
      };

      // Send the email using EmailJS
      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID)
        .then((response) => {
          console.log("Email sent successfully!");
          setSubmissionStatus("success");
          // Reset the form after successful submission
          setName("");
          setEmail("");
          setMobile("");
          setMessage("");
          setFormErrors({
            name: false,
            email: false,
            mobile: false,
            message: false,
          });
        })
        .catch((error) => {
          console.error("Email sending failed:", error);
          setSubmissionStatus("error");
        });
    }
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
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className={`form-field ${formErrors.name ? "error" : ""}`}>
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <span className="error-message">Please enter your name</span>
              )}
            </div>
            <div className={`form-field ${formErrors.email ? "error" : ""}`}>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <span className="error-message">Please enter a valid email</span>
              )}
            </div>
            <div className={`form-field ${formErrors.mobile ? "error" : ""}`}>
              <input
                type="tel"
                placeholder="Mobile"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={handleInputChange}
              />
              {formErrors.mobile && (
                <span className="error-message">Please enter a valid mobile number</span>
              )}
            </div>
            <div className={`form-field ${formErrors.message ? "error" : ""}`}>
              <div className="textarea-container">
                <textarea
                  id="message"
                  placeholder="Message"
                  rows="5"
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                />
              </div>
              {formErrors.message && (
                <span className="error-message">Please enter your message</span>
              )}
            </div>
            <button className="btnn" type="submit">
              Send
            </button>
            {submissionStatus && (
              <div
                className={`submission-message ${
                  submissionStatus === "success" ? "success" : "error"
                } show`}
              >
                {submissionStatus === "success" ? (
                  <>
                    Your message has been sent successfully!
                    <button className="dismiss-button" onClick={handleDismiss}>
                      <i className="fas fa-times"></i>
                    </button>
                  </>
                ) : (
                  <>
                    Sorry, an error occurred while sending your message. Please try again later.
                    <button className="dismiss-button" onClick={handleDismiss}>
                      <i className="fas fa-times"></i>
                    </button>
                  </>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
