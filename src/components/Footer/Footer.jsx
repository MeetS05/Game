import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaGithub,
  FaGamepad, FaRocket, FaTrophy, FaArrowUp
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-new">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 55C120 50 240 40 360 45C480 50 600 70 720 75C840 80 960 70 1080 65C1200 60 1320 55 1380 52.5L1440 50V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z" 
            fill="url(#footerGradient)" />
          <defs>
            <linearGradient id="footerGradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="footer-main">
        <div className="container-fluid">
          <div className="footer-top">
            <div className="footer-brand-section">
              <Link to="/" className="footer-brand-logo">
                <span className="brand-icon">🎮</span>
                <span className="brand-text">GameZone</span>
              </Link>
              <p className="brand-tagline">🌟 Where Gaming Meets Excellence</p>
              <div className="brand-stats">
                <div className="stat-badge">
                  <FaGamepad />
                  <span>80+ Games</span>
                </div>
                <div className="stat-badge">
                  <FaRocket />
                  <span>Free to Play</span>
                </div>
                <div className="stat-badge">
                  <FaTrophy />
                  <span>Top Rated</span>
                </div>
              </div>
            </div>

            <div className="footer-newsletter">
              <h4>🎯 Join the Gaming Community</h4>
              <p>Subscribe for exclusive game updates & offers</p>
              <form className="footer-newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
              <div className="social-icons">
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaFacebook /></a>
                <a href="#" className="social-icon"><FaYoutube /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div className="footer-middle">
            <div className="footer-links-group">
              <h4>🚀 Quick Links</h4>
              <ul>
                <li><Link to="/games">🎯 All Games</Link></li>
                <li><Link to="/categories">📂 Categories</Link></li>
                <li><Link to="/about">ℹ️ About Us</Link></li>
                <li><Link to="/contact">📬 Contact</Link></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>🛡️ Support</h4>
              <ul>
                <li><Link to="/help">❓ Help Center</Link></li>
                <li><Link to="/privacy">🔒 Privacy Policy</Link></li>
                <li><Link to="/terms">📜 Terms of Service</Link></li>
                <li><Link to="/favorites">❤️ Favorites</Link></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>🏆 Popular Games</h4>
              <ul>
                <li><Link to="/game/1">🏃 Subway Surfers</Link></li>
                <li><Link to="/game/3">🚀 Among Us</Link></li>
                <li><Link to="/game/4">🍬 Candy Crush</Link></li>
                <li><Link to="/game/7">⛏️ Minecraft</Link></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>⭐ Top Rated</h4>
              <ul>
                <li><Link to="/game/3">⭐ 4.9 Among Us</Link></li>
                <li><Link to="/game/7">⭐ 4.9 Minecraft</Link></li>
                <li><Link to="/game/1">⭐ 4.8 Subway Surfers</Link></li>
                <li><Link to="/game/41">⭐ 4.8 Genshin Impact</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>© 2024 <span className="highlight">GameZone</span>. All rights reserved.</p>
              <p className="made-with">Made with <span className="heart">❤️</span> for gamers worldwide</p>
            </div>
            <div className="footer-bottom-right">
              <button onClick={scrollToTop} className="scroll-top-btn">
                <FaArrowUp /> Back to Top
              </button>
            </div>
          </div>

          <div className="footer-disclaimer">
            <p>⚠️ This is a demo website. GameZone is not responsible for any issues or problems that may arise while using this website. All games are provided for entertainment purposes only. Play at your own risk.</p>
          </div>
        </div>
      </div>

      <div className="footer-floating-icons">
        <span className="float-icon" style={{ left: '5%', animationDelay: '0s' }}>🎮</span>
        <span className="float-icon" style={{ left: '15%', animationDelay: '0.5s' }}>⚔️</span>
        <span className="float-icon" style={{ right: '5%', animationDelay: '1s' }}>🏆</span>
        <span className="float-icon" style={{ right: '15%', animationDelay: '1.5s' }}>⭐</span>
        <span className="float-icon" style={{ left: '25%', animationDelay: '0.8s' }}>🎯</span>
        <span className="float-icon" style={{ right: '25%', animationDelay: '1.2s' }}>🔥</span>
      </div>
    </footer>
  );
};

export default Footer;