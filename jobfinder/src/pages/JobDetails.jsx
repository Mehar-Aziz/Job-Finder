import React from "react";
import jobimg from "../assets/images/job-list2.png";
import hero from "../assets/images/contact.jpg";

const JobDetails = () => {
  return (
    <>
      <div className="slider-area">
        <div
          className="single-slider section-overly slider-height2 d-flex align-items-center"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>UI/UX Designer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Area End */}

      {/* Job Post Company Start */}
      <div className="job-post-company pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between">
            {/* Left Content */}
            <div className="col-xl-7 col-lg-8">
              {/* Job Single */}
              <div className="single-job-items mb-50">
                <div className="job-items">
                  <div className="company-img company-img-details">
                    <a href="#">
                      <img
                        src={jobimg}
                        alt="Company"
                        style={{ width: "50%", height: "auto" }}
                      />
                    </a>
                  </div>
                  <div className="job-tittle">
                    <a href="#">
                      <h4>UI/UX Designer</h4>
                    </a>
                    <ul>
                      <li>IT Consultant</li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>Lahore, Pakistan
                      </li>
                      <li>$3500 - $4000</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Job Single End */}

              <div className="job-post-details">
                <div className="post-details1 mb-50">
                  {/* Small Section Title */}
                  <div className="small-section-tittle">
                    <h4>Job Description</h4>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using, Content here content here making it look like
                    readable.
                  </p>
                </div>
                <div className="post-details2 mb-50">
                  {/* Small Section Title */}
                  <div className="small-section-tittle">
                    <h4>Required Knowledge, Skills, and Abilities</h4>
                  </div>
                  <ul>
                    <li>System Software Development</li>
                    <li>
                      Mobile Application in iOS/Android/Tizen or other platform
                    </li>
                    <li>Research and code, libraries, APIs, and frameworks</li>
                    <li>Strong knowledge of software development life cycle</li>
                    <li>Strong problem-solving and debugging skills</li>
                  </ul>
                </div>
                <div className="post-details2 mb-50">
                  {/* Small Section Title */}
                  <div className="small-section-tittle">
                    <h4>Education + Experience</h4>
                  </div>
                  <ul>
                    <li>3 or more years of professional design experience</li>
                    <li>Direct response email experience</li>
                    <li>Ecommerce website design experience</li>
                    <li>Familiarity with mobile and web apps preferred</li>
                    <li>Experience using Invision a plus</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Right Content */}
            <div className="col-xl-4 col-lg-4">
              <div className="post-details3 mb-50">
                {/* Small Section Title */}
                <div className="small-section-tittle">
                  <h4>Job Overview</h4>
                </div>
                <ul>
                  <li>
                    Posted date: <span>12 Aug 2019</span>
                  </li>
                  <li>
                    Location: <span>New York</span>
                  </li>
                  <li>
                    Vacancy: <span>02</span>
                  </li>
                  <li>
                    Job nature: <span>Full time</span>
                  </li>
                  <li>
                    Salary: <span>$7,800 yearly</span>
                  </li>
                  <li>
                    Application date: <span>12 Sep 2020</span>
                  </li>
                </ul>
                <div className="apply-btn2">
                  <a href="#" className="btn">
                    Apply Now
                  </a>
                </div>
              </div>
              <div className="post-details4 mb-50">
                {/* Small Section Title */}
                <div className="small-section-tittle">
                  <h4>Company Information</h4>
                </div>
                <span>InternnCarft</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <ul>
                  <li>
                    Name: <span>InternnCarft</span>
                  </li>
                  <li>
                    Web: <span>InternnCraft.com</span>
                  </li>
                  <li>
                    Email: <span>carrier.internncarft@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
