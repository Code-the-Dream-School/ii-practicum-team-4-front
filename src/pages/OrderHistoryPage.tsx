import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Order } from '../types';
import OrderCard from '../components/OrderCard';

const OrderHistoryPage = () => {
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const orders: Order[] = [
    {
      id: '123',
      date: '15 Oct 2023',
      status: 'completed',
      items: [
        { name: 'Lettuce', quantity: 3, price: 2.99 },
        { name: 'Tomatoes', quantity: 2, price: 3.49 },
      ],
      subtotal: 15.95,
      deliveryFee: 5.99,
      total: 21.94,
      deliveryAddress: '123 Green St, Apt 4B, Brooklyn, NY 11201',
    },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesFilter =
      activeFilter === 'all' || order.status === activeFilter;
    const matchesSearch = order.id
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="order-history-page">
      <header className="page-header">
        <h1>Order History</h1>
        <div className="header-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="search-icon"></i>
          </div>
          <div className="filter-tabs">
            <button
              className={activeFilter === 'all' ? 'active' : ''}
              onClick={() => setActiveFilter('all')}
            >
              All Orders
            </button>
            <button
              className={activeFilter === 'completed' ? 'active' : ''}
              onClick={() => setActiveFilter('completed')}
            >
              Completed
            </button>
            <button
              className={activeFilter === 'cancelled' ? 'active' : ''}
              onClick={() => setActiveFilter('cancelled')}
            >
              Cancelled
            </button>
          </div>
        </div>
      </header>

      <main className="orders-list">
        {filteredOrders.length === 0 ? (
          <div className="empty-state">
            <img src="/images/empty-orders.svg" alt="No orders" />
            <h3>No orders found</h3>
            <p>When you place orders, they'll appear here</p>
            <button className="primary-button">Start Shopping</button>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        )}
      </main>

      <style jsx>{`
        .order-history-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
        }
        .page-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }
        .header-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .search-box {
          position: relative;
          width: 300px;
        }
        .search-box input {
          width: 100%;
          padding: 8px 16px 8px 40px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
        }
        .filter-tabs button {
          padding: 8px 16px;
          margin-left: 8px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .filter-tabs button.active {
          color: #4f46e5;
          border-bottom: 2px solid #4f46e5;
        }
        .empty-state {
          text-align: center;
          padding: 40px 0;
        }
      `}</style>
    </div>
  );
};

export default OrderHistoryPage;
