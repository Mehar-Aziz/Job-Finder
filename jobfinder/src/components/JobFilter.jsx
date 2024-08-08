import React from 'react';

const JobFilter = () => {
  return (
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
      <div className="job-category-listing mb-50">
        <div className="single-listing">
          <div className="small-section-tittle2">
            <h4>Job Category</h4>
          </div>
          <div className="select-job-items2">
            <select name="select">
              <option value="">All Category</option>
              <option value="">Category 1</option>
              <option value="">Category 2</option>
              <option value="">Category 3</option>
              <option value="">Category 4</option>
            </select>
          </div>
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
              <input type="checkbox" checked="checked active" />
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
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
