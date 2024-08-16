import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('/api/contact/submit', {
        name,
        email,
        subject,
        message,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        console.log('Form submitted successfully');
      } else {
        console.log('Error submitting form');
      }
    } catch (error) {
      console.log('Error submitting form:', error);
    }
  };
  
  return (
    <div className="col-lg-8">
      <form
        className="form-contact contact_form"
        onSubmit={handleSubmit}  // Use onSubmit for the form element
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Message"
                required
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
