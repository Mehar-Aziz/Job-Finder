import React from 'react';

function Sidebar() {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">


        <ul className="sidebar-nav">

          <li className="sidebar-item active">
            <a className="sidebar-link" href="index.html">
              <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="pages-profile.html">
              <i className="align-middle" data-feather="user"></i> <span className="align-middle">Profile</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
