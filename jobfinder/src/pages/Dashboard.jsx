import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard section">
      <h2>Dashboard</h2>
      <p>Overview of user activity and submissions</p>
      <Sidebar/>
    </div>
  );
};

export default Dashboard;
