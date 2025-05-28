import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const { id } = useParams(); // id from route parameter
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://testapp.gokidogo.com/webapi/api.php/restaurentdetail?restid=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch menu');
        }
        return response.json();
      })
      .then((data) => {
        setMenu(data); // assuming data is an array or object
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Restaurant Menu</h2>
      {menu.length === 0 ? (
        <p>No menu items found.</p>
      ) : (
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;
