import React from "react";
import { FaLifeRing, FaMapMarkerAlt, FaCloudUploadAlt } from "react-icons/fa";
import "./Contact.css"; 
import ContactForm from "./ContactForm";
import "./styles.css";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <FaLifeRing className="contact-icon" />,
      title: "Support",
      phone: "+49 - 162 910 7481",
      email: "zerowaste@gokidogo.de",
    },
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: "Address",
      address: `House of Logistics & Mobility (HOLM) GmbH
      Startup LAB – Go Kidogo Deutschland
      Bessie-Coleman-Straße 7
      60549 Frankfurt am Main`,
    },
    {
      icon: <FaCloudUploadAlt className="contact-icon" />,
      title: "Contact",
      phone: "+49 - 0162 910 7481",
      email: "service@gokidogo.de",
    },
  ];

  return (
    <>
    <div>
      {/* Background Image Section */}
      <div className="background-image1">
        
      <div className="text-content"></div>
<div className="wave-container1">
      <div className="wave-element wave-1"></div>
      <div className="wave-element wave-2"></div>
      <div className="wave-element wave-3"></div>
    </div>
<div className="about-text">
<h1>Contact Us</h1>
  <p>Connect with us</p>
</div>
</div>

      {/* Contact Details Section */}
      <div className="contact-section">
        <div className="contact-container">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-card">
              <div>{item.icon}</div>
              <h3 className="contact-title">{item.title}</h3>
              {item.address ? (
                <p className="contact-text">{item.address}</p>
              ) : (
                <>
                  <p className="contact-text">{item.phone}</p>
                  <p className="contact-text">{item.email}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <ContactForm/>
    </>
  );
};

export default ContactSection;


