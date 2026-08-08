import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import GamePlayer from '../GamePlayer/GamePlayer';
import './GameCard.css';

const GameCard = ({ game, featured = false }) => {
  const navigate = useNavigate();
  const [showPlayer, setShowPlayer] = useState(false);

  if (!game || !game.id) {
    return null;
  }

  const handlePlayClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPlayer(true);
    document.body.style.overflow = 'hidden';
  };

  const closePlayer = () => {
    setShowPlayer(false);
    document.body.style.overflow = 'unset';
  };

  const handleCardClick = (e) => {
    // If click is on the card itself (not on play button), navigate to detail
    if (!e.target.closest('.play-btn')) {
      navigate(`/game/${game.id}`);
    }
  };

  return (
    <>
      {showPlayer && (
        <GamePlayer game={game} onClose={closePlayer} />
      )}
      
      <div className={`game-card ${featured ? 'featured-card' : ''} card-glow hover-bounce`}>
        <div className="game-card-link" onClick={handleCardClick}>
          <div className="game-card-image">
            <img src={game.image} alt={game.title} loading="lazy" />
            <div className="game-card-overlay">
              <button 
                className="play-btn pulse-glow" 
                onClick={handlePlayClick}
                aria-label={`Play ${game.title}`}
              >
                <FaPlay />
              </button>
            </div>
            {featured && <span className="featured-badge shimmer-text">Featured</span>}
          </div>
          <div className="game-card-content">
            <h3 className="game-card-title">{game.title}</h3>
            <div className="game-card-hover-info">
              <span className="game-category">{game.category}</span>
              <span className="game-rating">⭐ {game.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;