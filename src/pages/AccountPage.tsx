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
    <div className="bg-background flex min-h-screen flex-col items-center p-4">
      {/* Account Settings */}
      <section className="border-primary/20 bg-form-light mt-6 w-full max-w-2xl rounded-xl border p-6 shadow">
        <h2 className="text-primary font-subtext mb-4">Account Settings</h2>
        <div className="text-sucess grid grid-cols-1 gap-4 md:grid-cols-2">
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
        <button className="bg-error text-primary-light h-14 w-64 cursor-pointer rounded-full px-10 py-3 text-center text-base font-semibold transition duration-300 ease-in-out hover:opacity-80 md:text-xl">
          Save Changes
        </button>
      </section>

      {/* Delivery Information */}
      <section className="border-primary/20 bg-form-light mt-6 w-full max-w-2xl rounded-xl border p-6 shadow">
        <h2 className="text-primary font-subtext mb-4">Delivery Information</h2>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
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

        <div className="m-auto w-full pb-4">
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

        <h2 className="text-primary font-subtext mb-4">Additional Info</h2>

        <div className="w-full pb-4">
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

        <div className="mt-4 flex w-full flex-col gap-4 md:flex-row">
          <button className="bg-error text-primary-light h-14 w-64 cursor-pointer rounded-full px-10 py-3 text-center text-base font-semibold transition duration-300 ease-in-out hover:opacity-80 md:text-xl">
            Save Changes
          </button>
          <button className="border-error text-error bg-background h-14 w-64 cursor-pointer rounded-full border px-4 py-2">
            Delete
          </button>
        </div>
      </section>

      {/* Change Password */}
      <section className="border-primary/20 bg-form-light mt-6 w-full max-w-2xl rounded-xl border p-6 shadow">
        <h2 className="text-primary font-subtext mb-4">Change Password</h2>
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
        <button className="bg-error text-primary-light h-14 w-64 cursor-pointer rounded-full px-10 py-3 text-center text-base font-semibold transition duration-300 ease-in-out hover:opacity-80 md:text-xl">
          Update Password
        </button>
      </section>
    </div>
  );
};

export default AccountPage;
