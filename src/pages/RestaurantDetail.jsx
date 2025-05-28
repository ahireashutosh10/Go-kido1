import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import restaurantData from './records.json'; // External JSON
import "./PartnerDetailPage.css";

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const foundRestaurant = restaurantData.find(r => r.restroid === id);
    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
    } else {
      console.error(`Restaurant with ID ${id} not found`);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading restaurant details...</p>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="not-found">
        <p>Restaurant not found</p>
        <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
      </div>
    );
  }

  const categories = ['All', ...new Set(restaurant.MenuItem.map(item => item.category))];
  const filteredMenu = activeCategory === 'All'
    ? restaurant.MenuItem
    : restaurant.MenuItem.filter(item => item.category === activeCategory);

  return (
    <div className="restaurant-detail-container">
      {/* Back button */}
      <button onClick={() => navigate(-1)} className="back-button">
        &larr; Back to Restaurants
      </button>

      {/* Banner Section */}
      <div
        className="restaurant-banner"
        style={{
          backgroundImage: `url(${restaurant.banner || 'https://via.placeholder.com/1200x400?text=Banner'})`
        }}
      >
        <div className="restaurant-banner-overlay">
          {restaurant.logo && (
            <img
              src={restaurant.logo}
              alt={restaurant.name}
              className="restaurant-logo"
            />
          )}
          <h1 className="restaurant-name">{restaurant.name}</h1>
          <p className="restaurant-address">{restaurant.address}</p>
          <p className="restaurant-meta">
            <i className="fas fa-clock"></i> Min. {restaurant.minimumdeliveryamount} € &nbsp;•&nbsp; {restaurant.minimumdeliverytime} min delivery
          </p>
          <p className="restaurant-cuisine">{restaurant.cuisine}</p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {filteredMenu.length === 0 ? (
          <p className="no-items">No menu items in this category.</p>
        ) : (
          filteredMenu.map(item => (
            <div key={item.mnuid} className="menu-item">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <div className="item-price">{item.price} €</div>
              </div>
              {item.image && !item.image.includes('(960 × 640 px)') && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="item-image"
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
