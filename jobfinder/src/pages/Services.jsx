import React from 'react';
import OurServices from '../components/Services';
import heroImage from '../assets/images/contact.jpg'

const Services = () => {
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
              <h2>Our Services</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <OurServices />
   </>
  );
};

export default Services;
