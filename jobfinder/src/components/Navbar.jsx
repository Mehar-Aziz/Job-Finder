import React, { useState, useEffect, useContext } from 'react';
import logo from '../assets/images/JobFinderLOgo.png';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext.js'; // Import AuthContext

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { auth, setAuth } = useContext(AuthContext); // Get auth and setAuth from AuthContext
  const navigate = useNavigate();

  useEffect(() => {
    
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(null); 
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="header-area header-transparrent">
        <div className="header-top header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <div className="logo">
                  <img className="logo" src={logo} alt="Logo" style={{ width: 200, height: 75 }} />
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="menu-wrapper">
                  <div className="main-menu">
                    <nav className="d-none d-lg-block">
                      <ul id="navigation">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/joblist">Find a Job</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-btn d-none f-right d-lg-block">
                    {auth ? (
                      <>
                        <span className="btn head-btn2">{auth.name}</span>
                        <button onClick={handleLogout} className="btn head-btn1">Logout</button>
                      </>
                    ) : (
                      <>
                        <Link to="/registration" className="btn head-btn1">Register</Link>
                        <Link to="/login" className="btn head-btn2">Login</Link>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none">
                  <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                  </button>
                  <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul id="navigation">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/joblist">Find a Job</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="header-btn">
                      {auth ? (
                        <>
                          <span className="btn head-btn2">{auth.name}</span>
                          <button onClick={handleLogout} className="btn head-btn1">Logout</button>
                        </>
                      ) : (
                        <>
                          <Link to="/registration" className="btn head-btn1">Register</Link>
                          <Link to="/login" className="btn head-btn2">Login</Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
