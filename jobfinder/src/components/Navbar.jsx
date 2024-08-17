import React, { useState, useEffect } from 'react';
import logo from '../assets/images/JobFinderLOgo.png';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
    setIsLoading(false);

    const handleUserLogin = () => {
      const updatedName = localStorage.getItem('name');
      if (updatedName) {
        setName(updatedName);
      }
    };

    window.addEventListener('userLoggedIn', handleUserLogin);

    return () => {
      window.removeEventListener('userLoggedIn', handleUserLogin);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setName(null);
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
                    {name ? (
                      <>
                        <span className="btn head-btn2">{name}</span>
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
                      {name ? (
                        <>
                          <span className="btn head-btn2">{name}</span>
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
