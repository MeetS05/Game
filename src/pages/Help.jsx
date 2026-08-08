import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaQuestionCircle, FaSearch, FaGamepad, FaUser, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import './Help.css';

const Help = () => {
  return (
    <div className="help-page">
      <div className="container-fluid">
        <Link to="/" className="help-back">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="help-header">
          <h1>❓ Help Center</h1>
          <p>How can we help you today?</p>
        </div>

        <div className="help-grid">
          <div className="help-card">
            <FaSearch className="help-icon" />
            <h3>How to Find Games</h3>
            <p>Use the search bar at the top to find your favorite games quickly.</p>
          </div>
          <div className="help-card">
            <FaGamepad className="help-icon" />
            <h3>How to Play Games</h3>
            <p>Click on any game card and press the "Play Now" button to start playing.</p>
          </div>
          <div className="help-card">
            <FaUser className="help-icon" />
            <h3>How to Create Account</h3>
            <p>Click on the user icon and choose "Sign Up" to create your free account.</p>
          </div>
          <div className="help-card">
            <FaShieldAlt className="help-icon" />
            <h3>Is it Safe?</h3>
            <p>Yes! All games are safe to play. We regularly check for security.</p>
          </div>
          <div className="help-card">
            <FaHeadset className="help-icon" />
            <h3>Contact Support</h3>
            <p>If you need help, visit our Contact page or email us at support@gamezone.com</p>
          </div>
          <div className="help-card">
            <FaQuestionCircle className="help-icon" />
            <h3>Frequently Asked Questions</h3>
            <p>Check our FAQ section for answers to common questions.</p>
          </div>
        </div>

        <div className="help-disclaimer">
          <p>⚠️ This is a demo help page. GameZone is not responsible for any issues or problems that may arise while using this website. All games are provided for entertainment purposes only.</p>
        </div>
      </div>
    </div>
  );
};

export default Help;