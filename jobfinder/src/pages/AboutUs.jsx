import React from 'react';
import aboutImage from '../assets/images/contact.jpg'; 
import AboutUs from '../components/AboutUs';
import CvArea from '../components/CVarea';
import BlogArea from '../components/OurProjects';
import Testimonial from '../components/Testimonal';
import ApplyProcess from '../components/ApplyProcess';

const AboutPage = () => {
  return (
    <>
      {/* Hero Area Start */}
      <div className="slider-area">
        <div
          className="single-slider section-overly slider-height2 d-flex align-items-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>About us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Area End */}

    
      <AboutUs />
      <ApplyProcess />
      <Testimonial />
      <CvArea />
      <BlogArea/>
    </>
  );
};

export default AboutPage;
