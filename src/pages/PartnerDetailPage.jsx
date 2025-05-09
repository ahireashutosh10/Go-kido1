import React, { useState } from "react";
import "./PartnerDetailPage.css";

export default function PartnerDetailPage() {
  const [selectedCategory, setSelectedCategory] = useState("Cafe");
  const [selectedOption, setSelectedOption] = useState("");
  const [total, setTotal] = useState(0);

  // Menu items for Cafe and Burger categories
  const cafeItems = [
    { name: "Espresso", price: 2.5 },
    { name: "Hot Chocolate", price: 3.9 },
  ];

  const burgerItems = [
    { name: "Classic Burger", price: 5.5 },
    { name: "Cheese Burger", price: 6.2 },
  ];

  // Handle adding items to the total price
  const handleAdd = (price) => {
    setTotal((prev) => prev + price);
  };

  return (
    <>
      {/* Cafe Section - Header with Overlay */}
      <div className="Cafe">
        <div className="overlay"></div>
        <h1>
          Lindbergh`s Cafe <br />
          Amelia-Mary-Earhart-Straße 8<br />
          Min. 12 €<br />
          German, Italian, French, Continental
        </h1>
      </div>

      {/* Main Container for the Page Layout */}
      <div className="main-container1">
        {/* Left Container: Category Buttons */}
        <div className="category-container1">
          <button
            className={`category-btn ${selectedCategory === "Cafe" ? "selected" : ""}`}
            onClick={() => setSelectedCategory("Cafe")}
          >
            Cafe
          </button>
          <button
            className={`category-btn ${selectedCategory === "Burger" ? "selected" : ""}`}
            onClick={() => setSelectedCategory("Burger")}
          >
            Burger
          </button>
        </div>

        {/* Middle Container: Menu Items */}
        <div className="menu-container">
          <h2 className="menu-category-title">{selectedCategory}</h2>
          <div className="menu-grid">
            {/* Render menu items based on selected category */}
            {(selectedCategory === "Cafe" ? cafeItems : burgerItems).map((item, index) => (
              <div key={index} className="menu-item-card">
                <h3 className="item-name">{item.name}</h3>
                <div className="item-price">{item.price.toFixed(2)} €</div>
                <div className="item-actions">
                  <button className="info-button">i</button>
                  <button className="add-button" onClick={() => handleAdd(item.price)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Container: Order Summary */}
        <div className="order-summary-container">
          <div className="order-summary-header">Order Summary</div>
          <div className="order-summary-total">
            <span>TOTAL</span>
            <span>{total.toFixed(2)} €</span>
          </div>
          <div className="delivery-options">
            <label className="delivery-label">
              <input
                type="radio"
                name="deliveryOption"
                value="Lieferung"
                checked={selectedOption === "Lieferung"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              Delivery
            </label>
            <label className="pickup-label">
              <input
                type="radio"
                name="deliveryOption"
                value="Selbstabholung"
                checked={selectedOption === "Selbstabholung"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              Pickup
            </label>
          </div>
          <button className="order-button">Preorder</button>
        </div>
      </div>
    </>
  );
}
