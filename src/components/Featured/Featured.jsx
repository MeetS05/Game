import React from 'react';
import GameCard from '../Cards/GameCard';
import SectionTitle from '../Common/SectionTitle';
import './Featured.css';

const Featured = ({ games }) => {
  const featuredGames = games.slice(0, 6);

  return (
    <section className="featured-section">
      <div className="container-fluid">
        <SectionTitle 
          title="Featured Games" 
          subtitle="Top picks for you" 
        />
        <div className="featured-grid">
          {featuredGames.map((game) => (
            <div key={game.id} className="featured-item">
              <GameCard game={game} featured={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;