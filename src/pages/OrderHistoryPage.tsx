import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

interface OrderItem {
  _id: string;
  createdAt: string;
  status: string;
  totalOrderPrice?: number;
  boxes: {
    items: {
      product_id: {
        _id: string;
        name: string;
        image: string;
      };
      weight: number;
    }[];
  }[];
}

const OrderHistoryPage = () => {
  const { userId } = useAuth();
  console.log(userId); // "680446956f0ccb0363b79f7b"

  const [orders, setOrders] = useState<OrderItem[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/orders/?user_id=${userId}`
        );
        const data = await res.json();
        setOrders(data.orders);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  return (
    <div className="bg-background min-h-screen p-4 md:p-8">
      <h1 className="text-primary font-heading mb-6 text-2xl">Order History</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-form-light border-yellow rounded-xl border p-4 shadow"
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <p className="text-secondary text-sm">
                  <span className="font-bold">
                    Order #{order._id.slice(-6)}
                  </span>{' '}
                  — {formatDate(order.createdAt)}
                </p>
                <p className="text-primary mt-1 text-sm font-semibold">
                  Status: <span className="capitalize">{order.status}</span>
                </p>
                <p className="text-primary text-sm">
                  Total: ${order.totalOrderPrice?.toFixed(2) || 'N/A'}
                </p>
              </div>

              <div className="mt-4 flex flex-row gap-4 md:mt-0">
                {order.boxes?.[0]?.items?.slice(0, 3).map((item) => (
                  <img
                    key={item.product_id._id}
                    src={item.product_id.image}
                    alt={item.product_id.name}
                    className="h-16 w-16 rounded object-contain"
                    onError={(e) => {
                      e.currentTarget.src =
                        'src/assets/images/icons/placeholder.svg';
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4">
              <Link to={`/order-history/${order._id}`}>
                <Button text="View Details" color="primary" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistoryPage;
