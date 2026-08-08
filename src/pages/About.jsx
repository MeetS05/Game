import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container-fluid">
        <div className="about-wrapper">
          <div className="about-header">
            <h1>About GameZone</h1>
            <p>Your ultimate destination for free online games</p>
          </div>
          
          <div className="about-content">
            <div className="about-section">
              <h2>🎮 Our Mission</h2>
              <p>
                GameZone is dedicated to providing the best free online gaming experience.
                We curate thousands of games across multiple categories, ensuring there's
                something for everyone.
              </p>
            </div>

            <div className="about-section">
              <h2>✨ Why Choose Us</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">🆓</span>
                  <h4>100% Free</h4>
                  <p>All games are completely free to play</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📱</span>
                  <h4>Mobile Friendly</h4>
                  <p>Play on any device, anytime</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <h4>No Downloads</h4>
                  <p>Instant play in your browser</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔄</span>
                  <h4>Regular Updates</h4>
                  <p>New games added weekly</p>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>📊 Our Numbers</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-number">5,000+</span>
                  <span className="stat-label">Games Available</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">2B+</span>
                  <span className="stat-label">Total Plays</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">4.8</span>
                  <span className="stat-label">Average Rating</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">10M+</span>
                  <span className="stat-label">Monthly Players</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;