import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RestaurantMenu.css';

const RestaurantMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Beliebte Gerichte');
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('${API_BASE_URL}/api/api.php/restaurentdetail', {
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

        if (!response.ok) throw new Error(`Server error: ${response.status}`);
        const data = await response.json();

        if (data?.[0]) {
          const res = data[0].Restaurant_Detail?.[0] || {};
          const hours = data[0].hours || [];

          setRestaurantInfo({
            name: res.restaurant_name || res.name || 'Restaurant Name',
            address: res.address || res.restaurant_address || 'Address not available',
            image: res.image ? encodeURI(res.image) : (res.restaurant_image || res.cover_image || ''),
            minOrder: res.min_order || res.minimum_order || null,
            deliveryTime: res.delivery_time || null,
            rating: res.rating || null,
            hours: hours
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

  const isRestaurantOpen = () => {
    const today = new Date();
    const dayMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentDay = dayMap[today.getDay()];
    const currentTime = today.getHours() * 60 + today.getMinutes();

    const todayHours = restaurantInfo.hours?.find(h => h.Day === currentDay);
    if (!todayHours) return false;

    const [openH, openM] = todayHours.FirstOrder.split(':').map(Number);
    const [closeH, closeM] = todayHours.LastOrder.split(':').map(Number);
    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;

    // Handle overnight case
    if (closeMinutes < openMinutes) {
      return currentTime >= openMinutes || currentTime < closeMinutes;
    } else {
      return currentTime >= openMinutes && currentTime < closeMinutes;
    }
  };

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

  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const categories = [...new Set(menu.map(item => item.categoryName))];
  const filteredMenu = selectedCategory === 'Beliebte Gerichte' ? menu : menu.filter(item => item.categoryName === selectedCategory);

  const handleShowInfo = (item) => {
    setModalItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalItem(null);
    setShowModal(false);
  };

  if (loading) return <div className="menu-loading">Loading menu...</div>;
  if (error) return <div className="menu-error">Error: {error}</div>;

  // ❗ Show closed message if restaurant is not open
  if (!isRestaurantOpen()) {
    return <div className="restaurant-closed">This restaurant is currently closed.</div>;
  }

  return (
    <div className="restaurant-layout">
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

      <div className="menu-cart-wrapper">
        <div className="menu-section">
          <div className="menu-categories">
            {categories.map(cat => (
              <button key={cat} className={`category-btn ${selectedCategory === cat ? 'active' : ''}`} onClick={() => setSelectedCategory(cat)}>
                {cat}
              </button>
            ))}
          </div>

          <h2 className="category-title">{selectedCategory}</h2>
          <div className="menu-grid">
            {filteredMenu.length === 0 ? (
              <p className="no-items">No items found in this category.</p>
            ) : filteredMenu.map(item => (
              <div key={item.menu_item_id || item.id} className="menu-item-card">
                <div className="menu-item-info">
                  <h4 className="menu-item-name">{item.name || item.menu_item_name || item.item_name}</h4>
                  <p className="menu-item-description">ab {item.price || item.menu_item_price || 'N/A'}€ Erstelle nach deinem Geschmack.</p>
                  <p className="menu-item-price">{item.price || item.menu_item_price || 'N/A'} €</p>
                  <div className="menu-item-footer">
                    <button className="icon-info" onClick={() => handleShowInfo(item)}>i</button>
                    <button className="configure-btn" onClick={() => addToCart(item)}>Konfiguriere</button>
                    <button className="icon-plus" onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
                <img
                  src={item.image ? encodeURI(item.image) : '/default.jpg'}
                  alt={item.name || 'Menu Item'}
                  className="menu-item-image"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="order-summary-section">
          <div className="order-summary">
            <h3 className="order-header">Order Details</h3>
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
                        <button onClick={() => addToCart(item)} className="cart-quantity-btn">+</button>
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
                <button className="preorder-btn" onClick={() => navigate('/order-details', { state: { cart, restaurantInfo } })}>
                  Pre-Order
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {showModal && modalItem && (
        <div className="Abc">
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{modalItem.name || modalItem.menu_item_name}</h3>
                <button className="modal-close-btn" onClick={handleCloseModal}>×</button>
              </div>
              <img
                src={modalItem.image ? encodeURI(modalItem.image) : '/default.jpg'}
                alt={modalItem.name || 'Menu Image'}
                className="modal-image"
              />
              <p><strong>Allergy Information:</strong> {modalItem.allergy || 'Not available'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
