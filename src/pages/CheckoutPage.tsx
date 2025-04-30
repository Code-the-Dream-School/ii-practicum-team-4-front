import { useState } from 'react';
import Button from '../components/Button';
import InputWithLabel from '../components/InputWithLabel';
import { Link } from 'react-router-dom';
import lettuce from '../assets/images/cabbage.png';
import visa from '../assets/images/visa.svg';
import stripe from '../assets/images/stripe.svg';
import paypal from '../assets/images/paypal.svg';
import mastercard from '../assets/images/mastercard.svg';

const CheckoutPage = () => {
  const [quantity, setQuantity] = useState<{ [key: number]: number }>({});
  const [isChecked, setIsChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
    name: '',
    cardNumber: '',
    expDate: '',
    cvc: '',
    date: '',
  });

  const products = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    name: 'Chinese cabbage',
    image: lettuce,
  }));

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

  const handleIncrement = (productId: number) => {
    setQuantity((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId: number) => {
    setQuantity((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0),
    }));
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
  };

  const handleCheckboxChange = (event: {
    // eslint-disable-next-line no-unused-vars
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    console.log('Selected date:', date.toLocaleDateString());
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="mx-5 md:mx-20 md:my-8 md:flex md:flex-row md:gap-10 xl:mx-30">
      {/* Delivery Information */}
      <section className="border-yellow bg-form-light mx-auto mb-7 h-fit rounded-lg border lg:w-2/3 lg:px-3">
        <h3 className="font-subtext text-primary m-3 mt-5 pb-2 text-2xl font-semibold tracking-wide">
          Delivery Information
        </h3>
        <div className="text-primary mx-3 grid grid-cols-1 text-xs md:grid-cols-2 md:gap-2">
          <InputWithLabel
            id="firstName2"
            label="FIRST NAME"
            value={formData.firstName}
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            onChange={handleChange}
          />
          <InputWithLabel
            id="lastName2"
            label="LAST NAME"
            value={formData.lastName}
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            onChange={handleChange}
          />
          <InputWithLabel
            id="phone2"
            label="PHONE NUMBER"
            value={formData.phone}
            name="phone"
            type="tel"
            placeholder="+1 (000) 000-0000"
            onChange={handleChange}
          />
          <InputWithLabel
            id="email2"
            label="EMAIL"
            value={formData.email}
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>

        <div className="m-auto mx-3 mb-4 text-xs">
          <InputWithLabel
            id="address"
            label="DELIVERY ADDRESS"
            value={formData.address}
            name="address"
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
            name="notes"
            value={formData.notes}
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
          {products.map((product) => (
            <>
              <div key={product.id}>
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
                      onClick={() => handleDecrement(product.id)}
                    >
                      -
                    </button>
                    <span>{quantity[product.id] || 0}</span>
                    <button
                      className="bg-error h-7 w-7 items-center justify-center rounded-full text-white hover:opacity-80 xl:h-8 xl:w-8"
                      onClick={() => handleIncrement(product.id)}
                    >
                      +
                    </button>
                  </div>
                </li>
              </div>
            </>
          ))}
          <li className="text-secondary mx-2 flex flex-row justify-between border-none p-2 text-center text-sm">
            Box:{' '}
            <span className="text-primary float-right font-semibold">
              Large x2, Small x1
            </span>
          </li>
          <li className="text-secondary mx-2 flex flex-row justify-between border-none p-2 text-center text-sm">
            Shipping:{' '}
            <span className="text-primary float-right font-bold">Free</span>
          </li>
          <li className="text-secondary mx-2 flex flex-row justify-between border-none p-2 text-center text-sm">
            Total:{' '}
            <span className="text-primary float-right font-bold">$145.00</span>
          </li>
          <div>
            <h3 className="font-subtext text-primary m-3 mt-5 pb-2 text-2xl font-semibold tracking-wide">
              Payment Methods
            </h3>
            <ul className="m-3 flex flex-row gap-4">
              <li>
                <img
                  src={visa}
                  alt="Visa Card"
                  className="h-12 w-auto object-contain md:h-14"
                />
              </li>
              <li>
                <img
                  src={stripe}
                  alt="Stripe"
                  className="h-12 w-auto object-contain md:h-14"
                />
              </li>
              <li>
                <img
                  src={paypal}
                  alt="Paypal"
                  className="h-12 w-auto object-contain md:h-14"
                />
              </li>
              <li>
                <img
                  src={mastercard}
                  alt="Mastercard"
                  className="h-12 w-auto object-contain md:h-14"
                />
              </li>
            </ul>
          </div>
          <h3 className="font-subtext text-primary m-3 mt-6 pb-2 text-2xl font-semibold tracking-wide">
            Cart Details
          </h3>
          <form
            className="bg-form-light text-primary mx-3 mb-5"
            onSubmit={handleSubmit}
          >
            <div className="text-sm">
              <InputWithLabel
                id="name"
                label="CARDHOLDER'S NAME"
                value={formData.name}
                name={'name'}
                placeholder="Seen on your card"
                type="text"
                onChange={handleChange}
              />
              <InputWithLabel
                id="card_number"
                label="CARD NUMBER"
                value={formData.cardNumber}
                name={'cardNumber'}
                placeholder="Seen on your card"
                type="text"
                onChange={handleChange}
              ></InputWithLabel>
              <InputWithLabel
                id="exp_date"
                label="EXPIRATION"
                value={formData.expDate}
                name={'expDate'}
                placeholder="02/2030"
                type="text"
                onChange={handleChange}
              ></InputWithLabel>
              <InputWithLabel
                id="cvc"
                label="CVC"
                value={formData.cvc}
                name={'cvc'}
                placeholder="676"
                type="text"
                onChange={handleChange}
              ></InputWithLabel>
            </div>
          </form>
          <p className="mb-5 text-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              required
              className="peer bg-background focus:ring-error checked:bg-background relative mt-1 h-6 w-6 shrink-0 appearance-none rounded-sm border-2 border-orange-500/50 align-bottom checked:border-orange-500 focus:ring-1 focus:ring-offset-0 focus:outline-none"
            />{' '}
            I agree to the{' '}
            <Link
              to="/"
              target="_self"
              className="text-error weight-700 underline hover:opacity-80"
            >
              Terms And Conditions
            </Link>
          </p>
          <div className="mb-5 text-center md:mx-auto md:w-2/3">
            <Button text="Place Order" type="button" color="primary" />
          </div>
        </ul>
      </section>
    </div>
  );
};

export default CheckoutPage;
