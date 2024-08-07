import React from 'react';

const services = [
    { icon: 'fa fa-suitcase', label: 'Design & Creative', link: 'job_listing.html', count: 653 },
    { icon: 'fa fa-cogs', label: 'Design & Development', link: 'job_listing.html', count: 658 },
    { icon: 'fa fa-file-alt', label: 'Sales & Marketing', link: 'job_listing.html', count: 658 },
    { icon: 'fa fa-mobile-alt', label: 'Mobile Application', link: 'job_listing.html', count: 658 },
    { icon: 'fa fa-hard-hat', label: 'Construction', link: 'job_listing.html', count: 658 },
    { icon: 'fa fa-laptop-code', label: 'Information Technology', link: 'job_listing.html', count: 658 },
    { icon: 'fa fa-building', label: 'Real Estate', link: 'job_listing.html', count: 658 },
    { icon: 'fa fa-pencil-alt', label: 'Content Writer', link: 'job_listing.html', count: 658 }
  ];

const OurServices = () => (
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

export default OurServices;
