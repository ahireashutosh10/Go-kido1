import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RestaurantMenu.css';
import { color } from 'framer-motion';

const RestaurantMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Beliebte Gerichte');

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('/api/api.php/restaurentdetail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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

        if (!response.ok) {
          throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // ✅ Extract restaurant info
        if (data?.[0]) {
          const restaurantData = data[0].Restaurant_Detail?.[0] || {};

          setRestaurantInfo({
            name: restaurantData.restaurant_name || restaurantData.name || 'Restaurant Name',
            address: restaurantData.address || restaurantData.restaurant_address || 'Address not available',
            image: restaurantData.image
              ? encodeURI(restaurantData.image)
              : (restaurantData.restaurant_image || restaurantData.cover_image || ''),
            minOrder: restaurantData.min_order || restaurantData.minimum_order || null,
            deliveryTime: restaurantData.delivery_time || null,
            rating: restaurantData.rating || null
          });
        }

        const menuHead = data?.[0]?.MenuItem?.MenuHead;
        const allItems = [];

        if (Array.isArray(menuHead)) {
          menuHead.forEach((category) => {
            (category.category_products || []).forEach((item) => {
              allItems.push({
                ...item,
                categoryName: category.category,
                categoryId: category.category_id
              });
            });
          });
        }

        setMenu(allItems);
      } catch (err) {
        setError(err.message || 'Failed to load menu');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMenu();
    else {
      setError('Restaurant ID is required');
      setLoading(false);
    }
  }, [id]);

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === (item.menu_item_id || item.id));
    if (existing) {
      setCart(cart.map(c => c.id === (item.menu_item_id || item.id) ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      setCart([...cart, {
        id: item.menu_item_id || item.id,
        name: item.name || item.menu_item_name || item.item_name || 'Unnamed Item',
        price: parseFloat(item.price || item.menu_item_price || item.item_price || 0),
        description: item.description || item.menu_item_description || '',
        quantity: 1
      }]);
    }
  };

  const removeFromCart = (id) => {
    const existing = cart.find(c => c.id === id);
    if (existing?.quantity > 1) {
      setCart(cart.map(c => c.id === id ? { ...c, quantity: c.quantity - 1 } : c));
    } else {
      setCart(cart.filter(c => c.id !== id));
    }
  };

  const getCartItemQuantity = (id) => cart.find(c => c.id === id)?.quantity || 0;
  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const categories = ['Beliebte Gerichte', 'Vorspeisen', 'Suppen', 'Salate', 'Vegitarische Spezialitäten', 'Getränke'];
  const filteredMenu = selectedCategory === 'Beliebte Gerichte'
    ? menu
    : menu.filter(item => item.categoryName === selectedCategory);

  if (loading) return <div className="menu-loading">Loading menu...</div>;
  if (error) return <div className="menu-error">Error: {error}</div>;

  return (
    <div className="restaurant-layout">
      <div className="menu-section">
        {/* Restaurant Header */}
        <div className="restaurant-header4">
          {restaurantInfo.image ? (
            <div className="restaurant-image-container">
              <img src={restaurantInfo.image} alt={restaurantInfo.name} className="restaurant-image" />
              <div className="restaurant-overlay">
                <h1 className="restaurant-name">{restaurantInfo.name}</h1>
                <p className="restaurant-address">{restaurantInfo.address}</p>
                {restaurantInfo.minOrder && <div className="restaurant-min-order">Min. {restaurantInfo.minOrder} €</div>}
              </div>
            </div>
          ) : (
            <div className="restaurant-info-no-image">
              <h1 className="restaurant-name">{restaurantInfo.name}</h1>
              <p className="restaurant-address">{restaurantInfo.address}</p>
              {restaurantInfo.minOrder && <div className="restaurant-min-order">Min. {restaurantInfo.minOrder} €</div>}
            </div>
          )}
        </div>

        {/* Category Buttons */}
        <div className="menu-categories">
          {categories.map(cat => (
            <button key={cat} className={`category-btn ${selectedCategory === cat ? 'active' : ''}`} onClick={() => setSelectedCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <h2 className="category-title">{selectedCategory}</h2>
        <div className="menu-grid">
          {filteredMenu.length === 0 ? (
            <p className="no-items">No items found in this category.</p>
          ) : filteredMenu.map(item => (
            <div key={item.menu_item_id || item.id} className="menu-item-card">
              <div className="menu-item-content">
                <h3 className="menu-item-name">{item.name || item.menu_item_name || item.item_name}</h3>
                <div className="menu-item-footer">
                  <span className="menu-item-price">{item.price || item.menu_item_price || 'N/A'} €</span>
                  <div className="quantity-controls">
                    {getCartItemQuantity(item.menu_item_id || item.id) > 0 && (
                      <>
                        <button className="quantity-btn minus" onClick={() => removeFromCart(item.menu_item_id || item.id)}>-</button>
                        <span className="quantity-display">{getCartItemQuantity(item.menu_item_id || item.id)}</span>
                      </>
                    )}
                    <button className="quantity-btn plus" onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="order-summary-section">
        <div className="order-summary">
          <h3 className="order-header" style={{color:'white'}}>Order Details</h3>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <span className="cart-item-price">{item.price.toFixed(2)} €</span>
                    </div>
                    <div className="cart-quantity-controls">
                      <button onClick={() => removeFromCart(item.id)} className="cart-quantity-btn">-</button>
                      <span className="cart-quantity">{item.quantity}</span>
                      <button
                        className="cart-quantity-btn"
                        onClick={() => addToCart(item)}
                      >+</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-total total-row">
                <span>TOTAL</span>
                <span>{getTotalPrice()} €</span>
              </div>

              <div className="delivery-option">
                <label className="radio-option">
                  <input type="radio" name="delivery" value="delivery" />
                  <span>Delivery</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="delivery" value="pickup" defaultChecked />
                  <span>Pickup</span>
                </label>
              </div>

              <button
                className="preorder-btn"
                onClick={() => navigate('/order-details', { state: { cart, restaurantInfo } })}
              >
                Pre-Order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
