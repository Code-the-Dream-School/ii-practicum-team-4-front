import { useEffect, useState } from 'react';
import Button from '../components/Button';
import smallBoxImg from '../assets/images/box-small.png';
import mediumBoxImg from '../assets/images/box-medium.png';
import largeBoxImg from '../assets/images/box-large.png';
import { useNavigate } from 'react-router-dom';

export interface Box {
  _id: string;
  name: string;
  weight: number;
  price: number;
}

export interface Product {
  _id: string;
  name: string;
  category: string;
  image: string;
}

export interface Cart {
  boxes: { name: string; quantity: number }[];
  totalPrice: number;
  items: { product_id: string; weight: number }[];
}

const ShoppingPage = () => {
  const navigate = useNavigate();

  const [boxes, setBoxes] = useState<Box[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart>({
    boxes: [],
    totalPrice: 0,
    items: [],
  });

  useEffect(() => {
    const fetchBoxes = async () => {
      const response = await fetch('http://localhost:8000/api/v1/boxes');
      const data = await response.json();
      setBoxes(data.boxes);
    };

    const fetchProducts = async () => {
      const response = await fetch('http://localhost:8000/api/v1/products');
      const data = await response.json();
      setProducts(data.products);
    };

    fetchBoxes();
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length === 0 || boxes.length === 0) return;

    const storedCart = localStorage.getItem('storedCart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      console.log({ parsedCart });
      setCart(parsedCart);
      calculateBoxes(parsedCart);
    }
  }, [boxes, products]);

  const getBoxImage = (box: Box) => {
    switch (box.name) {
      case 'Small':
        return smallBoxImg;
      case 'Medium':
        return mediumBoxImg;
      case 'Large':
        return largeBoxImg;
      default:
        return '';
    }
  };

  const getBoxesString = () => {
    return cart.boxes.map((box) => `${box.name} x${box.quantity}`).join('; ');
  };

  const decreaseProductQuantity = (productId: string) => {
    const newCart = { ...cart };
    const item = newCart.items.find((item) => item.product_id === productId);
    if (item && item.weight > 1) {
      item.weight -= 1;
    } else {
      newCart.items = newCart.items.filter(
        (item) => item.product_id !== productId
      );
    }
    calculateBoxes(newCart);
    setCart(newCart);
    localStorage.setItem('storedCart', JSON.stringify(newCart));
  };

  const increaseProductQuantity = (productId: string) => {
    const newCart = { ...cart };
    const item = newCart.items.find((item) => item.product_id === productId);
    if (item) {
      item.weight += 1;
    } else {
      newCart.items.push({ product_id: productId, weight: 1 });
    }
    calculateBoxes(newCart);
    setCart(newCart);
    localStorage.setItem('storedCart', JSON.stringify(newCart));
  };

  const calculateBoxes = (newCart: Cart) => {
    let totalWeight: number = newCart.items.reduce(
      (acc, item) => acc + item.weight,
      0
    );

    if (totalWeight === 0) {
      newCart.boxes = [];
      newCart.totalPrice = 0;
      return;
    }

    newCart.boxes = [];
    while (totalWeight > 0) {
      const biggestBox =
        boxes.find((box) => {
          return box.weight >= totalWeight;
        }) || boxes[boxes.length - 1];

      if (biggestBox) {
        const boxIndex = newCart.boxes.findIndex(
          (box) => box.name === biggestBox.name
        );
        if (boxIndex !== -1) {
          newCart.boxes[boxIndex].quantity += 1;
        } else {
          newCart.boxes.push({ name: biggestBox.name, quantity: 1 });
        }
        totalWeight -= biggestBox.weight;
      } else {
        break;
      }
    }
    newCart.totalPrice = newCart.boxes.reduce((acc, box) => {
      const boxPrice = boxes.find((b) => b.name === box.name)?.price || 0;
      return acc + box.quantity * boxPrice;
    }, 0);
  };

  if (!boxes.length || !products.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-subtext text-primary bg-background mx-auto max-w-screen-xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {boxes.map((box, idx) => (
            <div
              key={idx}
              className="border-warning bg-form-light w-full rounded-xl border p-4 text-center shadow-sm transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-lg"
            >
              <h3 className="text-error font-heading text-lg font-semibold">
                {box.name} Box
              </h3>

              <img
                src={getBoxImage(box)}
                alt={`${box.weight} box`}
                className="mx-auto my-3 h-24 w-auto object-contain"
              />

              <p className="text-sm">{box.weight} items</p>
              <p className="text-error mt-2 text-xl font-bold">${box.price}</p>
            </div>
          ))}
        </div>

        <div className="border-secondarу bg-form-light mx-auto w-full max-w-xs self-start rounded-lg border p-4 lg:mx-0">
          <h3 className="font-heading mb-2 text-lg font-bold">Cart Total</h3>
          <div className="mb-2 text-sm">
            {cart.totalPrice === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <p className="mb-1 text-sm">
                  Box: <span className="font-semibold">{getBoxesString()}</span>
                </p>

                <p className="mb-4 text-sm">
                  Total: <span className="font-bold">${cart.totalPrice}</span>
                </p>
              </>
            )}
          </div>

          <Button
            text="Go To Cart"
            type="button"
            color="primary"
            onClick={() => {
              navigate('/cart');
            }}
          />
        </div>
      </div>

      <h2 className="font-heading text-primary mb-4 text-xl font-bold">
        Produce Selection
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col items-center rounded-xl border-2 border-orange-400 bg-white p-4 shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-32 w-32 object-contain"
            />
            <h3 className="mt-2 font-bold">Name</h3>
            <div className="mt-2 flex items-center space-x-2">
              <button
                className="rounded bg-gray-200 px-2"
                onClick={() => decreaseProductQuantity(product._id)}
              >
                -
              </button>
              <span className="w-8 text-center">
                {cart.items.find((item) => item.product_id === product._id)
                  ?.weight || 0}
              </span>
              <button
                className="rounded bg-orange-400 px-2 text-white"
                onClick={() => increaseProductQuantity(product._id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
