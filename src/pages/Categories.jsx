import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/gameData';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories-page">
      <div className="container-fluid">
        <h1 className="categories-title">Game Categories</h1>
        <p className="categories-subtitle">Browse games by your favorite genre</p>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link 
              to={`/games?category=${category.name}`} 
              key={index} 
              className="category-card-large"
            >
              <div className="category-icon-large">{category.icon}</div>
              <div className="category-info">
                <h3 className="category-name">{category.name}</h3>
                <span className="category-count">{category.count} games</span>
              </div>
              <div className="category-arrow">→</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;