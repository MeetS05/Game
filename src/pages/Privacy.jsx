import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaLock, FaUserSecret, FaCookie, FaShieldAlt, FaEye } from 'react-icons/fa';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="container-fluid">
        <Link to="/" className="privacy-back">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="privacy-header">
          <h1>🔒 Privacy Policy</h1>
          <p>Your privacy matters to us</p>
        </div>

        <div className="privacy-content">
          <div className="privacy-section">
            <FaLock className="privacy-icon" />
            <h2>Information We Collect</h2>
            <p>We collect basic information like your email address when you sign up for our newsletter. We do not collect any sensitive personal information.</p>
          </div>

          <div className="privacy-section">
            <FaUserSecret className="privacy-icon" />
            <h2>How We Use Your Data</h2>
            <p>We use your information only to provide you with updates about new games and promotions. We never share your data with third parties.</p>
          </div>

          <div className="privacy-section">
            <FaCookie className="privacy-icon" />
            <h2>Cookies</h2>
            <p>We use cookies to improve your browsing experience. You can disable cookies in your browser settings at any time.</p>
          </div>

          <div className="privacy-section">
            <FaShieldAlt className="privacy-icon" />
            <h2>Data Security</h2>
            <p>We implement security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
          </div>

          <div className="privacy-section">
            <FaEye className="privacy-icon" />
            <h2>Your Rights</h2>
            <p>You have the right to access, modify, or delete your personal data at any time. Contact us for any privacy concerns.</p>
          </div>
        </div>

        <div className="privacy-disclaimer">
          <p>⚠️ This is a demo privacy policy page. GameZone is not responsible for any issues or problems that may arise. Please read our terms and conditions carefully before using this website.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;