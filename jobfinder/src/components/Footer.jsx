import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Footer Start */}
      <div className="footer-area footer-bg footer-padding">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="single-footer-caption mb-30">
                  <div className="footer-tittle">
                    <h4>About Us</h4>
                    <div className="footer-pera">
                      <p>streamlined job portal that connects job seekers with top employers. Easily browse job listings, apply, and track your applications. Whether you're looking for freelance or full-time work, simplifies your job search and helps you find the right fit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Contact Info</h4>
                  <ul>
                    <li>
                      <p>Address: Lahore</p>
                    </li>
                    <li><a href="#">Phone: +92 333 2525802</a></li>
                    <li><a href="#">Email: meharaziz.1614@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Important Link</h4>
                  <ul>
                    <li><a href="#">View Project</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Proparties</a></li>
                    <li><a href="#">Support</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Newsletter</h4>
                  <div className="footer-pera footer-pera2">
                    <p>Join for updates.</p>
                  </div>
                  {/* Form */}
                  <div className="footer-form">
                    <div id="mc_embed_signup">
                      <form
                        target="_blank"
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                        method="get"
                        className="subscribe_form relative mail_part"
                      >
                        <input
                          type="email"
                          name="email"
                          id="newsletter-form-email"
                          placeholder="Email Address"
                          className="placeholder hide-on-focus"
                          onFocus={() => (this.placeholder = '')}
                          onBlur={() => (this.placeholder = 'Email Address')}
                        />
                        <div className="form-icon">
                          <button
                            type="submit"
                            name="submit"
                            id="newsletter-submit"
                            className="email_icon newsletter-submit button-contactForm"
                          >
                            <img src="assets/img/icon/form.png" alt="" />
                          </button>
                        </div>
                        <div className="mt-10 info"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>   
        </div>
      </div>
      
      <div className="footer-bottom-area footer-bg">
        <div className="container">
          <div className="footer-border">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-xl-10 col-lg-10">
                <div className="footer-copy-right">
                  <p>
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
                   
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="footer-social f-right">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fas fa-globe"></i></a>
                  <a href="#"><i className="fab fa-behance"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </footer>
  );
};

export default Footer;
