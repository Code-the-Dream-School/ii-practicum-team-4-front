import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputWithLabel from '../components/InputWithLabel';
import { Box, Cart, Product } from './ShoppingPage';
import { useAuth } from '../contexts/AuthContext';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart>({
    boxes: [],
    totalPrice: 0,
    items: [],
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    delivery_first_name: '',
    delivery_last_name: '',
    delivery_phone: '',
    delivery_email: '',
    delivery_address: '',
    delivery_additional_info: '',
  });
  const auth = useAuth();

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

  const dates = () => {
    const datesArray = [];
    for (let i = 0; i < 12; i++) {
      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + i);
      datesArray.push(nextDate);
    }
    return datesArray;
  };

  const timeSlots = () => {
    const timeArray = [
      '09:00-12:00',
      '12:00-15:00',
      '15:00-18:00',
      '18:00-21:00',
      '21:00-23:00',
    ];
    return timeArray;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({
        ...formData,
        items: cart.items,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Order placed successfully:', data);
        localStorage.removeItem('storedCart');
        navigate('/thanku');
      })
      .catch((error) => {
        console.error('Error placing order:', error);
      });
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="mx-5 md:mx-20 md:my-8 md:flex md:flex-row md:gap-10 xl:mx-30">
      <section className="border-yellow bg-form-light mx-auto mb-7 h-fit rounded-lg border lg:w-2/3 lg:px-3">
        <h3 className="font-subtext text-primary m-3 mt-5 pb-2 text-2xl font-semibold tracking-wide">
          Delivery Information
        </h3>
        <div className="text-primary mx-3 grid grid-cols-1 text-xs md:grid-cols-2 md:gap-2">
          <InputWithLabel
            id="firstName2"
            label="FIRST NAME"
            value={formData.delivery_first_name}
            name="delivery_first_name"
            type="text"
            placeholder="Enter your first name"
            onChange={handleChange}
          />
          <InputWithLabel
            id="lastName2"
            label="LAST NAME"
            value={formData.delivery_last_name}
            name="delivery_last_name"
            type="text"
            placeholder="Enter your last name"
            onChange={handleChange}
          />
          <InputWithLabel
            id="phone2"
            label="PHONE NUMBER"
            value={formData.delivery_phone}
            name="delivery_phone"
            type="tel"
            placeholder="+1 (000) 000-0000"
            onChange={handleChange}
          />
          <InputWithLabel
            id="email2"
            label="EMAIL"
            value={formData.delivery_email}
            name="delivery_email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>

        <div className="m-auto mx-3 mb-4 text-xs">
          <InputWithLabel
            id="address"
            label="DELIVERY ADDRESS"
            value={formData.delivery_address}
            name="delivery_address"
            type="text"
            placeholder="Enter delivery address"
            onChange={handleChange}
          />
        </div>

        <h3 className="font-subtext text-primary m-3 mt-3 text-2xl font-semibold tracking-wide">
          Additional Info
        </h3>

        <div className="mx-3 pb-4">
          <label htmlFor="notes" className="text-success text-xs">
            ORDER NOTES (OPTIONAL)
          </label>
          <textarea
            id="notes"
            name="delivery_additional_info"
            value={formData.delivery_additional_info}
            onChange={handleChange}
            placeholder="Notes about your order, e.g. special notes for delivery"
            className="border-primary/30 text-primary w-full rounded-xl border-1 p-2"
            rows={3}
          />
        </div>

        <h3 className="font-subtext text-primary m-3 mt-3 text-2xl font-semibold tracking-wide">
          Delivery Date Selection
        </h3>
        <div className="mx-3 pb-4">
          <label htmlFor="notes" className="text-success text-xs">
            PICK A DAY:
          </label>
          <ul className="my-2 grid grid-flow-col grid-rows-4 gap-2 text-center xl:grid-rows-2">
            {dates().map((date, index) => (
              <li
                key={index}
                onClick={() => handleDateClick(date)}
                className={`cursor-pointer rounded-lg border px-3 py-2 ${
                  selectedDate?.toDateString() === date.toDateString()
                    ? 'bg-primary text-white'
                    : 'bg-form-light text-primary/60'
                } hover:bg-gray-200`}
              >
                {date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </li>
            ))}
          </ul>
          <label htmlFor="notes" className="text-success text-xs">
            CHOOSE A TIMESLOT:
          </label>
          <ul className="my-2 grid grid-flow-col grid-rows-3 gap-2 text-center xl:grid-rows-1">
            {timeSlots().map((time, index) => (
              <li
                key={index}
                onClick={() => handleTimeClick(time)}
                className={`cursor-pointer rounded-lg border px-3 py-2 ${
                  selectedTime === time
                    ? 'bg-primary text-white'
                    : 'bg-form-light text-primary/60'
                } hover:bg-gray-200`}
              >
                {time}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/** Order Summary */}
      <section className="border-yellow bg-form-light mx-auto mb-14 rounded-lg border md:w-1/4 md:max-w-md lg:w-1/3 lg:px-3">
        <ul>
          <h3 className="font-subtext text-primary m-3 mt-5 pb-2 text-2xl font-semibold tracking-wide">
            Order Summary
          </h3>
          {cart.items.map((item) => {
            const product = products.find((p) => p._id === item.product_id);
            return (
              product && (
                <>
                  <div key={product._id}>
                    <li className="bg-form-light flex flex-row justify-between border-none p-2 text-center md:justify-start">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-10 w-auto object-contain xl:h-16"
                      />
                      <p className="font-subtext text-secondary mx-2 my-auto max-w-28 overflow-hidden text-sm overflow-ellipsis whitespace-nowrap md:mt-2 md:text-left xl:overflow-visible xl:text-lg">
                        {product.name}
                      </p>
                      <div className="text-secondary ml-auto flex flex-row items-center gap-2 md:gap-3">
                        <button
                          className="h-7 w-7 items-center justify-center rounded-full bg-white text-black hover:opacity-80 xl:h-8 xl:w-8"
                          onClick={() => decreaseProductQuantity(product._id)}
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.weight}</span>
                        <button
                          className="bg-error h-7 w-7 items-center justify-center rounded-full text-white hover:opacity-80 xl:h-8 xl:w-8"
                          onClick={() => increaseProductQuantity(product._id)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  </div>
                </>
              )
            );
          })}
          <li className="text-secondary mx-2 flex flex-row justify-between border-none p-2 text-center text-sm">
            Box:{' '}
            <span className="text-primary float-right font-semibold">
              {getBoxesString()}
            </span>
          </li>
          <li className="text-secondary mx-2 flex flex-row justify-between border-none p-2 text-center text-sm">
            Shipping:{' '}
            <span className="text-primary float-right font-bold">Free</span>
          </li>
          <li className="text-secondary mx-2 flex flex-row justify-between border-none p-2 text-center text-sm">
            Total:{' '}
            <span className="text-primary float-right font-bold">
              ${cart.totalPrice}
            </span>
          </li>
          <div className="mb-5 text-center md:mx-auto md:w-2/3">
            <Button
              text="Place Order"
              type="button"
              color="primary"
              onClick={handleSubmit}
            />
          </div>
        </ul>
      </section>
    </div>
  );
};

export default CheckoutPage;
