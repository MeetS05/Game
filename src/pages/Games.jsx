import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GameCard from '../components/Cards/GameCard';
import { allGames, categories } from '../data/gameData';
import './Games.css';

const Games = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const categoryParam = params.get('category');
  const searchParam = params.get('search');
  
  const [filter, setFilter] = useState(categoryParam || 'All');

  // Update filter when URL changes
  // useEffect(() => {
  //   if (categoryParam) {
  //     setFilter(categoryParam);
  //   } else if (searchParam) {
  //     setFilter('All');
  //   }
  // }, [categoryParam, searchParam]);

  const filteredGames = () => {
    let games = allGames;
    
    // Filter by category
    if (filter !== 'All') {
      games = games.filter(game => game.category === filter);
    }
    
    // Filter by search
    if (searchParam) {
      games = games.filter(game =>
        game.title.toLowerCase().includes(searchParam.toLowerCase()) ||
        game.category.toLowerCase().includes(searchParam.toLowerCase())
      );
    }
    
    return games;
  };

  const games = filteredGames();

  const handleFilterChange = (category) => {
    setFilter(category);
    if (category === 'All') {
      navigate('/games');
    } else {
      navigate(`/games?category=${category}`);
    }
  };

  return (
    <div className="games-page">
      <div className="container-fluid">
        <div className="games-header">
          <h1 className="games-title">🎮 All Games ({games.length})</h1>
          {searchParam && (
            <p className="search-result-text">Search results for: "{searchParam}"</p>
          )}
          {categoryParam && !searchParam && (
            <p className="search-result-text">Category: <strong>{categoryParam}</strong></p>
          )}
          <div className="games-filter">
            <button
              className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
              onClick={() => handleFilterChange('All')}
            >
              All ({allGames.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat.name}
                className={`filter-btn ${filter === cat.name ? 'active' : ''}`}
                onClick={() => handleFilterChange(cat.name)}
              >
                {cat.icon} {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
        {games.length === 0 ? (
          <div className="no-games-found">
            <span className="no-games-icon">🔍</span>
            <h3>No games found</h3>
            <p>Try selecting a different category</p>
            <button 
              className="clear-filter-btn"
              onClick={() => handleFilterChange('All')}
            >
              View All Games
            </button>
          </div>
        ) : (
          <div className="games-grid">
            {games.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;