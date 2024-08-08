import React from 'react';
import jobimg from '../assets/images/job-list1.png';

const JobListingArea = () => {
  return (
    <div className="job-listing-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          {/* Left content */}
          <div className="col-xl-3 col-lg-3 col-md-4">
            <div className="row">
              <div className="col-12">
                <div className="small-section-tittle2 mb-45">
                  <div className="ion">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="12px">
                      <path
                        fillRule="evenodd"
                        fill="rgb(27, 207, 107)"
                        d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                      />
                    </svg>
                  </div>
                  <h4>Filter Jobs</h4>
                </div>
              </div>
            </div>
            {/* Job Category Listing start */}
            <div className="job-category-listing mb-50">
              {/* single one */}
              <div className="single-listing">
                <div className="small-section-tittle2">
                  <h4>Job Category</h4>
                </div>
                {/* Select job items start */}
                <div className="select-job-items2">
                  <select name="select">
                    <option value="">All Category</option>
                    <option value="">Category 1</option>
                    <option value="">Category 2</option>
                    <option value="">Category 3</option>
                    <option value="">Category 4</option>
                  </select>
                </div>
                {/* Select job items End */}
                {/* select-Categories start */}
                <div className="select-Categories pt-80 pb-50">
                  <div className="small-section-tittle2">
                    <h4>Job Type</h4>
                  </div>
                  <label className="container">
                    Full Time
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Part Time
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Remote
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Freelance
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                {/* select-Categories End */}
              </div>
              {/* single two */}
              <div className="single-listing">
                <div className="small-section-tittle2">
                  <h4>Job Location</h4>
                </div>
                {/* Select job items start */}
                <div className="select-job-items2">
                  <select name="select">
                    <option value="">Anywhere</option>
                    <option value="">London</option>
                    <option value="">Pakistan</option>
                    <option value="">India</option>
                    <option value="">China</option>
                  </select>
                </div>
                
                <div className="select-Categories pt-80 pb-50">
                  <div className="small-section-tittle2">
                    <h4>Experience</h4>
                  </div>
                  <label className="container">
                    1-2 Years
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    2-3 Years
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    3-6 Years
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    6-more..
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                
              </div>
             
              <div className="single-listing">
                
                <div className="select-Categories pb-50">
                  <div className="small-section-tittle2">
                    <h4>Posted Within</h4>
                  </div>
                  <label className="container">
                    Any
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Today
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Last 2 days
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Last 3 days
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Last 5 days
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Last 10 days
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
             
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-8">
            <section className="featured-job-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="count-job mb-35">
                      <span>39, 782 Jobs found</span>
                      <div className="select-job-items">
                        <span>Sort by</span>
                        <select name="select">
                          <option value="">None</option>
                          <option value="">Full Stack Developer</option>
                          <option value="">AI Developer</option>
                          <option value="">UI/UX designing</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src={jobimg} style={{ width: '100px', height: 'auto' }} alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src={jobimg} style={{ width: '100px', height: 'auto' }} alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src={jobimg} style={{ width: '100px', height: 'auto' }} alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src={jobimg} style={{ width: '100px', height: 'auto' }} alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src={jobimg} style={{ width: '100px', height: 'auto' }} alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src={jobimg} style={{ width: '100px', height: 'auto' }} alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                {/* single-job-content */}
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href="#">
                        <img src={jobimg} style={{ width: '100px', height: 'auto' }} alt="" />
                      </a>
                    </div>
                    <div className="job-tittle job-tittle2">
                      <a href="#">
                        <h4>Digital Marketer</h4>
                      </a>
                      <ul>
                        <li>Creative Agency</li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>Athens, Greece
                        </li>
                        <li>$3500 - $4000</li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link items-link2 f-right">
                    <a href="job_details.html">Full Time</a>
                    <span>7 hours ago</span>
                  </div>
                </div>
                
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingArea;
