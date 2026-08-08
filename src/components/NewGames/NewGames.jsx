import React from 'react';
import GameCard from '../Cards/GameCard';
import SectionTitle from '../Common/SectionTitle';
import './NewGames.css';

const NewGames = ({ games }) => {
  const newGames = games.slice(4, 8);

  return (
    <section className="new-games-section">
      <div className="container-fluid">
        <SectionTitle 
          title="New Releases" 
          subtitle="Fresh games added" 
        />
        <div className="new-games-grid">
          {newGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewGames;