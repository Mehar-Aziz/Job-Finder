import React from 'react';

const Slider = () => (
  <div className="slider-area">
    <div className="slider-active">
      <div className="single-slider slider-height d-flex align-items-center" data-background="assets/img/hero/h1_hero.jpg">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-9 col-md-10">
              <div className="hero__caption">
                <h1>Find the most exciting startup jobs</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <form action="#" className="search-box">
                <div className="input-form">
                  <input type="text" placeholder="Job Title or keyword" />
                </div>
                <div className="select-form">
                  <div className="select-itms">
                    <select name="select" id="select1">
                      <option value="">Location BD</option>
                      <option value="">Location PK</option>
                      <option value="">Location US</option>
                      <option value="">Location UK</option>
                    </select>
                  </div>
                </div>
                <div className="search-form">
                  <a href="#">Find job</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Slider;
