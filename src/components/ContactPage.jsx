import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Have questions about starting your luxury car rental business? We're here to help!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <h3>📍 Location</h3>
            <p>Miami, FL</p>
          </div>

          <div className="info-card">
            <h3>📧 Email</h3>
            <p><a href="mailto:Help@apexrentalguide.com">Help@apexrentalguide.com</a></p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p><a href="tel:678-810-8665">678-810-8665</a></p>
          </div>

          <div className="info-card">
            <h3>🌐 Website</h3>
            <p><a href="https://www.apexrentalguide.com">www.apexrentalguide.com</a></p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      <div className="contact-cta">
        <h2>Ready to Start Your Luxury Car Rental Business?</h2>
        <p>Contact us today at <strong>Help@apexrentalguide.com</strong> or call <strong>678-810-8665</strong></p>
        <button className="cta-btn">Get Started</button>
      </div>
    </div>
  );
}
