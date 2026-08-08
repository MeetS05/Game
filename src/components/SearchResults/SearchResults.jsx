import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = ({ results, onClose }) => {
  if (results.length === 0) {
    return (
      <div className="search-results-empty">
        <span className="empty-icon">🔍</span>
        <p>No games found</p>
      </div>
    );
  }

  return (
    <div className="search-results">
      {results.map(game => (
        <Link 
          to={`/game/${game.id}`} 
          key={game.id}
          className="search-result-item"
          onClick={onClose}
        >
          <img src={game.image} alt={game.title} />
          <div className="search-result-info">
            <h4>{game.title}</h4>
            <span>{game.category}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;