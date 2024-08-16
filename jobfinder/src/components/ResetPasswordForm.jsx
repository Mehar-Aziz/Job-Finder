import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams();
    console.log('Token from URL:', token);
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log('Sending token:', token);
      await axios.post('http://localhost:3000/api/users/reset-password', { token, newPassword });
      setMessage('Password reset successful');
    } catch (error) {
    console.error('Error details:', error.response?.data || error.message);
      setMessage('Error resetting password');
      
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
    <form onSubmit={handleSubmit}  className="form-group">
      <label htmlFor="newPassword">New Password:</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <br />
      <br />
      <button type="submit" className="btn">Reset Password</button>
      {message && <p>{message}</p>}
    </form>
    </div>
    </div>
  );
};

export default ResetPassword;
