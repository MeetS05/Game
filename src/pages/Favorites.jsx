import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/Cards/GameCard';
import { gamesData } from '../data/gameData';
import { FaArrowLeft } from 'react-icons/fa';
import './Favorites.css';

const Favorites = () => {
  // Simulate favorites - first 4 games
  const [favorites] = useState(gamesData.slice(0, 4));

  if (favorites.length === 0) {
    return (
      <div className="favorites-page">
        <div className="container-fluid">
          <Link to="/" className="favorites-back">
            <FaArrowLeft /> Back to Home
          </Link>
          <div className="favorites-empty">
            <div className="empty-state">
              <span className="empty-icon">❤️</span>
              <h3>No Favorites Yet</h3>
              <p>Start adding games to your favorites!</p>
              <Link to="/games" className="btn-primary">Browse Games</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="container-fluid">
        <Link to="/" className="favorites-back">
          <FaArrowLeft /> Back to Home
        </Link>
        
        <div className="favorites-header">
          <h1>❤️ Your Favorites</h1>
          <p>Games you love</p>
        </div>
        
        <div className="favorites-grid">
          {favorites.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;