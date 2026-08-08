import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaBars, FaTimes, FaTimesCircle, FaArrowLeft } from 'react-icons/fa';
import { allGames } from '../../data/gameData';
import Weather from '../Weather/Weather';
// import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsMobileSearchOpen(false);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isMobileSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isMobileSearchOpen]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }
    const filtered = allGames.filter(game =>
      game.title.toLowerCase().includes(query.toLowerCase()) ||
      game.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
    setIsSearchOpen(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      setIsMobileSearchOpen(false);
      setIsMobileMenuOpen(false);
      navigate(`/games?search=${searchQuery}`);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openMobileSearch = () => {
    setIsMobileSearchOpen(true);
    setTimeout(() => {
      if (mobileSearchRef.current) {
        mobileSearchRef.current.focus();
      }
    }, 100);
  };

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <span className="logo-icon">🎮</span>
            <span className="logo-text gradient-text">GameZone</span>
          </Link>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={closeMobileMenu}></div>
        )}

        {isMobileSearchOpen && (
          <div className="mobile-search-overlay" onClick={closeMobileSearch}></div>
        )}

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>🏠 Home</Link>
          <Link to="/games" className="nav-link" onClick={closeMobileMenu}>🎯 Games</Link>
          <Link to="/categories" className="nav-link" onClick={closeMobileMenu}>📂 Categories</Link>
          <Link to="/about" className="nav-link" onClick={closeMobileMenu}>ℹ️ About</Link>
          <Link to="/auth" className="nav-link" onClick={closeMobileMenu}>👤 Login</Link>
        </div>

        <div className="nav-actions">
          <div className="search-wrapper desktop-search" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="search-box">
              <input
                type="text"
                placeholder="🔍 Search games..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchQuery && setIsSearchOpen(true)}
                className="search-input"
                autoComplete="off"
              />
              {searchQuery && (
                <button type="button" className="search-clear visible" onClick={clearSearch}>
                  <FaTimesCircle />
                </button>
              )}
              <button type="submit" className="search-btn">
                <FaSearch />
              </button>
            </form>

            {isSearchOpen && searchResults.length > 0 && (
              <div className="search-results-dropdown">
                <div className="search-results-header">
                  <span>🎮 {searchResults.length} found</span>
                  <button onClick={clearSearch} className="close-results">
                    <FaTimes />
                  </button>
                </div>
                {searchResults.slice(0, 8).map((game) => (
                  <Link
                    to={`/game/${game.id}`}
                    key={game.id}
                    className="search-result-item"
                    onClick={() => { clearSearch(); closeMobileMenu(); }}
                  >
                    <img src={game.image} alt={game.title} />
                    <div className="search-result-info">
                      <h4>{game.title}</h4>
                      <span>{game.category}</span>
                    </div>
                    <span className="search-result-rating">⭐ {game.rating}</span>
                  </Link>
                ))}
                {searchResults.length > 8 && (
                  <Link to={`/games?search=${searchQuery}`} className="search-view-all" onClick={() => { clearSearch(); closeMobileMenu(); }}>
                    View all {searchResults.length} results →
                  </Link>
                )}
              </div>
            )}
          </div>

          <button className="mobile-search-btn" onClick={openMobileSearch} aria-label="Search">
            <FaSearch />
          </button>

          {isMobileSearchOpen && (
            <div className="mobile-search-fullscreen">
              <div className="mobile-search-header">
                <button className="mobile-search-back" onClick={closeMobileSearch}>
                  <FaArrowLeft />
                </button>
                <form onSubmit={handleSearchSubmit} className="mobile-search-form">
                  <input
                    ref={mobileSearchRef}
                    type="text"
                    placeholder="Search games..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="mobile-search-input"
                    autoComplete="off"
                  />
                  {searchQuery && (
                    <button type="button" className="mobile-search-clear" onClick={clearSearch}>
                      <FaTimesCircle />
                    </button>
                  )}
                  <button type="submit" className="mobile-search-submit">
                    <FaSearch />
                  </button>
                </form>
              </div>
              <div className="mobile-search-results">
                {searchQuery && searchResults.length === 0 && (
                  <div className="mobile-no-results">
                    <span className="no-results-icon">🔍</span>
                    <p>No games found for "{searchQuery}"</p>
                  </div>
                )}
                {searchResults.map((game) => (
                  <Link
                    to={`/game/${game.id}`}
                    key={game.id}
                    className="mobile-search-result-item"
                    onClick={() => { clearSearch(); closeMobileSearch(); }}
                  >
                    <img src={game.image} alt={game.title} />
                    <div className="mobile-search-result-info">
                      <h4>{game.title}</h4>
                      <span>{game.category} • ⭐ {game.rating}</span>
                    </div>
                  </Link>
                ))}
                {searchResults.length > 0 && (
                  <Link 
                    to={`/games?search=${searchQuery}`} 
                    className="mobile-search-view-all"
                    onClick={() => { closeMobileSearch(); }}
                  >
                    View all {searchResults.length} results →
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Theme Toggle */}
          {/* <ThemeToggle /> */}

          <Weather />
          
          <Link to="/auth" className="user-btn" title="Login / Register" onClick={closeMobileMenu}>
            <FaUser />
          </Link>
          
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;