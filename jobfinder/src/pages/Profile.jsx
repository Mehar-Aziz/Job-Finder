import React from 'react';
import ProfilePage from '../components/Profile';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  return (
    <div>
        <Sidebar/>
      <ProfilePage />
    </div>
  );
};

export default Profile;
