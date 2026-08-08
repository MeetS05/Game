import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Featured from '../components/Featured/Featured';
import Trending from '../components/Trending/Trending';
import Popular from '../components/Popular/Popular';
import Categories from '../components/Categories/Categories';
import NewGames from '../components/NewGames/NewGames';
import Newsletter from '../components/Newsletter/Newsletter';
import BackToTop from '../components/BackToTop/BackToTop';
import { getFeaturedGames, getTrendingGames, getPopularGames, getNewGames, categories } from '../data/gameData';
import './Home.css';

const Home = () => {
  // ❌ Remove this if it exists
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const featuredGames = getFeaturedGames().slice(0, 6);
  const trendingGames = getTrendingGames().slice(0, 6);
  const popularGames = getPopularGames().slice(0, 6);
  const newGames = getNewGames().slice(0, 6);

  return (
    <div className="home-page">
      <Hero />
      <Featured games={featuredGames} />
      <Trending games={trendingGames} />
      <Popular games={popularGames} />
      <Categories categories={categories} />
      <NewGames games={newGames} />
      <Newsletter />
      <BackToTop />
    </div>
  );
};

export default Home;