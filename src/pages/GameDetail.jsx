import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allGames } from '../data/gameData';
import { FaPlay, FaStar, FaShare, FaArrowLeft } from 'react-icons/fa';
import './GameDetail.css';

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [relatedGames, setRelatedGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // Find game by ID - Make sure we parse correctly
    const gameId = parseInt(id);
    const foundGame = allGames.find(g => g.id === gameId);
    
    console.log('Looking for game ID:', gameId);
    console.log('Found game:', foundGame);
    
    if (foundGame) {
      setGame(foundGame);
      
      // Get related games (same category, different ID)
      const related = allGames
        .filter(g => g.category === foundGame.category && g.id !== foundGame.id)
        .slice(0, 6);
      setRelatedGames(related);
    } else {
      // If game not found, redirect to 404
      setGame(null);
    }
    
    setLoading(false);
    // window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="game-detail-page">
        <div className="container-fluid">
          <div className="loading-state">
            <div className="loader-spinner"></div>
            <p>Loading game...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="game-detail-page">
        <div className="container-fluid">
          <div className="not-found-state">
            <h2>🎮 Game Not Found</h2>
            <p>The game you're looking for doesn't exist.</p>
            <Link to="/games" className="btn-primary">Browse Games</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="game-detail-page">
      <div className="container-fluid">
        <div className="game-detail-wrapper">
          {/* Back Button */}
          <Link to="/games" className="detail-back">
            <FaArrowLeft /> Back to Games
          </Link>

          {/* Game Player */}
          <div className="game-player-wrapper">
            <div className="game-player-header">
              <h1 className="game-player-title">{game.title}</h1>
              <span className="game-player-category">{game.category}</span>
            </div>
            <div className="game-player-container">
              <iframe
                src={game.embedUrl || "https://www.gameflare.com/embed/game-1/"}
                className="game-iframe"
                allowFullScreen
                title={game.title}
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
            <div className="game-player-actions">
              <button 
                className="play-fullscreen-btn" 
                onClick={() => window.open(game.embedUrl, '_blank')}
              >
                <FaPlay /> Play Full Screen
              </button>
              <button 
                className="share-btn" 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: game.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }}
              >
                <FaShare /> Share
              </button>
            </div>
          </div>

          {/* Game Info */}
          <div className="game-info-grid">
            <div className="game-info-left">
              <div className="game-rating-section">
                <div className="rating-big">
                  <span className="rating-number">{game.rating}</span>
                  <span className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className="star-icon" 
                        style={{ 
                          opacity: i < Math.floor(game.rating) ? 1 : 
                                   (i < Math.ceil(game.rating) && game.rating % 1 >= 0.5 ? 1 : 0.2)
                        }} 
                      />
                    ))}
                  </span>
                </div>
                <span className="plays-count">{game.plays} plays</span>
              </div>

              <div className="game-description">
                <h3>About {game.title}</h3>
                <p>{game.description}</p>
              </div>

              <div className="game-tags">
                {game.tags && game.tags.map((tag, index) => (
                  <span key={index} className="tag">#{tag}</span>
                ))}
              </div>
            </div>

            <div className="game-info-right">
              <div className="game-stats-card">
                <div className="stat-item-detail">
                  <span className="stat-label-detail">Category</span>
                  <span className="stat-value-detail">{game.category}</span>
                </div>
                <div className="stat-item-detail">
                  <span className="stat-label-detail">Rating</span>
                  <span className="stat-value-detail">⭐ {game.rating}</span>
                </div>
                <div className="stat-item-detail">
                  <span className="stat-label-detail">Total Plays</span>
                  <span className="stat-value-detail">{game.plays}</span>
                </div>
                <div className="stat-item-detail">
                  <span className="stat-label-detail">Game ID</span>
                  <span className="stat-value-detail">#{game.id}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Games */}
          {relatedGames.length > 0 && (
            <div className="related-games-section">
              <h2 className="related-title">🎮 You might also like</h2>
              <div className="related-games-grid">
                {relatedGames.map(related => (
                  <Link to={`/game/${related.id}`} key={related.id} className="related-card">
                    <img src={related.image} alt={related.title} />
                    <div className="related-card-content">
                      <h4>{related.title}</h4>
                      <span>{related.category}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameDetail;