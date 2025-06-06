import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RestaurantDetail.css';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      try {
        const response = await fetch('/api/api.php/restaurentdetail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            deviceId: '1231231234',
            latitude: '7435242355',
            longitude: '774635423r',
            restid: id,
            restname: '',
            user: '123456',
            ipadd: '122.122.122.122'
          }),
        });

        const data = await response.json();
        const resData = data?.[0];
        setRestaurant(resData);

        const categories = resData?.MenuItem?.MenuHead || [];
        const formattedCategories = categories.map((cat) => ({
          category_id: cat.category_id,
          category: cat.category,
          products: Array.isArray(cat.MenuItem) ? cat.MenuItem : []
        }));

        setMenuCategories(formattedCategories);
        if (formattedCategories.length > 0) {
          setActiveCategory(formattedCategories[0].category_id);
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };

    fetchRestaurantDetail();
  }, [id]);

  return (
    <div className="restaurant-detail-container">
      {restaurant && (
        <div className="restaurant-header">
          <img className="restaurant-cover" src="/images/sample-cover.jpg" alt="Restaurant" />
          <div className="restaurant-info">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address || 'Amelia-Mary-Earhart-Straße 8'}</p>
            <p>Min. {restaurant.minimumdeliveryamount} €</p>
            <p>{restaurant.cuisine}</p>
          </div>
        </div>
      )}

      <div className="category-buttons">
        {menuCategories.map((cat) => (
          <button
            key={cat.category_id}
            className={`category-btn ${activeCategory === cat.category_id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.category_id)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="menu-order-wrapper">
        <div className="menu-items">
          {menuCategories
            .find((cat) => cat.category_id === activeCategory)
            ?.products.map((item) => (
              <div key={item.menu_item_id} className="menu-card">
                <h4>{item.menu_item_name}</h4>
                <p>{item.menu_item_description}</p>
                <div className="price-section">
                  <span>{parseFloat(item.menu_item_price).toFixed(2)} €</span>
                  <div className="actions">
                    <i className="info-btn">i</i>
                    <i className="plus-btn">+</i>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Total</p>
          <div className="pickup-option">
            <input type="radio" name="delivery" checked readOnly /> Pickup
          </div>
          <button className="order-btn">Available Soon</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
