import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarker, FaClock, FaArrowLeft } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="container-fluid">
        <div className="contact-wrapper">
          <Link to="/" className="contact-back">
            <FaArrowLeft /> Back to Home
          </Link>

          <div className="contact-header">
            <h1>📬 Contact Us</h1>
            <p>We'd love to hear from you!</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Have questions? We're here to help.</p>
              
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <span>support@gamezone.com</span>
                </div>
              </div>

              <div className="info-item">
                <FaPhone className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>

              <div className="info-item">
                <FaMapMarker className="info-icon" />
                <div>
                  <h4>Address</h4>
                  <span>123 Gaming Street, Game City</span>
                </div>
              </div>

              <div className="info-item">
                <FaClock className="info-icon" />
                <div>
                  <h4>Hours</h4>
                  <span>Mon-Fri: 9AM - 6PM</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              {submitted && (
                <div className="success-message">
                  ✅ Message sent successfully!
                </div>
              )}
              
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              
              <button type="submit" className="send-btn">
                Send Message ✉️
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;