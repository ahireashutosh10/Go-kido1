import React from "react";
import "./Imprint.css";
import "./styles.css";

const Imprint = () => {
  return (
    <>
      <div className="abcd">
        <div className="overlay"></div>
        <h1>Imprint</h1>
      </div>
      
      <div className="wave-container1">
      <div className="wave-element wave-1"></div>
      <div className="wave-element wave-2"></div>
      <div className="wave-element wave-3"></div>
    </div>

      <div className="imprint-container">
        <div className="imprint-section">
          <h2>Company:</h2>
          <div className="imprint-divider">
            <p>Go Kidogo GmbH</p>
            <p>
              House of Logistics & Mobility (HOLM) GmbH Startup LAB <br />
              Bessie-Coleman-Straße 7, 60549 Frankfurt am Main
            </p>
            <p>
              E:{" "}
              <a href="mailto:zerowaste@gokidogo.de" className="imprint-link">
                zerowaste@gokidogo.de
              </a>
            </p>
            <p>M: 0162 9107 481</p>
          </div>
        </div>

        <div className="imprint-section">
          <h2>Managing Directors:</h2>
          <div className="imprint-divider">
            <p>Mr. Rinku Sharma</p>
          </div>
        </div>

        <div className="imprint-section">
          <div className="imprint-divider">
            <p><strong>Registergericht:</strong> Frankfurt</p>
            <p><strong>Registernummer:</strong> HRB 129907</p>
            <p><strong>Tax Number:</strong> 45 234 57393</p>
          </div>
        </div>

        <div className="imprint-section">
          <h2>Bank details:</h2>
          <div className="imprint-divider">
            <p>Volksbank Frankfurt</p>
            <p>IBAN: DE13 5019 0000 6300 9083 39</p>
          </div>
        </div>

        <div className="imprint-section">
          <h2>Disclaimer:</h2>
          <div className="imprint-divider">
            <p>
              Reference to EU dispute resolution<br />
              The European Commission provides a platform for online dispute resolution (OS): http://ec.europa.eu/consumers/odr<br />
              Our e-mail address can be found above in the imprint.<br />
              We are not willing or obliged to participate in dispute settlement procedures before a consumer arbitration board.
            </p>
          </div>
        </div>

        <div className="imprint-section">
          <h2>Liability for content:</h2>
          <div className="imprint-divider">
            <p>
              As a service provider, we are responsible for our own content on these pages under general law in accordance with Section 7 (1) TMG...
              [rest unchanged]
            </p>
          </div>
        </div>

        <div className="imprint-section">
          <h2>Liability for links:</h2>
          <div className="imprint-divider">
            <p>
              Our offer contains links to external websites over which we have no influence...
              [rest unchanged]
            </p>
          </div>
        </div>

        <div className="imprint-section">
          <h2>Copyright:</h2>
          <div className="imprint-divider">
            <p>
              The content and works on these pages created by the site operator are subject to German copyright law...
              [rest unchanged]
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imprint;
