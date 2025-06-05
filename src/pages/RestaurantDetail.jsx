import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      try {
        const res = await axios.get(`/api/restaurentdetail?restid=${id}`);
        const data = res.data?.[0];

        if (!data) {
          console.error('Invalid restaurant data');
          return;
        }

        setRestaurant(data);

        const items = data.MenuItem || [];

        const categoryMap = {};
        items.forEach((item) => {
          if (!categoryMap[item.category_id]) {
            categoryMap[item.category_id] = {
              category_id: item.category_id,
              category: item.category,
              products: [],
            };
          }
          categoryMap[item.category_id].products.push(item);
        });

        const categories = Object.values(categoryMap);
        setMenuCategories(categories);

        if (categories.length > 0) {
          setActiveCategory(categories[0].category_id);
        }
      } catch (err) {
        console.error('Error fetching restaurant detail:', err);
      }
    };

    fetchRestaurantDetail();
  }, [id]);

  return (
    <div style={{ padding: '20px' }}>
      {restaurant && (
        <>
          <h2>{restaurant.name}</h2>
          {restaurant.image && (
            <img
              src={restaurant.image}
              alt={restaurant.name}
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
            />
          )}
          <p style={{ marginTop: '10px' }}>
            <strong>Address:</strong> {restaurant.address}<br />
            <strong>Cuisine:</strong> {restaurant.cuisine}<br />
            <strong>Contact:</strong> {restaurant.mobile}
          </p>
        </>
      )}

      {menuCategories.length > 0 && (
        <>
          <div style={{ display: 'flex', gap: '10px', marginTop: '30px', flexWrap: 'wrap' }}>
            {menuCategories.map((cat) => (
              <button
                key={cat.category_id}
                onClick={() => setActiveCategory(cat.category_id)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '20px',
                  backgroundColor: activeCategory === cat.category_id ? '#c5dfb0' : '#f0f0f0',
                  border: '1px solid #ccc',
                  cursor: 'pointer'
                }}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <h3 style={{ marginTop: '20px' }}>
            {menuCategories.find((cat) => cat.category_id === activeCategory)?.category}
          </h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '10px' }}>
            {menuCategories
              .find((cat) => cat.category_id === activeCategory)
              ?.products.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: '15px',
                    backgroundColor: '#d2eac2',
                    borderRadius: '10px',
                    width: '250px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  <strong>{item.name}</strong>
                  <p style={{ margin: '8px 0' }}>{item.description}</p>
                  <p><strong>{parseFloat(item.price).toFixed(2)} €</strong></p>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetail;
