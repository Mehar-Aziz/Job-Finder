import React from 'react';
import jobList1 from '../assets/images/job-list1.png'; // Adjust the path as necessary
import jobList2 from '../assets/images/job-list2.png';
import jobList3 from '../assets/images/job-list3.png';
import jobList4 from '../assets/images/job-list4.png';

const FeaturedJobs = () => {
  const jobs = [
    { id: 1, title: 'Digital Marketer', company: 'Creative Agency', location: 'Athens, Greece', salary: '$3500 - $4000', image: jobList1 },
    { id: 2, title: 'Digital Marketer', company: 'Creative Agency', location: 'Athens, Greece', salary: '$3500 - $4000', image: jobList2 },
    { id: 3, title: 'Digital Marketer', company: 'Creative Agency', location: 'Athens, Greece', salary: '$3500 - $4000', image: jobList3 },
    { id: 4, title: 'Digital Marketer', company: 'Creative Agency', location: 'Athens, Greece', salary: '$3500 - $4000', image: jobList4 },
  ];

  return (
    <section className="featured-job-area feature-padding">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>Recent Job</span>
              <h2>Featured Jobs</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            {jobs.map((job) => (
              <div key={job.id} className="single-job-items mb-30">
                <div className="job-items">
                  <div className="company-img">
                    <a href="job_details.html">
                      <img src={job.image} alt={job.title} style={{ width: '100px', height: 'auto' }} />
                    </a>
                  </div>
                  <div className="job-tittle">
                    <a href="job_details.html">
                      <h4>{job.title}</h4>
                    </a>
                    <ul>
                      <li>{job.company}</li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        {job.location}
                      </li>
                      <li>{job.salary}</li>
                    </ul>
                  </div>
                </div>
                <div className="items-link f-right">
                  <a href="job_details.html">Full Time</a>
                  <span>7 hours ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
