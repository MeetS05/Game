import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../Common/SectionTitle';
import './Categories.css';

const Categories = ({ categories }) => {
  return (
    <section className="categories-section">
      <div className="container-fluid">
        <SectionTitle 
          title="Browse by Genre" 
          subtitle="Explore games by category" 
        />
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link 
              to={`/games?category=${category.name}`} 
              key={index} 
              className="category-card"
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <span className="category-count">{category.count} games</span>
              <div className="category-arrow">→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;