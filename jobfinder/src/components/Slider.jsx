import React from 'react';
import Select from 'react-select';
import heroImage from '../assets/images/hero.jpg'

const locationOptions = [
    { value: 'bd', label: 'Location BD' },
    { value: 'pk', label: 'Location PK' },
    { value: 'us', label: 'Location US' },
    { value: 'uk', label: 'Location UK' }
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        margin: '0px 0',
        paddingTop: '17px',
        paddingBottom: '17px',
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
      <div className="single-slider slider-height d-flex align-items-center" style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
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
