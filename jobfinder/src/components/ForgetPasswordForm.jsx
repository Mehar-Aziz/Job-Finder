import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/users/forgot-password', { email });
      setMessage('Check your email for a password reset link');
    } catch (error) {
        console.error('Error details:', error.response?.data || error.message);
        setMessage('Error sending reset email');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
    <form onSubmit={handleSubmit} className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <br />
      <button type="submit" className="btn">Send Reset Link</button>
      {message && <p>{message}</p>}
    </form>
    </div>
    </div>
  );
};

export default ForgotPassword;
