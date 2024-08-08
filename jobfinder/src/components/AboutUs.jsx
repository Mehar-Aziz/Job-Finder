import React from "react";
import aboutImg from '../assets/images/about.jpg';

const AboutUs = () => {
  return (
    <div className="support-company-area fix section-padding2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="right-caption">
              <div className="section-tittle section-tittle2">
                <span>What we are doing</span>
                <h2>24k Talented people are getting Jobs</h2>
              </div>
              <div className="support-caption">
                <p className="pera-top">
                At Job Finder, we're dedicated to connecting skilled individuals with their dream jobs. We understand the importance of finding the right fit and the impact it has on your career journey.
                </p>
                <p>
                We believe in empowering professionals by offering diverse opportunities that cater to various skills and experiences. Whether you're a seasoned expert or a fresh graduate, our job portal provides the resources and support needed to succeed in today's competitive market.
                </p>
                <a href="about.html" className="btn post-btn">
                  Post a job
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="support-location-img">
              <img src={aboutImg} alt="" style={{ width: '500px', height: '650px' }}/>
              <div className="support-img-cap text-center">
                <p>Since</p>
                <span>1994</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
