import { useState } from 'react';
import { Order } from '../types';

const OrderCard = ({ order }: { order: Order }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`order-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="order-summary" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="order-meta">
          <span className="order-id">{order.id}</span>
          <span className="order-date">{order.date}</span>
        </div>
        <div className="order-status">
          <span className={`status-badge ${order.status}`}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
          <span className="toggle-icon">{isExpanded ? '−' : '+'}</span>
        </div>
      </div>

      {isExpanded && (
        <div className="order-details">
          <div className="items-list">
            {order.items.map((item, index) => (
              <div key={index} className="order-item">
                <span className="item-name">{item.name}</span>
                <span className="item-quantity">x{item.quantity}</span>
                <span className="item-price">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal</span>
              <span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Delivery Fee</span>
              <span>${order.deliveryFee.toFixed(2)}</span>
            </div>
            <div className="total-row grand-total">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="order-actions">
            <button className="secondary-button">Reorder</button>
            <button className="secondary-button">View Receipt</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .order-card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          margin-bottom: 16px;
          overflow: hidden;
        }
        .order-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          cursor: pointer;
          background-color: #f9fafb;
        }
        .order-meta {
          display: flex;
          flex-direction: column;
        }
        .order-id {
          font-weight: 600;
          color: #111827;
        }
        .order-date {
          color: #6b7280;
          font-size: 14px;
        }
        .order-status {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .status-badge {
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 14px;
        }
        .status-badge.completed {
          background-color: #d1fae5;
          color: #065f46;
        }
        .status-badge.cancelled {
          background-color: #fee2e2;
          color: #b91c1c;
        }
        .toggle-icon {
          font-weight: bold;
        }
        .order-details {
          padding: 16px;
          border-top: 1px solid #e5e7eb;
        }
        .items-list {
          margin-bottom: 16px;
        }
        .order-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #f3f4f6;
        }
        .order-totals {
          margin: 16px 0;
        }
        .total-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
        }
        .grand-total {
          font-weight: 600;
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid #e5e7eb;
        }
        .order-actions {
          display: flex;
          gap: 12px;
          margin-top: 16px;
        }
        .secondary-button {
          padding: 8px 16px;
          background: none;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default OrderCard;
