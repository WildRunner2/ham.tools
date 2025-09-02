import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SP3FCK Ham Tools</h3>
            <p className="text-muted">
              Amateur Radio tools and resources for the ham community.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/useful-links">Useful Links</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p className="text-muted">
              Callsign: <span className="callsign-text">SP3FCK</span>
            </p>
            <p className="text-muted">
              QRZ: <a href="https://www.qrz.com/db/SP3FCK" target="_blank" rel="noopener noreferrer">
                qrz.com/db/SP3FCK
              </a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-muted">
            © {currentYear} SP3FCK Ham Tools. Built for the amateur radio community. 73!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
