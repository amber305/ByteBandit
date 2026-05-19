import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <div className="top-bar-container">
        <div className="top-bar">
          <div className="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>hello@bytebandit.com</span>
          </div>
          <div className="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>9876543210</span>
          </div>
          <div className="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>(HR) 9876543210</span>
          </div>
        </div>
      </div>
      
      <div className="connectors-container">
        <div className="connector"></div>
        <div className="connector"></div>
      </div>

      <nav className="main-navbar">
        <div className="logo-container">
          <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
            <path d="M12 3 L5 13 L12 18 L12 3Z" fill="#1D4ED8" stroke="#1D4ED8" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M12 14 L19 19 L12 29 L12 14Z" fill="#0F172A" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M5 13 L12 18 L5 25 L5 13Z" fill="#2563EB" />
            <path d="M19 19 L12 14 L19 7 L19 19Z" fill="#1E293B" />
          </svg>
          <span className="logo-text">ByteBandit<sup className="registered">®</sup></span>
        </div>
        
        <ul className="nav-links">
          {['Services', 'Hire Developers', 'Industries', 'Case Studies', 'Resources', 'Company'].map(item => (
            <li key={item} className="nav-item">
              {item}
              <svg className="dropdown-arrow" viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M7 10l5 5 5-5z" />
              </svg>
            </li>
          ))}
        </ul>
        
        <button className="contact-btn">Contact Us</button>
      </nav>
    </header>
  );
};

export default Navbar;
