import React from 'react';
import Select from 'react-select';

const locationOptions = [
    { value: 'bd', label: 'Location BD' },
    { value: 'pk', label: 'Location PK' },
    { value: 'us', label: 'Location US' },
    { value: 'uk', label: 'Location UK' }
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        margin: '10px 0',
        paddingTop: '8px',
        border: 'none',
    }),
    menu: (provided) => ({
        ...provided,
        zIndex: 9999
    })
};

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
                    <Select
                      options={locationOptions}
                      placeholder="Select Location"
                      styles={customStyles}
                    />
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
