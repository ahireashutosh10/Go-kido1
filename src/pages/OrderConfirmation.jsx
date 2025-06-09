

import React from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import './OrderConfirmation.css';

export default function OrderConfirmation() {
  const location = useLocation();
  const {
    orderId = 'GK20250606-009',
    title = 'Latest Submissions',
    subtitle = 'Secure Payment Methods',
    fare = 0,
    paymentFee = 0,
    tip = 0,
    discount = 0,
    tax07 = 0,
    tax19 = 0,
    products = [],
  } = location.state || {};

  const productsSubtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = productsSubtotal + fare + paymentFee + tip - discount + tax07 + tax19 + 21.40;

  return (
    <>
      <div className="abcd">
        <div className="overlay"></div>
        <h1>Order Confirmed!</h1>
      </div>

      <div className="confirmation-wrapper">
        <div className="confirmation-card">
          <div className="confirmation-header">Bestellung erhalten!</div>

          <div className="confirmation-content">
            <CheckCircleIcon className="check-icon" />
            <h2 className="order-id">Order ID {orderId}</h2>
            <h3 className="order-title">{title}</h3>
            <p className="order-subtitle">{subtitle}</p>

            <div className="product-list">
              {products.map((product) => (
                <div key={product.id} className="product-row">
                  <span>{product.name} x {product.quantity}</span>
                  <span>{(product.price * product.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cost-details">
            <div className="cost-row"><span>Product Subtotal</span><span>€ {productsSubtotal.toFixed(2)}</span></div>
            <div className="cost-row"><span>Delivery Fare</span><span>+ € {fare.toFixed(2)}</span></div>
            <div className="cost-row"><span>Payment Fee</span><span>+ € {paymentFee.toFixed(2)}</span></div>
            <div className="cost-row"><span>Tip</span><span>+ € {tip.toFixed(2)}</span></div>
            <div className="cost-row"><span>Discount</span><span>– € {discount.toFixed(2)}</span></div>
            <div className="cost-row"><span>Tax 07%</span><span>+ € {tax07.toFixed(2)}</span></div>
            <div className="cost-row"><span>Tax 19%</span><span>+ € {tax19.toFixed(2)}</span></div>
            <div className="total-row"><strong>Grand Total</strong><strong>€ {total.toFixed(2)}</strong></div>
          </div>
        </div>
      </div>
    </>
  );
}