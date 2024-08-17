import React, { useContext } from 'react';
import NotificationDropdown from './Notification';
import { AuthContext } from '../context/UserContext.js';
import { Link } from 'react-router-dom';

function Sidebar() {
  const { userID } = useContext(AuthContext);
 

  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">


        <ul className="sidebar-nav">

          <li className="sidebar-item active">
            <a className="sidebar-link" href="index.html">
              <i className="align-middle" data-feather="sliders"></i><Link to="/dashboard"><span className="align-middle" style={{ color: 'white', textDecoration: 'none' }} >Dashboard</span></Link> 
            </a>
          </li>

          <li className="sidebar-item sidebar-link">
            
              <i className="align-middle" data-feather="user"></i> 
              <Link to={`/profile/${userID}`}><span className="align-middle" style={{ color: 'white', textDecoration: 'none' }} >Profile</span></Link>
            
          </li>
          <NotificationDropdown/>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
