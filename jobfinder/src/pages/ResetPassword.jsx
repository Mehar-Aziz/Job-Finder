import React from 'react';
import ResetPassword from '../components/ResetPasswordForm';
import heroImage from '../assets/images/contact.jpg'

const ResetPassword = () => {
  return (
    <>
    {/* Hero Area Start */}
    <div className="slider-area">
    <div
      className="single-slider section-overly slider-height2 d-flex align-items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>Reset Password</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <ResetPassword />
   </>
  );
};

export default ResetPassword ;
