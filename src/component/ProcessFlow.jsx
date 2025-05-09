import React from "react";
import "./ProcessFlow.css";

// Importing Images
import order from "../assets/50.jpg";
import pack from "../assets/51.jpg";
import scan from "../assets/53.jpg";
import eat from "../assets/54.jpg";
import returnBowl from "../assets/55.jpg";
import clean from "../assets/56.jpg";

const GoKidogoUI = () => {
  return (
    <div className="section-layout">
      {/* Left: Description Section */}
      <div className="GoKidogoDescription">
        <h2>This is how Go Kidogo works!</h2>
        <p>It's very easy to order the food with minimal contact delivery.</p>
      </div>

      {/* Right: Steps Section */}
      <div className="steps-container">
        <div className="card1">
          <div className="step">1</div>
          <img src={order} alt="Order Food" className="icon" />
          <p>You Order Your Favourite Food</p>
        </div>

        <div className="card1">
          <div className="step">2</div>
          <img src={pack} alt="Pack Food" className="icon" />
          <p>Restaurants Pack In Re-Usable Bowls</p>
        </div>

        <div className="card1">
          <div className="step">3</div>
          <img src={scan} alt="Eat Bowls" className="icon" />
          <p>You Eat Out Of The Bowls</p>
        </div>

        <div className="card1">
          <div className="step">4</div>
          <img src={eat} alt="Borrow Bowls" className="icon" />
          <p>You Borrow Re-Usable Bowls</p>
        </div>

        <div className="card1">
          <div className="step">5</div>
          <img src={returnBowl} alt="Return Bowls" className="icon" />
          <p>You Return The Reusable Bowls</p>
        </div>

        <div className="card1">
          <div className="step">6</div>
          <img src={clean} alt="Clean Bowls" className="icon" />
          <p>Restaurants Clean Reusable Bowls</p>
        </div>

        {/* Order More Section */}
        <div className="order">
          <h2>Order more!!</h2>
          <p>To reduce waste... let's order more responsibly.</p>
        </div>
      </div>
    </div>
  );
};

export default GoKidogoUI;
