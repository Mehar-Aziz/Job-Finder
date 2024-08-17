import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/api/users/login`, { email, password });
      console.log('API Response:', response.data);
      console.log('Name from API:', response.data.name);
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('name', response.data.name);
      console.log('Name set in localStorage:', localStorage.getItem('name'));
      window.dispatchEvent(new Event('userLoggedIn'));
      alert('Login successful');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    setError(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link to='/forgot-password'><div className='forgot'>Forgot Password?</div></Link>
          </div>
          
   <button type="submit" className="btn" >Login</button>
  
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
