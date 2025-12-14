import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Stratton Apex</h3>
          <p>Your ultimate guide to starting and operating a successful luxury car rental business in Georgia.</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><strong>Business:</strong> Luxury Car Rental Guide</p>
          <p><strong>Location:</strong> Atlanta, GA 30328</p>
          <p><strong>Email:</strong> <a href="mailto:help@apexrentalguide.com">help@apexrentalguide.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+1.645.234.9013">+1.645.234.9013</a></p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#business-planning">Business Planning</a></li>
            <li><a href="#licensing">Licensing</a></li>
            <li><a href="#calculator">Calculator</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Stratton Apex. All rights reserved. | Located in Atlanta, GA 30328</p>
      </div>
    </footer>
  );
}
