import { useState } from 'react';
import Button from '../components/Button';
import InputWithLabel from '../components/InputWithLabel';
import { useAuth } from '../contexts/AuthContext';

const AccountPage = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
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
  const { setUserSession, resetUserSession } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/profile/address`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          additional_info: formData.notes,
        }),
      });

      if (!response.ok) {
        const message = `Error has ocurred: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      const { token } = data;

      setUserSession({ token });
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : 'Failed to sign in';
      setErrorMessage(errorMsg);
      console.error(errorMsg);
    }
  };

  const handleLogout = () => {
    resetUserSession();
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
        <Button text="Save Changes" />
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
          <Button text="Save Changes" color="primary" onClick={handleSubmit} />
          <Button text="Delete" color="secondary" />
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
        <Button text="Update Password" />
      </section>
      <div className="m-4">
        <Button text="Sign Out" color="secondary" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default AccountPage;
