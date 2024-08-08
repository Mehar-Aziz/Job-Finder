import React, { useState } from "react";
/*import logo from '../assets/images/logo.png'*/
// Import FontAwesome icons
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                                    {/*<img className="logo" src={logo} alt="Logo" />*/}
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <div className="menu-wrapper">
                                    <div className="main-menu">
                                        <nav className="d-none d-lg-block">
                                            <ul id="navigation">
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="job_listing.html">Find a Job</a></li>
                                                <li><Link to="/about">About</Link></li>
                                                <li><Link to="/services">Services</Link></li>
                                                
                                                <li><Link to="/contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <div className="header-btn d-none f-right d-lg-block">
                                        <a href="#" className="btn head-btn1">Register</a>
                                        <a href="#" className="btn head-btn2">Login</a>
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
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="job_listing.html">Find a Job</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="#">Page</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                    <li><a href="elements.html">Elements</a></li>
                                                    <li><a href="job_details.html">Job Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                        <div className="header-btn">
                                            <a href="#" className="btn head-btn1">Register</a>
                                            <a href="#" className="btn head-btn2">Login</a>
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
