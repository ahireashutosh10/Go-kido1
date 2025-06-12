import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './RestaurantList.css';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('/api/restaurentlist');
        let restaurantData = [];

        if (Array.isArray(response.data)) {
          restaurantData = response.data;
        } else if (response.data?.restaurants) {
          restaurantData = response.data.restaurants;
        } else if (response.data?.data) {
          restaurantData = response.data.data;
        }

        const currentTime = new Date();
        const currentDay = currentTime.toLocaleDateString('en-US', { weekday: 'short' });
        const currentTimeStr = currentTime.toTimeString().slice(0, 5); // "HH:MM"

        const isOpen = (hours) => {
          const todayHours = hours?.filter(h => h.Day === currentDay);
          return todayHours?.some(h => {
            return currentTimeStr >= h.FirstOrder.slice(0, 5) && currentTimeStr <= h.LastOrder.slice(0, 5);
          });
        };

        const filteredData = restaurantData.filter(r => isOpen(r.hours));
        setRestaurants(filteredData);
      } catch (error) {
        setError(error.message || 'Failed to load restaurants');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const handleRestaurantClick = (restaurant) => {
    const restaurantId = restaurant.id || restaurant.restaurant_id || restaurant.restid;
    navigate(`/restaurant/${restaurantId}/menu`);
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (!searchQuery) return true;

    const name = restaurant.name || restaurant.restaurant_name || '';
    const address = restaurant.address || restaurant.restaurant_address || '';
    const cuisine = restaurant.cuisine || restaurant.cuisine_type || '';

    return (
      name.toLowerCase().includes(searchQuery) ||
      address.toLowerCase().includes(searchQuery) ||
      cuisine.toLowerCase().includes(searchQuery)
    );
  });

  if (loading) return <div className="loading">Loading restaurants...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="restaurant-list">
      <h2>Restaurants {searchQuery && `(Search: "${searchQuery}")`}</h2>

      {filteredRestaurants.length === 0 ? (
        <p>No restaurants available {searchQuery && `for "${searchQuery}"`}.</p>
      ) : (
        <div className="restaurant-grid">
          {filteredRestaurants.map((restaurant, index) => {
            const restaurantId = restaurant.id || restaurant.restaurant_id || restaurant.restid || index;
            const restaurantName = restaurant.name || restaurant.restaurant_name || 'Unnamed Restaurant';
            const restaurantAddress = restaurant.address || restaurant.restaurant_address || 'Address not available';
            const cuisineType = restaurant.cuisine || restaurant.cuisine_type || '';
            const imageUrl = restaurant.image || '/default.jpg';

            return (
              <div
                key={restaurantId}
                className="restaurant-card"
                style={{ backgroundImage: `url(${imageUrl})` }}
                onClick={() => handleRestaurantClick(restaurant)}
              >
                <div className="cuisine-tag">{cuisineType}</div>
                <div className="status-badge">open</div>
                <div className="overlay" />
                <div className="restaurant-info">
                  <h3>{restaurantName}</h3>
                  <p>{restaurantAddress}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
