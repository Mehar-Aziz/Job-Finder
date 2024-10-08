import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import testimonialImage from '../assets/images/author.png'; 
import '../scss/_testimonial.scss';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/testimonials');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="testimonial-area testimonial-padding">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-10">
            <Slider {...settings} className="h1-testimonial-active dot-style">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="single-testimonial text-center">
                  <div className="testimonial-caption">
                    <div className="testimonial-founder">
                      <div className="founder-img mb-30">
                        <img src={testimonialImage} alt={testimonial.name} />
                        <span>{testimonial.name}</span>
                        <p>{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="testimonial-top-cap">
                      <p>{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
