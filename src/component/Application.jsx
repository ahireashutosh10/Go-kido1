import React from "react";
import './Application.css';
import googlePlay from "../assets/gpay.png"; // Update with actual path
import appStore from "../assets/astore.png"; // Update with actual path

const AppDownload = () => {
    return (
        <section className="app-download"><br/>
        
            <h2>Gokido Android & iOS Mobile Application</h2>
            <div className="app-buttons">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <img src={googlePlay} alt="Google Play" />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                    <img src={appStore} alt="App Store" />
                </a>
            </div>
        </section>
    );
};

export default AppDownload;
