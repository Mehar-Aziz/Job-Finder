import React from 'react';
import heroImage from '../assets/images/contact.jpg'
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';

function Contact() {
  return (
    <>
      {/* Hero Area Start */}
      <div className="slider-area">
        <div
          className="single-slider section-overly slider-height2 d-flex align-items-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>Contact us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Area End */}

      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <ContactForm />
        
        <div className="col-lg-3 offset-lg-1">
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-home"></i>
            </span>
            <div className="media-body">
              <h3>Lahore, Pakistan.</h3>
              <p>Asia, 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-tablet"></i>
            </span>
            <div className="media-body">
              <h3>+92 333 2525802</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-email"></i>
            </span>
            <div className="media-body">
              <h3>support@internncarft.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
          
        </div>
        <ContactMap />
      </div>
      
    </>
  );
}

export default Contact;
