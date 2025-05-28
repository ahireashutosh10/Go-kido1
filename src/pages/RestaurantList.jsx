import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  // Extract query string (?search=...) from URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('https://testapp.gokidogo.com/webapi/api.php/restaurentlist');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name?.toLowerCase().includes(searchQuery)
  );

  const handleRestaurantClick = (id) => {
    navigate(`/restaurant/${id}`);
  };

  if (loading) return <p>Loading restaurants...</p>;

  return (
    <div className="restaurant-list">
      {filteredRestaurants.length === 0 ? (
        <p>No restaurants found for "{searchQuery}"</p>
      ) : (
        filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="restaurant-card"
            onClick={() => handleRestaurantClick(restaurant.id)}
            style={{
              border: '1px solid #ccc',
              margin: '10px',
              padding: '10px',
              cursor: 'pointer'
            }}
          >
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RestaurantList;
