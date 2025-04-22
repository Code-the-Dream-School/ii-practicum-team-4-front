import { useState } from 'react';
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
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleQuantityChange = (id: number, qty: number) => {
    setQuantities((prev) => ({ ...prev, [id]: qty }));
  };

  return (
    <div className="font-subtext text-primary bg-background mx-auto max-w-screen-xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {boxes.map((box, idx) => (
            <div
              key={idx}
              className="border-warning bg-form-light rounded-xl border p-4 text-center shadow-sm transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-lg"
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
          <p className="text-sm">
            Box: <span className="font-semibold">Large x2, Small x1</span>
          </p>
          <p className="mb-4 text-sm">
            Total: <span className="font-bold">$165.00</span>
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
            className="border-warning bg-light rounded-xl border-2 p-4 text-center shadow-sm transition hover:shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto h-24 w-auto object-contain"
            />
            <h3 className="text-md font-heading text-primary mt-2 font-bold">
              {product.name}
            </h3>
            <p className="text-secondary mb-2 text-xs">{product.description}</p>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
              <select
                className="rounded-md border border-gray-300 px-2 py-1"
                value={quantities[product.id] || 0}
                onChange={(e) =>
                  handleQuantityChange(product.id, parseInt(e.target.value))
                }
              >
                {[...Array(6)].map((_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <Button text="+" type="button" color="primary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
