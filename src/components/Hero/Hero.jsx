import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaRocket, FaGamepad, FaTrophy } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Create confetti effect on load
  useEffect(() => {
    const createConfetti = () => {
      const colors = ['#7c3aed', '#a78bfa', '#f472b6', '#fbbf24', '#34d399'];
      for (let i = 0; i < 30; i++) {
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
          particle.style.animationDelay = Math.random() * 2 + 's';
          document.body.appendChild(particle);
          
          setTimeout(() => {
            particle.remove();
          }, 4000);
        }, i * 100);
      }
    };

    // Confetti on load
    createConfetti();
    
    // Confetti on click
    const handleClick = () => createConfetti();
    document.addEventListener('click', handleClick);
    
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-glow-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge reveal">
            <span className="bounce-animation">🎮</span> Latest Games
          </div>
          
          <h1 className="hero-title reveal">
            <span className="gradient-text shimmer-text">Play</span> the Best
            <br />Free Games
          </h1>
          
          <p className="hero-description reveal">
            Discover thousands of free online games. Play anytime, anywhere.
            No downloads required!
          </p>
          
          <div className="hero-buttons reveal">
            <Link to="/games" className="btn-primary pulse-glow">
              <FaPlay /> Start Playing <FaRocket className="float-animation" />
            </Link>
            <Link to="/categories" className="btn-secondary hover-bounce">
              <FaGamepad /> Explore Categories
            </Link>
          </div>
          
          <div className="hero-stats reveal">
            <div className="stat-item scale-up-bounce" style={{ animationDelay: '0.2s' }}>
              <span className="stat-number">70+</span>
              <span className="stat-label">Games</span>
            </div>
            <div className="stat-item scale-up-bounce" style={{ animationDelay: '0.4s' }}>
              <span className="stat-number">2B+</span>
              <span className="stat-label">Plays</span>
            </div>
            <div className="stat-item scale-up-bounce" style={{ animationDelay: '0.6s' }}>
              <span className="stat-number">4.8</span>
              <span className="stat-label">Avg Rating</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image reveal" style={{ animationDelay: '0.3s' }}>
          <div className="hero-game-grid">
            <div className="game-card-hero float-animation float-animation-delay-1 card-glow">
              🎮
              <span className="game-emoji-label">Action</span>
            </div>
            <div className="game-card-hero float-animation float-animation-delay-2 card-glow">
              ⚔️
              <span className="game-emoji-label">Strategy</span>
            </div>
            <div className="game-card-hero float-animation float-animation-delay-3 card-glow">
              🏎️
              <span className="game-emoji-label">Racing</span>
            </div>
            <div className="game-card-hero float-animation float-animation-delay-4 card-glow">
              🧩
              <span className="game-emoji-label">Puzzle</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Gaming Icons */}
      <div className="floating-icons">
        <span className="floating-icon" style={{ top: '10%', left: '5%', animationDelay: '0s' }}>🎯</span>
        <span className="floating-icon" style={{ top: '20%', right: '8%', animationDelay: '1s' }}>🏆</span>
        <span className="floating-icon" style={{ bottom: '25%', left: '3%', animationDelay: '2s' }}>⭐</span>
        <span className="floating-icon" style={{ bottom: '15%', right: '5%', animationDelay: '0.5s' }}>🎮</span>
        <span className="floating-icon" style={{ top: '50%', left: '2%', animationDelay: '1.5s' }}>🔥</span>
      </div>
    </section>
  );
};

export default Hero;