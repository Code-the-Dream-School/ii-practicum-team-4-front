import Button from '../components/Button';
import trash_can from '../assets/images/icons/trash_can.svg';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  // const products = Array.from({ length: 15 }, (_, i) => ({
  //   id: i,
  //   name: 'Chinese cabbage',
  //   weight: '1 pound',
  //   image: lettuce,
  // }));

  const { cart, addToCart, removeFromCart, total, boxSize } = useCart();

  const getProductQuantity = (id: number) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseProductQuantity = (productId: number) => {
    const product = cart.find((p) => p.id === productId);
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
      const product = cart.find((p) => p.id === productId);
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

  const handleRemoveItem = (productId: number) => {
    removeFromCart(productId);
  };

  return (
    <div className="md:m-20 md:flex md:flex-row md:justify-between lg:mx-20 lg:justify-center">
      <ul className="border-yellow bg-form-light mx-auto mb-14 flex w-full max-w-xs flex-col self-start rounded-lg border md:mx-auto md:w-3/5 md:max-w-md lg:mx-10 lg:w-2/3 lg:max-w-full">
        <li className="text-secondary m-4 font-semibold md:mr-20">
          <span className="float-left">Product</span>
          <span className="float-right pr-8">Quantity</span>
        </li>
        <hr className="border-yellow"></hr>
        {cart.map((product) => (
          <>
            <div key={product.id}>
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
                    onClick={() => decreaseProductQuantity(product.id)}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">
                {getProductQuantity(product.id)}
              </span>
                  <button
                    className="bg-error h-8 w-8 items-center justify-center rounded-full text-white hover:opacity-80"
                    onClick={() => increaseProductQuantity(product.id)}
                  >
                    +
                  </button>
                  <button onClick={() => handleRemoveItem(product.id)}>
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
        ))}
      </ul>
      <div className="border-yellow bg-form-light md:max-w-m mx-auto mb-14 w-full max-w-xs self-start rounded-lg border px-4 py-6 lg:w-1/3 lg:max-w-full">
        <h3 className="font-subtext text-primary pb-2 text-xl font-semibold tracking-wide">
          Cart Total
        </h3>
        <ul>
          <li className="text-secondary my-4 text-sm">
            Box:{' '}
            <span className="text-primary float-right font-semibold">
              {boxSize}
            </span>
          </li>
          <li className="text-secondary my-4 text-sm">
            Subtotal:{' '}
            <span className="text-primary float-right font-bold">${total.toFixed(2)}</span>
          </li>
          <li className="text-secondary my-4 text-sm">
            Shipping:{' '}
            <span className="text-primary float-right font-bold">Free</span>
          </li>
          <li className="text-secondary mb-6 text-sm">
            Total:{' '}
            <span className="text-primary float-right font-bold">${total.toFixed(2)}</span>
          </li>
        </ul>
        <div className="text-center">
        <Link to="/checkout" target="_self">
          <Button text="Proceed To Checkout" type="button" color="primary" />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
