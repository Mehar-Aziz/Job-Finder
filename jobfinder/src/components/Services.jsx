import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="our-services section-pad-t30">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>FEATURED TOURS Packages</span>
              <h2>Browse Top Categories</h2>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <span className={service.icon}></span>
                </div>
                <div className="services-cap">
                  <h5><a href={service.link}>{service.label}</a></h5>
                  <span>({service.count})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="browse-btn2 text-center mt-50">
              <a href="job_listing.html" className="border-btn2">Browse All Sectors</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
