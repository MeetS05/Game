import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Games from '../pages/Games';
import GameDetail from '../pages/GameDetail';
import Categories from '../pages/Categories';
import About from '../pages/About';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import Favorites from '../pages/Favorites';
import Contact from '../pages/Contact';
import Help from '../pages/Help';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import NotFound from '../pages/NotFound';

// ===== SCROLL TO TOP COMPONENT =====
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

// ===== APP ROUTER =====
const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="game/:id" element={<GameDetail />} />
          <Route path="categories" element={<Categories />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};

export default AppRouter;