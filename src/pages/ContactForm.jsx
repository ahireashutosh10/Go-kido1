import React, { useState } from "react";
import "./ContactForm.css"; // Importing the CSS file

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    captcha: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.captcha !== "4") newErrors.captcha = "Wrong answer!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-section1">
      {/* Left Section: Contact Form */}
      <div className="contact-form">
        <h2 className="form-title">Drop Us a Line</h2>
        {errors.email && <p className="error-text">{errors.email}</p>}

        {submitted ? (
          <p className="success-text">Thank you for reaching out!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />

            <input
              type="text"
              name="phone"
              placeholder="Telephone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="input-field textarea"
            />
            {errors.message && <p className="error-text">{errors.message}</p>}

            <input
              type="text"
              name="captcha"
              placeholder="Are you human? 3 + 1 ="
              value={formData.captcha}
              onChange={handleChange}
              className="input-field"
            />
            {errors.captcha && <p className="error-text">{errors.captcha}</p>}

            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
      </div>

      {/* Right Section: Google Map */}
      <div className="map-container">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.881454045463!2d8.63652117725813!3d50.196631195727814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0c26792c4b99%3A0x4cbdd3249e5e6b6!2sKurmarkstra%C3%9Fe%2030%2C%2060437%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sde!4v1646392852013!5m2!1sen!2sde"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
