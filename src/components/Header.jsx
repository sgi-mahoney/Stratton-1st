import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="contact-bar">
          <span>📧 Help@apexrentalguide.com</span>
          <span>📞 678-810-8665</span>
          <span>📍 Miami, FL</span>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>Stratton Apex</h1>
            <p>Luxury Car Rental Business Guide</p>
          </div>
          
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#business-planning">Business Planning</a></li>
            <li><a href="#licensing">Licensing</a></li>
            <li><a href="#fleet">Fleet Management</a></li>
            <li><a href="#calculator">Calculator</a></li>
            <li><a href="#contact" className="contact-link">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
