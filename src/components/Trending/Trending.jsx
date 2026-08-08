import React from 'react';
import GameCard from '../Cards/GameCard';
import SectionTitle from '../Common/SectionTitle';
import './Trending.css';

const Trending = ({ games }) => {
  const trendingGames = games.slice(0, 7);

  return (
    <section className="trending-section">
      <div className="container-fluid">
        <SectionTitle 
          title="Trending Now" 
          subtitle="Most popular games" 
        />
        <div className="trending-grid">
          {trendingGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;