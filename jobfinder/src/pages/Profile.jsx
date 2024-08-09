import React from 'react';
import ProfilePage from '../components/Profile';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  return (
    <div>
        <h2>welcome to profile</h2>
        <br />
        <br />
        <Sidebar/>
      <ProfilePage />
    </div>
  );
};

export default Profile;
