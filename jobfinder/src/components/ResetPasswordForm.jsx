import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = ({ token }) => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/users/reset-password', { token, newPassword });
      setMessage('Password reset successful');
    } catch (error) {
      setMessage('Error resetting password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newPassword">New Password:</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ResetPassword;
