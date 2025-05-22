import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import placeholderImg from '../assets/images/icons/placeholder.svg';

interface ProductItem {
  product_id: {
    _id: string;
    name: string;
    image: string;
  };
  weight: number;
}

interface Box {
  box_id: string;
  items: ProductItem[];
}

interface OrderItem {
  _id: string;
  createdAt: string;
  status: string;
  totalOrderPrice: number;
  delivery_address: string;
  delivery_first_name: string;
  delivery_last_name: string;
  delivery_email: string;
  delivery_phone: string;
  delivery_additional_info?: string;
  boxes: Box[];
}

const OrderDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchOrderById = async (id: string): Promise<OrderItem | null> => {
    try {
      const res = await fetch(`http://localhost:8000/api/v1/orders/${id}`);
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      const data = await res.json();
      return data.order ?? null;
    } catch (err) {
      console.error('Failed to fetch order:', err);
      return null;
    }
  };

  useEffect(() => {
    const loadOrder = async () => {
      if (!id) return;
      const fetchedOrder = await fetchOrderById(id);
      if (fetchedOrder) {
        setOrder(fetchedOrder);
      } else {
        setError(true);
      }
      setLoading(false);
    };

    loadOrder();
  }, [id]);

  if (loading) {
    return <p className="text-primary mt-10 text-center">Loading order...</p>;
  }

  if (error || !order) {
    return <p className="text-error mt-10 text-center">Order not found.</p>;
  }

  return (
    <div className="bg-background min-h-screen p-4 md:p-8">
      <Button
        text="Back to Orders"
        onClick={() => navigate(-1)}
        color="secondary"
      />

      <h1 className="text-primary font-heading mt-4 mb-6 text-2xl">
        Order #{order._id?.slice(-6) || '-'} Details
      </h1>

      <section className="bg-form-light border-yellow rounded-xl border p-6 shadow">
        <div className="mb-4">
          <p className="text-secondary text-sm">
            Date:{' '}
            {order.createdAt
              ? new Date(order.createdAt).toLocaleDateString()
              : '-'}
          </p>
          <p className="text-primary font-semibold">
            Status: {order.status || '-'}
          </p>
          <p className="text-primary text-sm">
            Total: ${Number(order.totalOrderPrice || 0).toFixed(2)}
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-primary font-subtext text-lg">
            Shipping Information
          </h2>
          <p className="text-secondary text-sm">
            {order.delivery_first_name || '-'} {order.delivery_last_name || '-'}
          </p>
          <p className="text-secondary text-sm">
            {order.delivery_address || '-'}
          </p>
          <p className="text-secondary text-sm">
            {order.delivery_phone || '-'}
          </p>
          <p className="text-secondary text-sm">
            {order.delivery_email || '-'}
          </p>
        </div>

        {order.delivery_additional_info && (
          <div className="mb-4">
            <h2 className="text-primary font-subtext text-lg">
              Additional Info
            </h2>
            <p className="text-secondary text-sm">
              {order.delivery_additional_info || '-'}
            </p>
          </div>
        )}

        <div>
          <h2 className="text-primary font-subtext mb-2 text-lg">Products</h2>
          <div className="space-y-6">
            {(order.boxes || []).map((box, boxIndex) => (
              <div key={boxIndex}>
                <h3 className="text-primary mb-2 font-semibold">
                  Box {boxIndex + 1}
                </h3>
                <ul className="space-y-3">
                  {box.items.map((item, itemIndex) => {
                    const product = item.product_id;
                    if (!product) return null;

                    return (
                      <li
                        key={`${boxIndex}-${itemIndex}`}
                        className="flex items-center gap-4"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-12 w-12 rounded object-contain"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = placeholderImg;
                          }}
                        />
                        <div>
                          <p className="text-primary font-medium">
                            {product.name}
                          </p>
                          <p className="text-secondary text-sm">
                            Weight: {item.weight} lb
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderDetailPage;
