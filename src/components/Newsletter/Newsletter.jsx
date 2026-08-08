import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaArrowRight, FaGift } from 'react-icons/fa';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Confetti effect on subscribe
      const colors = ['#7c3aed', '#a78bfa', '#f472b6', '#fbbf24', '#34d399'];
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          const particle = document.createElement('div');
          particle.className = 'confetti-particle';
          particle.style.left = Math.random() * 100 + 'vw';
          particle.style.top = '-10px';
          particle.style.background = colors[Math.floor(Math.random() * colors.length)];
          particle.style.width = Math.random() * 8 + 4 + 'px';
          particle.style.height = Math.random() * 8 + 4 + 'px';
          particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
          particle.style.animationDuration = Math.random() * 2 + 2 + 's';
          document.body.appendChild(particle);
          setTimeout(() => particle.remove(), 4000);
        }, i * 50);
      }
      
      alert('🎉 Thanks for subscribing! You\'ll get exclusive game updates!');
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section" ref={sectionRef}>
      <div className="container-fluid">
        <div className="newsletter-wrapper reveal">
          <div className="newsletter-content">
            <div className="newsletter-icon float-animation">📬</div>
            <h2 className="newsletter-title shimmer-text">Stay Updated!</h2>
            <p className="newsletter-description">
              Subscribe to our newsletter and never miss new game releases
            </p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className={`input-wrapper ${isHovered ? 'hovered' : ''}`}
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}>
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="subscribe-btn pulse-glow">
                  Subscribe <FaArrowRight className="float-animation" />
                </button>
              </div>
            </form>
            <div className="newsletter-perks">
              <span className="perk-item"><FaGift /> Free Game Updates</span>
              <span className="perk-item">🎮 Exclusive Content</span>
              <span className="perk-item">🏆 Early Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;