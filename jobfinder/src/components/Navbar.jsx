import React from "react";

// Define default settings for SlickNav
const defaultSettings = {
  label: "", // No text label, just the hamburger icon
  duplicate: true,
  duration: 200,
  easingOpen: "swing",
  easingClose: "swing",
  closedSymbol: "☰", // Hamburger icon
  openedSymbol: "✖", // Close icon
  prependTo: "body",
  appendTo: "",
  parentTag: "a",
  closeOnClick: false,
  allowParentLinks: false,
  nestedParentLinks: true,
  showChildren: false,
  removeIds: true,
  removeClasses: false,
  removeStyles: false,
  brand: "",
  animations: "react",
  init: () => {},
  beforeOpen: () => {},
  afterOpen: () => {},
  beforeClose: () => {},
  afterClose: () => {},
};

// SlickNav component
const SlickNav = ({ settings = {}, children }) => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const menuSettings = { ...defaultSettings, ...settings };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (!menuVisible) {
      menuSettings.beforeOpen();
      menuSettings.afterOpen();
    } else {
      menuSettings.beforeClose();
      menuSettings.afterClose();
    }
  };

  return (
    <div className="slicknav_menu">
      <button
        className={`slicknav_btn ${menuVisible ? "slicknav_open" : "slicknav_collapsed"}`}
        onClick={toggleMenu}
        aria-haspopup="true"
        role="button"
      >
        <span className="slicknav_icon">
          {menuVisible ? menuSettings.openedSymbol : menuSettings.closedSymbol}
        </span>
      </button>
      <ul className={`slicknav_nav ${menuVisible ? "visible" : "hidden"}`} aria-hidden={!menuVisible}>
        {children}
      </ul>
    </div>
  );
};

// Navbar component
const Navbar = () => {
  return (
    <nav>
      <div className="header-area header-transparrent">
        <div className="headder-top header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <div className="logo">
                  {/*<img className="logo" src='' alt="" />*/}
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="menu-wrapper">
                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="job_listing.html">Find a Jobs</a></li>
                        <li><a href="about.html">About</a></li>
                        <li>
                          <a href="#">Page</a>
                          <ul className="submenu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="single-blog.html">Blog Details</a></li>
                            <li><a href="elements.html">Elements</a></li>
                            <li><a href="job_details.html">Job Details</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
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
                  <SlickNav settings={{ label: "" }}>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="job_listing.html">Find a Jobs</a></li>
                    <li><a href="about.html">About</a></li>
                    <li>
                      <a href="#">Page</a>
                      <ul className="submenu">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="single-blog.html">Blog Details</a></li>
                        <li><a href="elements.html">Elements</a></li>
                        <li><a href="job_details.html">Job Details</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </SlickNav>
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
