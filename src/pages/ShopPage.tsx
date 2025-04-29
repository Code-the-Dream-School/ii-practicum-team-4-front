import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import Button from '../components/Button';
import lettuceImg from '../assets/images/lettuce.png';
import smallBoxImg from '../assets/images/box-small.png';
import mediumBoxImg from '../assets/images/box-medium.png';
import largeBoxImg from '../assets/images/box-large.png';

const boxes = [
  {
    size: 'Small',
    items: 5,
    price: 35,
    image: smallBoxImg,
  },
  {
    size: 'Medium',
    items: 10,
    price: 45,
    image: mediumBoxImg,
  },
  {
    size: 'Large',
    items: 15,
    price: 55,
    image: largeBoxImg,
  },
];

const products = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  name: 'Lettuce',
  description: 'Short description about the product goes here.',
  image: lettuceImg,
}));

const ShopPage = () => {
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(0);
  const { cart, addToCart, total, boxSize } = useCart();

  useEffect(() => {
    const idx = boxes.findIndex((box) => box.size === boxSize);
    if (idx !== -1) {
      setSelectedBoxIndex(idx);
    }
  }, [boxSize]);

  const getProductQuantity = (id: number) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseProductQuantity = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addToCart(
        {
          id: product.id,
          name: product.name,
          image: product.image,
        },
        1
      );
    }
  };

  const decreaseProductQuantity = (productId: number) => {
    const currentQty = getProductQuantity(productId);
    if (currentQty > 0) {
      const product = products.find((p) => p.id === productId);
      if (product) {
        addToCart(
          {
            id: product.id,
            name: product.name,
            image: product.image,
          },
          -1
        );
      }
    }
  };

  return (
    <div className="font-subtext text-primary bg-background mx-auto max-w-screen-xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {boxes.map((box, idx) => (
            <div
              key={idx}
              className={`rounded-xl border p-4 text-center shadow-sm transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-lg ${
                idx === selectedBoxIndex
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-300 bg-white'
              }`}
            >
              <h3 className="text-error font-heading text-lg font-semibold">
                {box.size} Box
              </h3>

              <img
                src={box.image}
                alt={`${box.size} box`}
                className="mx-auto my-3 h-24 w-auto object-contain"
              />

              <p className="text-sm">{box.items} items</p>
              <p className="text-error mt-2 text-xl font-bold">${box.price}</p>
            </div>
          ))}
        </div>

        <div className="border-secondary bg-form-light mx-auto w-full max-w-xs self-start rounded-lg border p-4 lg:mx-0">
          <h3 className="font-heading mb-2 text-lg font-bold">Cart Total</h3>
          <div className="mb-2 text-sm">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <p key={item.id}>
                    {item.name} x{' '}
                    <span className="font-semibold">{item.quantity}</span>
                  </p>
                ))}
              </>
            )}
          </div>

          <p className="mb-1 text-sm">
            Box Size: <span className="font-semibold">{boxSize}</span>
          </p>

          <p className="mb-4 text-sm">
            Total: <span className="font-bold">${total.toFixed(2)}</span>
          </p>

          <Button text="Go To Cart" type="button" color="primary" />
        </div>
      </div>

      <h2 className="font-heading text-primary mb-4 text-xl font-bold">
        Produce Selection
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center rounded-xl border-2 border-orange-400 bg-white p-4 shadow"
          >
            <img
              src={lettuceImg}
              alt="Lettuce"
              className="h-32 w-32 object-contain"
            />
            <h3 className="mt-2 font-bold">Name</h3>
            <p className="text-center text-xs text-gray-600">
              Short description Short description Short description
            </p>
            <div className="mt-2 flex items-center space-x-2">
              <button
                className="rounded bg-gray-200 px-2"
                onClick={() => decreaseProductQuantity(product.id)}
              >
                -
              </button>
              <span className="w-8 text-center">
                {getProductQuantity(product.id)}
              </span>
              <button
                className="rounded bg-orange-400 px-2 text-white"
                onClick={() => increaseProductQuantity(product.id)}
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

export default ShopPage;
