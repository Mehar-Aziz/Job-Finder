import React from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/DashContent';

const Dashboard = () => {
  return (
    <div className="dashboard section">
      <h2>Dashboard</h2>
      <p>Overview of user activity and submissions</p>
      <Sidebar/>
      <Content/>
    </div>
  );
};

export default Dashboard;
