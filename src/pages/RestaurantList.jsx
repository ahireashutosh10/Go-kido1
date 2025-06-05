import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

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
        console.log('Fetching restaurants...');
        
        // Debug: Log the request URL
        console.log('Request URL:', '/api/restaurentlist');
        
        const response = await axios.get('/api/restaurentlist');
        
        console.log('Raw API Response:', response.data);
        console.log('Response status:', response.status);
        
        // Handle different possible response structures
        let restaurantData = [];
        
        if (Array.isArray(response.data)) {
          restaurantData = response.data;
        } else if (response.data?.restaurants && Array.isArray(response.data.restaurants)) {
          restaurantData = response.data.restaurants;
        } else if (response.data?.data && Array.isArray(response.data.data)) {
          restaurantData = response.data.data;
        } else {
          console.warn('Unexpected response structure:', response.data);
          restaurantData = [];
        }
        
        console.log('Processed restaurant data:', restaurantData);
        setRestaurants(restaurantData);
        
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        console.error('Error details:', {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data
        });
        setError(error.message || 'Failed to load restaurants');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Enhanced filtering with better search logic
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

  // Navigate to /restaurant/:id/menu
  const handleRestaurantClick = (restaurant) => {
    const restaurantId = restaurant.id || restaurant.restaurant_id || restaurant.restid;
    console.log('Navigating to restaurant:', restaurantId);
    navigate(`/restaurant/${restaurantId}/menu`);
  };

  if (loading) return <div style={{ padding: '1rem' }}>Loading restaurants...</div>;
  if (error) return <div style={{ padding: '1rem', color: 'red' }}>Error: {error}</div>;

  return (
    <div className="restaurant-list" style={{ padding: '1rem' }}>
      <h2>Restaurants {searchQuery && `(Search: "${searchQuery}")`}</h2>
      
      {filteredRestaurants.length === 0 ? (
        <p>
          {searchQuery 
            ? `No restaurants found for "${searchQuery}"` 
            : 'No restaurants available'
          }
        </p>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {filteredRestaurants.map((restaurant, index) => {
            // Handle different possible ID fields
            const restaurantId = restaurant.id || restaurant.restaurant_id || restaurant.restid || index;
            const restaurantName = restaurant.name || restaurant.restaurant_name || 'Unnamed Restaurant';
            const restaurantAddress = restaurant.address || restaurant.restaurant_address || 'Address not available';
            const cuisineType = restaurant.cuisine || restaurant.cuisine_type || '';
            const rating = restaurant.rating || restaurant.restaurant_rating || '';
            
            return (
              <div
                key={restaurantId}
                className="restaurant-card"
                onClick={() => handleRestaurantClick(restaurant)}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>
                      {restaurantName}
                    </h3>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.9em' }}>
                      {restaurantAddress}
                    </p>
                    {cuisineType && (
                      <p style={{ margin: '0', color: '#888', fontSize: '0.8em', fontStyle: 'italic' }}>
                        {cuisineType}
                      </p>
                    )}
                  </div>
                  {rating && (
                    <div style={{ 
                      backgroundColor: '#4CAF50', 
                      color: 'white', 
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '4px',
                      fontSize: '0.8em',
                      fontWeight: 'bold'
                    }}>
                      ⭐ {rating}
                    </div>
                  )}
                </div>
                
                <div style={{ 
                  marginTop: '0.75rem', 
                  padding: '0.5rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  color: '#007bff',
                  fontWeight: '500'
                }}>
                  Click to view menu →
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