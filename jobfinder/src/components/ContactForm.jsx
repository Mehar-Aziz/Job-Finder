import React from 'react';

function ContactForm() {
  return (
    <div className="col-lg-8">
      <form
        className="form-contact contact_form"
        action="contact_process.php"
        method="post"
        id="contactForm"
        noValidate
      >
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <textarea
                className="form-control w-100"
                name="message"
                id="message"
                cols="30"
                rows="9"
                onFocus={() => (this.placeholder = '')}
                onBlur={() => (this.placeholder = 'Enter Message')}
                placeholder="Enter Message"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control valid"
                name="name"
                id="name"
                type="text"
                onFocus={() => (this.placeholder = '')}
                onBlur={() => (this.placeholder = 'Enter your name')}
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control valid"
                name="email"
                id="email"
                type="email"
                onFocus={() => (this.placeholder = '')}
                onBlur={() => (this.placeholder = 'Enter email address')}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                className="form-control"
                name="subject"
                id="subject"
                type="text"
                onFocus={() => (this.placeholder = '')}
                onBlur={() => (this.placeholder = 'Enter Subject')}
                placeholder="Enter Subject"
              />
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="button button-contactForm boxed-btn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
