import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import restaurantData from "./records.json";
import "./PartnerDetailPage.css";

export default function PartnerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Restaurant data state
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  // Order management state
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedOption, setSelectedOption] = useState("");
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Simulate API call with your JSON data
    const fetchRestaurant = () => {
      try {
        const foundRestaurant = restaurantData.find((r) => r.restroid === id);
        if (foundRestaurant) {
          setRestaurant(foundRestaurant);
        } else {
          throw new Error("Restaurant not found");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  // Get unique categories from menu items
  const categories = [
    "All",
    ...new Set(restaurant?.MenuItem?.map((item) => item.category) || []),
  ];

  // Filter menu items by active category
  const filteredMenu =
    activeCategory === "All"
      ? restaurant?.MenuItem || []
      : restaurant?.MenuItem?.filter(
          (item) => item.category === activeCategory,
        ) || [];

  // Add item to cart
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    setTotal((prev) => prev + parseFloat(item.price));
  };

  // Remove item from cart
  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    const removedItem = newCart.splice(index, 1)[0];
    setCart(newCart);
    setTotal((prev) => prev - parseFloat(removedItem.price));
  };

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
        <p>Loading restaurant details...</p>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="error-overlay">
        <p>Restaurant not found</p>
        <button onClick={() => navigate(-1)} className="back-button">
          Go Back to Restaurants
        </button>
      </div>
    );
  }

  return (
    <div className="partner-detail-container">
      {/* Restaurant Header */}
      <div className="restaurant-header">
        <div className="header-overlay"></div>
        <img
          src={
            restaurant.image ||
            "https://via.placeholder.com/1200x400?text=Restaurant"
          }
          alt={restaurant.name}
          className="restaurant-image"
        />
        <div className="restaurant-info">
          <h1>{restaurant.name}</h1>
          <div className="restaurant-meta">
            <span className="address">
              <i className="fas fa-map-marker-alt"></i> {restaurant.address}
            </span>
            <span className="cuisines">{restaurant.cuisine}</span>
            <div className="delivery-info">
              <span>
                <i className="fas fa-clock"></i>{" "}
                {restaurant.minimumdeliverytime} min
              </span>
              <span>
                <i className="fas fa-euro-sign"></i> Min.{" "}
                {restaurant.minimumdeliveryamount} €
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content-wrapper">
        {/* Category Navigation */}
        <div className="category-navigation">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="menu-items-section">
          <h2 className="menu-section-title">
            {activeCategory === "All" ? "All Menu Items" : activeCategory}
          </h2>

          {filteredMenu.length === 0 ? (
            <p className="empty-menu-message">
              No items available in this category
            </p>
          ) : (
            <div className="menu-items-grid">
              {filteredMenu.map((item) => (
                <div key={item.mnuid} className="menu-item-card">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/150?text=Food";
                      }}
                    />
                  )}
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    <div className="item-footer">
                      <span className="item-price">
                        {parseFloat(item.price).toFixed(2)} €
                      </span>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary Panel */}
        <div className="order-summary-panel">
          <div className="order-summary-header">
            <h3>Your Order</h3>
            <span className="items-count">{cart.length} items</span>
          </div>

          <div className="order-items-list">
            {cart.length === 0 ? (
              <p className="empty-cart-message">Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div key={`${item.mnuid}-${index}`} className="order-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">
                    {parseFloat(item.price).toFixed(2)} €
                  </span>
                  <button
                    className="remove-item-btn"
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="order-total">
            <span>Total:</span>
            <span className="total-amount">{total.toFixed(2)} €</span>
          </div>

          <div className="delivery-options">
            <label
              className={`delivery-option ${selectedOption === "delivery" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="deliveryOption"
                value="delivery"
                checked={selectedOption === "delivery"}
                onChange={() => setSelectedOption("delivery")}
              />
              <span className="option-label">
                <i className="fas fa-biking"></i> Delivery
              </span>
            </label>

            <label
              className={`delivery-option ${selectedOption === "pickup" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="deliveryOption"
                value="pickup"
                checked={selectedOption === "pickup"}
                onChange={() => setSelectedOption("pickup")}
              />
              <span className="option-label">
                <i className="fas fa-store"></i> Pickup
              </span>
            </label>
          </div>

          <button
            className="checkout-button"
            disabled={cart.length === 0 || !selectedOption}
          >
            {selectedOption === "delivery"
              ? "Place Order"
              : "Prepare for Pickup"}
          </button>
        </div>
      </div>
    </div>
  );
}
