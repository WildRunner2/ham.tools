import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="callsign">SP3FCK</span> Ham Tools
            </h1>
            <p className="hero-subtitle">
              Amateur Radio resources, photo gallery, and QRZ.com integration tools
            </p>
            <div className="hero-actions">
              <Link to="/gallery" className="btn btn-secondary">
                View Gallery
              </Link>
              <Link to="/useful-links" className="btn btn-secondary">
                Useful Links
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3>Photo Gallery</h3>
              <p>
                Browse through amateur radio photos stored in our database. 
                Perfect for showcasing your station, antennas, and ham radio activities.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>QRZ.com Integration</h3>
              <p>
                Configure custom iframes with your selected photos for use on your 
                QRZ.com profile page. No login required for viewing content.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Useful Tools</h3>
              <p>
                Access a curated collection of amateur radio tools, calculators, 
                and resources to enhance your ham radio experience.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about">
          <div className="about-content">
            <h2 className="section-title">About SP3FCK Ham Tools</h2>
            <div className="about-text">
              <p>
                This platform is designed to serve the amateur radio community with 
                practical tools and resources. Whether you're looking to showcase your 
                station photos on QRZ.com or find useful ham radio links, this site 
                has you covered.
              </p>
              <p>
                The photo gallery connects to our database via Vercel backend, ensuring 
                fast and reliable access to your images. The iframe configuration tool 
                allows logged-in users to customize their QRZ.com profile displays.
              </p>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">∞</div>
                <div className="stat-label">Photos Supported</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Availability</div>
              </div>
              <div className="stat">
                <div className="stat-number">Free</div>
                <div className="stat-label">Public Access</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Explore the gallery or create an account to configure your custom iframe.
            </p>
            <div className="cta-actions">
              <Link to="/gallery" className="btn btn-secondary">
                Browse Gallery
              </Link>
              <Link to="/login" className="btn btn-outline">
                Sign In
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
