import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RestaurantMenu.css';

const RestaurantMenu = () => {
  const { id } = useParams();
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

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        // Extract restaurant information
        if (data?.[0]) {
          const restaurantData = data[0];
          setRestaurantInfo({
            name: restaurantData.restaurant_name || restaurantData.name || 'Restaurant Name',
            address: restaurantData.address || restaurantData.restaurant_address || 'Address not available',
            image: restaurantData.image || restaurantData.restaurant_image || restaurantData.cover_image || '',
            minOrder: restaurantData.min_order || restaurantData.minimum_order || null,
            deliveryTime: restaurantData.delivery_time || null,
            rating: restaurantData.rating || null
          });
        }

        const menuHead = data?.[0]?.MenuItem?.MenuHead;

        if (Array.isArray(menuHead) && menuHead.length > 0) {
          const allItems = [];

          menuHead.forEach((category) => {
            const items = category.category_products;

            if (Array.isArray(items)) {
              items.forEach((item) => {
                allItems.push({
                  ...item,
                  categoryName: category.category,
                  categoryId: category.category_id
                });
              });
            }
          });

          setMenu(allItems);
        } else {
          setMenu([]);
        }
      } catch (err) {
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

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.menu_item_id || cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === (item.menu_item_id || item.id)
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
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

  const removeFromCart = (itemId) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem => 
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== itemId));
    }
  };

  const getCartItemQuantity = (itemId) => {
    const item = cart.find(cartItem => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const categories = ['Beliebte Gerichte', 'Vorspeisen', 'Suppen', 'Salate', 'Vegitarische Spezialitäten', 'Getränke'];

  const filteredMenu = selectedCategory === 'Beliebte Gerichte' 
    ? menu 
    : menu.filter(item => item.categoryName === selectedCategory);

  if (loading) return <div className="menu-loading">Loading menu...</div>;
  if (error) return <div className="menu-error">Error: {error}</div>;

  return (
    <div className="restaurant-layout">
      {/* Left Section - Restaurant Info & Menu */}
      <div className="menu-section">
        {/* Restaurant Header */}
        <div className="restaurant-header">
          {restaurantInfo.image && (
            <div className="restaurant-image-container">
              <img 
                src={restaurantInfo.image} 
                alt={restaurantInfo.name}
                className="restaurant-image"
              />
              <div className="restaurant-overlay">
                <h1 className="restaurant-name">{restaurantInfo.name}</h1>
                <p className="restaurant-address">{restaurantInfo.address}</p>
                {restaurantInfo.minOrder && (
                  <div className="restaurant-min-order">
                    Min. {restaurantInfo.minOrder} €
                  </div>
                )}
              </div>
            </div>
          )}
          
          {!restaurantInfo.image && (
            <div className="restaurant-info-no-image">
              <h1 className="restaurant-name">{restaurantInfo.name}</h1>
              <p className="restaurant-address">{restaurantInfo.address}</p>
              {restaurantInfo.minOrder && (
                <div className="restaurant-min-order">
                  Min. {restaurantInfo.minOrder} €
                </div>
              )}
            </div>
          )}
        </div>

        {/* Menu Categories Navigation */}
        <div className="menu-categories">
          {categories.map((category) => (
            <button 
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Category Title */}
        <div className="category-title">
          <h2>{selectedCategory}</h2>
        </div>

        {/* Menu Items */}
        {filteredMenu.length === 0 ? (
          <p className="no-items">No items found in this category.</p>
        ) : (
          <div className="menu-grid">
            {filteredMenu.map((item, index) => (
              <div 
                key={item.menu_item_id || item.id || index}
                className="menu-item-card"
              >
                <div className="menu-item-content">
                  <h3 className="menu-item-name">
                    {item.name || item.menu_item_name || item.item_name || 'Unnamed Item'}
                  </h3>
                  {(item.description || item.menu_item_description) && (
                    <p className="menu-item-description">
                      {item.description || item.menu_item_description}
                    </p>
                  )}
                  <div className="menu-item-footer">
                    <span className="menu-item-price">
                      {item.price || item.menu_item_price || item.item_price || 'N/A'} €
                    </span>
                    <div className="quantity-controls">
                      {getCartItemQuantity(item.menu_item_id || item.id) > 0 && (
                        <button 
                          className="quantity-btn minus"
                          onClick={() => removeFromCart(item.menu_item_id || item.id)}
                        >
                          -
                        </button>
                      )}
                      {getCartItemQuantity(item.menu_item_id || item.id) > 0 && (
                        <span className="quantity-display">
                          {getCartItemQuantity(item.menu_item_id || item.id)}
                        </span>
                      )}
                      <button 
                        className="quantity-btn plus"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Section - Order Summary */}
      <div className="order-summary-section">
        <div className="order-summary">
          <div className="order-header">
            <h3>Order Summary</h3>
          </div>
          
          <div className="order-content">
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <span className="cart-item-price">{item.price.toFixed(2)} €</span>
                      </div>
                      <div className="cart-quantity-controls">
                        <button 
                          className="cart-quantity-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          -
                        </button>
                        <span className="cart-quantity">{item.quantity}</span>
                        <button 
                          className="cart-quantity-btn"
                          onClick={() => addToCart({ 
                            menu_item_id: item.id, 
                            name: item.name, 
                            price: item.price,
                            description: item.description 
                          })}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="order-total">
                  <div className="total-row">
                    <span>TOTAL</span>
                    <span>{getTotalPrice()}</span>
                  </div>
                </div>

                <div className="delivery-option">
                  <label className="radio-option">
                    <input type="radio" name="delivery" value="pickup" defaultChecked />
                    <span>Pickup</span>
                  </label>
                </div>

                <button className="preorder-btn">
                  Preorder
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;