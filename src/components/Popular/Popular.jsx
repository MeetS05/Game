import React from 'react';
import GameCard from '../Cards/GameCard';
import SectionTitle from '../Common/SectionTitle';
import './Popular.css';

const Popular = ({ games }) => {
  const popularGames = games.filter(game => game.rating >= 4.7);

  return (
    <section className="popular-section">
      <div className="container-fluid">
        <SectionTitle 
          title="Popular Games" 
          subtitle="Highest rated games" 
        />
        <div className="popular-grid">
          {popularGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;