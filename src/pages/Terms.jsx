import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaFileContract, FaGavel, FaUserCheck, FaShieldAlt, FaExclamationTriangle } from 'react-icons/fa';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="container-fluid">
        <Link to="/" className="terms-back">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="terms-header">
          <h1>📜 Terms of Service</h1>
          <p>Please read these terms carefully</p>
        </div>

        <div className="terms-content">
          <div className="terms-section">
            <FaFileContract className="terms-icon" />
            <h2>Acceptance of Terms</h2>
            <p>By using GameZone, you agree to these terms. If you do not agree, please do not use this website.</p>
          </div>

          <div className="terms-section">
            <FaGavel className="terms-icon" />
            <h2>Use of Services</h2>
            <p>You agree to use GameZone for personal, non-commercial purposes only. Any commercial use is prohibited.</p>
          </div>

          <div className="terms-section">
            <FaUserCheck className="terms-icon" />
            <h2>User Responsibilities</h2>
            <p>You are responsible for your actions while using this website. Do not engage in any harmful or illegal activities.</p>
          </div>

          <div className="terms-section">
            <FaShieldAlt className="terms-icon" />
            <h2>Content Disclaimer</h2>
            <p>All games are provided for entertainment purposes. We do not guarantee the accuracy or availability of any content.</p>
          </div>

          <div className="terms-section">
            <FaExclamationTriangle className="terms-icon" />
            <h2>Limitation of Liability</h2>
            <p>GameZone is not responsible for any damages, losses, or issues that may arise from using this website.</p>
          </div>
        </div>

        <div className="terms-disclaimer">
          <p>⚠️ This is a demo terms of service page. GameZone is not responsible for any issues or problems that may arise while using this website. All content is provided "as is" without any warranties.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;