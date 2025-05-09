import React, { useRef } from 'react';
import './GokidoTool.css';
import devices from "../assets/headergokidogotools.png";
import q1 from "../assets/gokidogotools-01.png";
import q2 from "../assets/gokidogotools-02.png";
import q3 from "../assets/gokidogotools-03.png";
import q4 from "../assets/gokidogotools-04.png";
import q5 from "../assets/gokidogotools-05.png";

const GokidoTool = () => {
  const formRef = useRef(null);

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    "Management of the menu in real time",
    "Temporary or permanent promotional prices",
    "Promotions with coupons for customers",
    "Creation of several menus (e.g. seasonal)",
    "Management of several restaurants",
    "Management of the team with assignment of rights",
    "Overview of sales and payments",
    "Sales statistics for optimal sales",
    "Central management of customer complaints",
    "Our team will help you set it up",
  ];

  const features1 = [
    "Adjustment of the lead time",
    "Support for receipt printers (e.g., Epson TM)",
    "Management of orders (delivery and collection)",
    "Management of availability of individual products",
    "Support of multiple terminals simultaneously",
    "Automated digital invoices for customers"
  ];

  const features2 = [
    "Receiving reusable bowls",
    "Dispensing reusable bowls",
    "Easy scanning of codes",
    "Manual entry of customer codes (e.g., for orders by telephone or in the comments field of third-party suppliers)"
  ];

  const features4 = [
    "No login necessary",
    "Overview of the most important information of an order",
    "Support for multiple simultaneous deliveries",
    "Navigation support",
    "Status update of the order"
  ];

  const features5 = [
    "Always up-to-date and in real time",
    "Choice of a meaningful web address",
    "Inclusion on Google Maps, Facebook, Instagram, etc",
    "Initiate orders via the menu on the website",
    "Your new website?"
  ];

  const packages = [
    {
      title: "EINSTEIGERPAKET KLEIN",
      price: "€79",
      description: [
        "25 Geschirrsets*",
        "Ausleih-Flatrate: 3 Monate",
        "Setup in das GOKI-System",
        "Marketingmaterial",
        "Digitales Onboarding",
        "Promotion auf unsere Social Media Plattform",
        "Telefonischer Kunden-Support",
        "Persönlicher Ansprechpartner (gestrichen)",
        "Individualisiertes Onlinetraining (gestrichen)"
      ]
    },
    {
      title: "EINSTEIGERPAKET MITTEL",
      price: "€109",
      description: [
        "40 Geschirrsets*",
        "Ausleih-Flatrate: 3 Monate",
        "Setup in das GOKI-System",
        "Marketingmaterial",
        "Digitales Onboarding",
        "Promotion auf unsere Social Media Plattform",
        "Telefonischer Kunden-Support",
        "Persönlicher Ansprechpartner (gestrichen)",
        "Individualisiertes Onlinetraining (gestrichen)"
      ]
    },
    {
      title: "EINSTEIGERPAKET GROS",
      price: "€209",
      description: [
        "80 Geschirrsets*",
        "Ausleih-Flatrate: 3 Monate",
        "Setup in das GOKI-System",
        "Marketingmaterial",
        "Digitales Onboarding",
        "Promotion auf unsere Social Media Plattform",
        "Telefonischer Kunden-Support",
        "Persönlicher Ansprechpartner (gestrichen)",
        "Individualisiertes Onlinetraining (gestrichen)"
      ]
    },
    {
      title: "EINSTEIGERPAKET EXTRA GROS",
      price: "€440",
      description: [
        "200 Geschirrsets*",
        "Ausleih-Flatrate: 3 Monate",
        "Setup in das GOKI-System",
        "Marketingmaterial",
        "Digitales Onboarding",
        "Promotion auf unsere Social Media Plattform",
        "Telefonischer Kunden-Support",
        "Persönlicher Ansprechpartner",
        "Individualisiertes Onlinetraining"
      ]
    },
    {
      title: "GRÖSSERES PAKET",
      price: "> 200 Geschirrsets*",
      description: [
        "Ausleih-Flatrate: 3 Monate",
        "Setup in das GOKI-System",
        "Marketingmaterial",
        "Digitales Onboarding",
        "Promotion auf unsere Social Media Plattform",
        "Telefonischer Kunden-Support",
        "Persönlicher Ansprechpartner",
        "Individualisiertes Onlinetraining"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <img src={devices} alt="Devices Preview" className="hero-img" />
          </div>
          <div className="hero-right">
            <h1>Your smart companions</h1>
            <h1>into a digital future</h1>
            <button className="demo-request-btn" onClick={handleButtonClick}>Request a demo now</button>
          </div>
        </div>
        <div className="wave"></div>
      </div>

      {/* Marketplace Sections */}
      {[{title: "Gokido Marketplace", img: q1, desc: features},
        {title: "Gokido Scan App", img: q3, desc: features2},
        {title: "Digital Menu", img: q5, desc: features5}].map((item, idx) => (
        <section className="marketplace" key={idx}>
          <div className="marketplace-content">
            <div className="marketplace-left">
              <h2>{item.title}</h2>
              <ul className="feature-list">
                {item.desc.map((f, i) => (
                  <li key={i}><span className="check-icon">✔</span> {f}</li>
                ))}
              </ul>
              <button className="demo-request-btn" onClick={handleButtonClick}>Request a demo now</button>
            </div>
            <div className="marketplace-right">
              <img src={item.img} alt={item.title} className="laptop-image" />
            </div>
          </div>
        </section>
      ))}

      {/* Terminal Sections */}
      {[{title: "Gokido Terminal", img: q2, desc: features1},
        {title: "Gokido Pilot App", img: q4, desc: features4}].map((item, idx) => (
        <section className="terminal-section" key={idx}>
          <div className="terminal-content">
            <div className="terminal-left">
              <img src={item.img} alt={item.title} className="terminal-image" />
            </div>
            <div className="terminal-right">
              <h2>{item.title}</h2>
              <ul className="terminal-feature-list">
                {item.desc.map((f, i) => (
                  <li key={i}><span className="check-icon">✔</span> {f}</li>
                ))}
              </ul>
              <button className="demo-request-btn" onClick={handleButtonClick}>REQUEST A DEMO NOW</button>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
      <div className="pricing-table">
        <div className="pricing-cards">
          {packages.map((pack, index) => (
            <div key={index} className="pricing-card">
              <h3 className="pricing-title">{pack.title}</h3>
              <div className="pricing-price">{pack.price}<span className="pricing-tax"> zzgl. MwSt.</span></div>
              <ul className="pricing-features">
                {pack.description.map((item, idx) => (
                  <li key={idx} className={item.includes("(gestrichen)") ? "strikethrough" : ""}>
                    {item.replace(" (gestrichen)", "")}
                  </li>
                ))}
              </ul>
              <button className="pricing-button" onClick={handleButtonClick}>JETZT SICHERN!</button>
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div ref={formRef} className="form-section">
        <h2>Jetzt Demo Anfordern</h2>
        <form className="demo-form">
          <input type="text" placeholder="Ihr Name" required />
          <input type="email" placeholder="Ihre Email" required />
          <input type="text" placeholder="Unternehmen" />
          <textarea placeholder="Ihre Nachricht" rows="4"></textarea>
          <button type="submit">Absenden</button>
        </form>
      </div>
    </>
  );
};

export default GokidoTool;
