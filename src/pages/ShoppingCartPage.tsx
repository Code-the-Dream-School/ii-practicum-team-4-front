import Button from '../components/Button';
import trash_can from '../assets/images/icons/trash_can.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Cart, Product } from './ShoppingPage';

const CartPage = () => {
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
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/boxes`
      );
      const data = await response.json();
      setBoxes(data.boxes);
    };

    const fetchProducts = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/products`
      );
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
      setCart(parsedCart);
      calculateBoxes(parsedCart);
    }
  }, [boxes, products]);

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
  const handleRemoveItem = (productId: string) => {
    const newCart = { ...cart };
    newCart.items = newCart.items.filter(
      (item) => item.product_id !== productId
    );
    calculateBoxes(newCart);
    setCart(newCart);
    localStorage.setItem('storedCart', JSON.stringify(newCart));
  };

  const getBoxesString = () => {
    return cart.boxes.map((box) => `${box.name} x${box.quantity}`).join('; ');
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
    <div className="md:m-20 md:flex md:flex-row md:justify-between lg:mx-20 lg:justify-center">
      {cart.totalPrice === 0 ? (
        <p className="text-secondary mr-auto text-2xl font-semibold">
          Your cart is empty
        </p>
      ) : (
        <>
          <ul className="border-yellow bg-form-light mx-auto mb-14 flex w-full max-w-xs flex-col self-start rounded-lg border md:mx-auto md:w-3/5 md:max-w-md lg:mx-10 lg:w-2/3 lg:max-w-full">
            <li className="text-secondary m-4 font-semibold md:mr-20">
              <span className="float-left">Product</span>
              <span className="float-right pr-8">Quantity</span>
            </li>
            <hr className="border-yellow"></hr>
            {cart.items.map((item) => {
              const product = products.find((p) => p._id === item.product_id);

              return (
                product && (
                  <>
                    <div key={product._id}>
                      <li className="bg-form-light m-2 flex flex-row justify-between border-none p-2 text-center md:justify-start">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-10 w-auto object-contain md:h-20"
                        />
                        <p className="font-subtext text-secondary mx-2 max-w-28 overflow-hidden align-middle text-sm overflow-ellipsis whitespace-nowrap md:mt-2 md:overflow-visible md:text-left md:text-lg">
                          {product.name}
                          <br />
                          {/* <span className="text-primary">{product.weight}</span> */}
                        </p>
                        <div className="text-secondary ml-auto flex flex-row items-center gap-2 md:gap-4">
                          <button
                            className="h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:opacity-80"
                            onClick={() => decreaseProductQuantity(product._id)}
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.weight}</span>
                          <button
                            className="bg-error h-8 w-8 items-center justify-center rounded-full text-white hover:opacity-80"
                            onClick={() => increaseProductQuantity(product._id)}
                          >
                            +
                          </button>
                          <button onClick={() => handleRemoveItem(product._id)}>
                            <img
                              src={trash_can}
                              alt="Trash Can"
                              className="ml-4 hidden h-6 w-5 hover:opacity-80 md:block"
                            />
                          </button>
                        </div>
                      </li>
                    </div>
                    <hr className="border-yellow mx-2 hidden last:hidden md:block"></hr>
                  </>
                )
              );
            })}
          </ul>
        </>
      )}

      <div className="border-yellow bg-form-light md:max-w-m mx-auto mb-14 w-full max-w-xs self-start rounded-lg border px-4 py-6 lg:w-1/3 lg:max-w-full">
        <h3 className="font-subtext text-primary pb-2 text-xl font-semibold tracking-wide">
          Cart Total
        </h3>
        <ul>
          <li className="text-secondary my-4 text-sm">
            Box:{' '}
            <span className="text-primary float-right font-semibold">
              {getBoxesString()}
            </span>
          </li>
          <li className="text-secondary my-4 text-sm">
            Subtotal:{' '}
            <span className="text-primary float-right font-bold">
              ${cart.totalPrice}
            </span>
          </li>
          <li className="text-secondary my-4 text-sm">
            Shipping:{' '}
            <span className="text-primary float-right font-bold">Free</span>
          </li>
          <li className="text-secondary mb-6 text-sm">
            Total:{' '}
            <span className="text-primary float-right font-bold">
              ${cart.totalPrice}
            </span>
          </li>
        </ul>
        <div className="text-center">
          <Button
            text="Proceed To Checkout"
            type="button"
            color="primary"
            disabled={cart.totalPrice === 0}
            onClick={() => {
              navigate('/checkout');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
