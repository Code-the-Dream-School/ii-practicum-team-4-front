import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useState } from 'react';
import InputWithLabel from '../components/InputWithLabel';

const AccountPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#fdf1dc] p-4">
      {/* Account Settings */}
      <section className="border-primary/20 mt-6 w-full max-w-2xl rounded-xl border bg-[#fdf7ea] p-6 shadow">
        <h2 className="text-success mb-4 font-bold">Account Settings</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputWithLabel
            id="firstName"
            label="FIRST NAME"
            value={formData.firstName}
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            onChange={handleChange}
          />
          <InputWithLabel
            id="lastName"
            label="LAST NAME"
            value={formData.lastName}
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            onChange={handleChange}
          />
          <InputWithLabel
            id="phone"
            label="PHONE NUMBER"
            value={formData.phone}
            name="phone"
            type="tel"
            placeholder="+1 (000) 000-0000"
            onChange={handleChange}
          />
          <InputWithLabel
            id="email"
            label="EMAIL"
            value={formData.email}
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <Link to={'/'}>
          <Button text="Save Changes" />
        </Link>
      </section>

      {/* Delivery Information */}
      <section className="border-primary/20 mt-6 w-full max-w-2xl rounded-xl border bg-[#fdf7ea] p-6 shadow">
        <h2 className="text-success mb-4 font-bold">Delivery Information</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

        <InputWithLabel
          id="address"
          label="DELIVERY ADDRESS"
          value={formData.address}
          name="address"
          type="text"
          placeholder="Enter delivery address"
          onChange={handleChange}
        />

        <h2 className="text-success mb-4 font-bold">Additional Info</h2>

        <div className="m-auto w-5/6 pb-4">
          <label htmlFor="notes" className="text-success">
            ORDER NOTES (OPTIONAL)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Notes about your order, e.g. special notes for delivery"
            className="border-primary/30 w-full rounded-xl border-1 p-2"
            rows={3}
          />
        </div>

        <div className="mt-4 flex gap-4">
          <Link to={'/'}>
            <Button text="Save Changes" />
          </Link>
          <Link to={'/'}>
            <Button text="Delete" />
          </Link>
        </div>
      </section>

      {/* aDDRESS 2 */}
      <section className="border-primary/20 mt-6 w-full max-w-2xl rounded-xl border bg-[#fdf7ea] p-6 shadow">
        <h2 className="text-success mb-4 font-bold">Address 2</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

        <InputWithLabel
          id="address"
          label="DELIVERY ADDRESS"
          value={formData.address}
          name="address"
          type="text"
          placeholder="Enter delivery address"
          onChange={handleChange}
        />

        <h2 className="text-success mb-4 font-bold">Additional Info</h2>

        <div className="m-auto w-5/6 pb-4">
          <label htmlFor="notes" className="text-success">
            ORDER NOTES (OPTIONAL)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Notes about your order, e.g. special notes for delivery"
            className="border-primary/30 w-full rounded-xl border-1 p-2"
            rows={3}
          />
        </div>

        <div className="mt-4 flex gap-4">
          <Link to={'/'}>
            <Button text="Save Changes" />
          </Link>
          <Link to={'/'}>
            <Button text="Delete" />
          </Link>
        </div>

        <h2 className="text-success mb-4 font-bold">Add Address</h2>
      </section>

      {/* Change Password */}
      <section className="border-primary/20 mt-6 w-full max-w-2xl rounded-xl border bg-[#fdf7ea] p-6 shadow">
        <h2 className="text-success mb-4 text-lg font-bold">Change Password</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputWithLabel
            id="currentPassword"
            label="Current Password"
            value={formData.currentPassword || ''}
            name="currentPassword"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <InputWithLabel
            id="newPassword"
            label="New Password"
            value={formData.newPassword || ''}
            name="newPassword"
            type="password"
            placeholder="Enter new password"
            onChange={handleChange}
          />
          <InputWithLabel
            id="confirmPassword"
            label="Confirm New Password"
            value={formData.confirmPassword || ''}
            name="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            onChange={handleChange}
          />
        </div>
        <Link to={'/'}>
          <Button text="Update Password" />
        </Link>
      </section>
    </div>
  );
};

export default AccountPage;
