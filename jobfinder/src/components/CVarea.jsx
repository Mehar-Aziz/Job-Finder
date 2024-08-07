import React from 'react';
import bgImage from '../assets/images/cv_bg.jpg';

const CvArea = () => (
  <div
    className="online-cv cv-bg section-overly pt-90 pb-120"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="cv-caption text-center">
            <p className="pera1">FEATURED TOURS Packages</p>
            <p className="pera2">Make a Difference with Your Online Resume!</p>
            <a href="#" className="border-btn2 border-btn4">
              Upload your CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CvArea;
