import React from 'react';
import { Dropdown } from 'react-bootstrap'; 

const NotificationDropdown = () => {
  return (
    <Dropdown className="sidebar-item dropdown">
      <Dropdown.Toggle className="sidebar-link " id="alertsDropdown">
        <div className="position-relative">
          <i className="align-middle" data-feather="bell"></i>
          <span className="indicator">4</span>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-lg dropdown-menu-end py-0">
        <div className="dropdown-menu-header">
          4 New Notifications
        </div>
        <div className="list-group">
          <Dropdown.Item href="#">
            <div className="row g-0 align-items-center">
              <div className="col-2">
                <i className="text-danger" data-feather="alert-circle"></i>
              </div>
              <div className="col-10">
                <div className="text-dark">Update completed</div>
                <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                <div className="text-muted small mt-1">30m ago</div>
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item href="#">
            <div className="row g-0 align-items-center">
              <div className="col-2">
                <i className="text-warning" data-feather="bell"></i>
              </div>
              <div className="col-10">
                <div className="text-dark">Lorem ipsum</div>
                <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                <div className="text-muted small mt-1">2h ago</div>
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item href="#">
            <div className="row g-0 align-items-center">
              <div className="col-2">
                <i className="text-primary" data-feather="home"></i>
              </div>
              <div className="col-10">
                <div className="text-dark">Login from 192.186.1.8</div>
                <div className="text-muted small mt-1">5h ago</div>
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item href="#">
            <div className="row g-0 align-items-center">
              <div className="col-2">
                <i className="text-success" data-feather="user-plus"></i>
              </div>
              <div className="col-10">
                <div className="text-dark">New connection</div>
                <div className="text-muted small mt-1">Christina accepted your request.</div>
                <div className="text-muted small mt-1">14h ago</div>
              </div>
            </div>
          </Dropdown.Item>
        </div>
        <div className="dropdown-menu-footer">
          <a href="#" className="text-muted">Show all notifications</a>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
