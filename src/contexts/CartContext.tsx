import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  image: string;
}

type BoxSize = 'Small' | 'Medium' | 'Large';

interface CartContextType {
  cart: CartItem[];
  // eslint-disable-next-line no-unused-vars
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  // eslint-disable-next-line no-unused-vars
  decreaseFromCart: (id: number) => void;
  // eslint-disable-next-line no-unused-vars
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  total: number;
  boxSize: BoxSize;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const getBoxSize = (quantity: number): BoxSize => {
  if (quantity <= 5) return 'Small';
  if (quantity <= 10) return 'Medium';
  return 'Large';
};

const getBoxPrice = (size: BoxSize): number => {
  switch (size) {
    case 'Small':
      return 35;
    case 'Medium':
      return 45;
    case 'Large':
      return 55;
    default:
      return 0;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  const decreaseFromCart = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const boxSize = getBoxSize(totalItems);
  const total = totalItems > 0 ? getBoxPrice(boxSize) : 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseFromCart,
        removeFromCart,
        clearCart,
        total,
        boxSize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
