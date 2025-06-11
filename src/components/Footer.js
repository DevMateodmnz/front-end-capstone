import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <img src="footer-logo.png" alt="Little Lemon" />
      </div>
      <div className="footer-section">
        <h4>Navigation</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <address>
          123 Lemon Street<br/>
          Chicago, IL 60601<br/>
          (312) 555-1234<br/>
          contact@littlelemon.com
        </address>
      </div>
      <div className="footer-section">
        <h4>Social Media</h4>
        {/* Social media links would go here */}
      </div>
    </footer>
  );
}

export default Footer;