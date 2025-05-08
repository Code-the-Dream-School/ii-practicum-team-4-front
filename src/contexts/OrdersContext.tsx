import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

interface Order {
  id: number;
  date: string;
  boxSummary: string;
  items: number;
  total: number;
  status: 'Delivered' | 'In Progress';
}

interface OrdersContextType {
  orders: Order[];
  placeOrder: (
    cart: { id: number; name: string; quantity: number }[],
    total: number,
    boxSize: 'Small' | 'Medium' | 'Large'
  ) => void;
}

const OrdersContext = createContext<OrdersContextType | null>(null);

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context)
    throw new Error('useOrders must be used within an OrdersProvider');
  return context;
};

export const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const placeOrder = (
    cart: { id: number; name: string; quantity: number }[],
    total: number,
    boxSize: 'Small' | 'Medium' | 'Large'
  ) => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const summary = `Box: ${boxSize} x1`; // упрощённо, можешь изменить

    const newOrder: Order = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      boxSummary: summary,
      items: totalItems,
      total,
      status: 'Delivered', // можно сделать случайным или 'In Progress'
    };

    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <OrdersContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};
