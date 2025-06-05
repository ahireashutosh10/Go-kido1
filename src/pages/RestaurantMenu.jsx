import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        console.log('Fetching menu for restaurant ID:', id);

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

        console.log('Response status:', response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response body:', errorText);
          throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Raw API Response:', data);

        const menuHead = data?.[0]?.MenuItem?.MenuHead;
        console.log('MenuHead array:', menuHead);

        if (Array.isArray(menuHead) && menuHead.length > 0) {
          const allItems = [];

          menuHead.forEach((category, categoryIndex) => {
            const items = category.category_products;

            console.log(`Category ${categoryIndex}:`, {
              name: category.category,
              id: category.category_id,
              hasItems: Array.isArray(items),
              itemCount: Array.isArray(items) ? items.length : 'not array'
            });

            if (Array.isArray(items)) {
              items.forEach((item, itemIndex) => {
                console.log(`  Item ${itemIndex} in ${category.category}:`, item);
                allItems.push({
                  ...item,
                  categoryName: category.category,
                  categoryId: category.category_id
                });
              });
            } else {
              console.log(`No items found in category ${category.category}`);
            }
          });

          console.log('Total items extracted:', allItems.length);
          setMenu(allItems);
        } else {
          console.warn('MenuHead not found, not an array, or empty');
          setMenu([]);
        }
      } catch (err) {
        console.error('Error fetching menu:', err);
        setError(err.message || 'Failed to load menu');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMenu();
    } else {
      setError('Restaurant ID is required');
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div style={{ padding: '1rem' }}>Loading menu...</div>;
  if (error) return <div style={{ padding: '1rem', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Restaurant Menu</h2>
      {menu.length === 0 ? (
        <p>No menu items found.</p>
      ) : (
        <div>
          {menu.map((item, index) => (
            <div 
              key={item.menu_item_id || item.id || index}
              style={{ 
                padding: '1rem', 
                margin: '0.5rem 0',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9'
              }}
            >
              {item.categoryName && (
                <div style={{ 
                  fontSize: '0.8em', 
                  color: '#666', 
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase'
                }}>
                  {item.categoryName}
                </div>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ fontSize: '1.1em' }}>
                    {item.name || item.menu_item_name || item.item_name || 'Unnamed Item'}
                  </strong>
                  {(item.description || item.menu_item_description) && (
                    <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.25rem' }}>
                      {item.description || item.menu_item_description}
                    </div>
                  )}
                </div>
                <span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#2d5016' }}>
                  ₹{item.price || item.menu_item_price || item.item_price || 'N/A'}
                </span>
              </div>

              {/* Debug info - can remove later */}
              <div style={{ fontSize: '0.7em', color: '#999', marginTop: '0.5rem', fontFamily: 'monospace' }}>
                Debug: {JSON.stringify(Object.keys(item))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
