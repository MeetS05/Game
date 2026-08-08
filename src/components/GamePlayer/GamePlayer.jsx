import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaExpand, FaCompress, FaTimes, FaArrowLeft, FaHome } from 'react-icons/fa';
import './GamePlayer.css';

const GamePlayer = ({ game, onClose }) => {
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef(null);
  const containerRef = useRef(null);

  console.log('🎮 GamePlayer received game:', game);

  // ===== HOOKS =====
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && !isFullscreen) {
        console.log('🔴 ESC pressed, closing player');
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isFullscreen, onClose]);

  // ===== WORKING GAME URLs (ALTERNATIVE SOURCES) =====
  const getGameUrl = useCallback(() => {
    if (!game) {
      return 'https://www.gameflare.com/embed/game-1/';
    }

    const gameTitle = game.title?.toLowerCase().trim();

    // ===== SOURCE 1: GameFlare (Most Reliable) =====
    const gameflareUrls = {
      'subway surfers': 'https://www.gameflare.com/embed/subway-surfers/',
      'temple run 2': 'https://www.gameflare.com/embed/temple-run-2/',
      'among us': 'https://www.gameflare.com/embed/among-us/',
      'candy crush': 'https://www.gameflare.com/embed/candy-crush/',
      'minecraft': 'https://www.gameflare.com/embed/minecraft/',
      'fortnite': 'https://www.gameflare.com/embed/fortnite/',
      'clash of clans': 'https://www.gameflare.com/embed/clash-of-clans/',
      'pubg mobile': 'https://www.gameflare.com/embed/pubg/',
      'fruit ninja': 'https://www.gameflare.com/embed/fruit-ninja/',
      'angry birds': 'https://www.gameflare.com/embed/angry-birds/',
      'doodle jump': 'https://www.gameflare.com/embed/doodle-jump/',
      'pac man': 'https://www.gameflare.com/embed/pac-man/',
      'tetris': 'https://www.gameflare.com/embed/tetris/',
      'snake game': 'https://www.gameflare.com/embed/snake-game/',
      'chess': 'https://www.gameflare.com/embed/chess/',
      '2048': 'https://www.gameflare.com/embed/2048/',
      'sudoku': 'https://www.gameflare.com/embed/sudoku/',
      'solitaire': 'https://www.gameflare.com/embed/solitaire/',
      'zombie survival': 'https://www.gameflare.com/embed/zombie-survival/',
      'stickman fighter': 'https://www.gameflare.com/embed/stickman-fighter/',
      'ninja warrior': 'https://www.gameflare.com/embed/ninja-warrior/',
      'shadow fight': 'https://www.gameflare.com/embed/shadow-fight/',
      'sword master': 'https://www.gameflare.com/embed/sword-master/',
      'dragon quest': 'https://www.gameflare.com/embed/dragon-quest/',
      'gun game': 'https://www.gameflare.com/embed/gun-game/',
      'tower defense': 'https://www.gameflare.com/embed/tower-defense/',
      'battle arena': 'https://www.gameflare.com/embed/battle-arena/',
      'plants vs zombies': 'https://www.gameflare.com/embed/plants-vs-zombies/',
      'monster war': 'https://www.gameflare.com/embed/monster-war/',
      'robot war': 'https://www.gameflare.com/embed/robot-war/',
      'tank battle': 'https://www.gameflare.com/embed/tank-battle/',
      'warship': 'https://www.gameflare.com/embed/warship/',
      'crossword': 'https://www.gameflare.com/embed/crossword/',
      'jigsaw puzzle': 'https://www.gameflare.com/embed/jigsaw-puzzle/',
      'memory game': 'https://www.gameflare.com/embed/memory-game/',
      'bubble shooter': 'https://www.gameflare.com/embed/bubble-shooter/',
      'mahjong': 'https://www.gameflare.com/embed/mahjong/',
      'call of duty': 'https://www.gameflare.com/embed/call-of-duty/',
      'free fire': 'https://www.gameflare.com/embed/free-fire/',
      'sniper strike': 'https://www.gameflare.com/embed/sniper-strike/',
      'space shooter': 'https://www.gameflare.com/embed/space-shooter/',
      'zombie shooter': 'https://www.gameflare.com/embed/zombie-shooter/',
      'tank shooting': 'https://www.gameflare.com/embed/tank-shooting/',
      'space invaders': 'https://www.gameflare.com/embed/space-invaders/',
      'roblox': 'https://www.gameflare.com/embed/roblox/',
      'genshin impact': 'https://www.gameflare.com/embed/genshin-impact/',
      'forest adventure': 'https://www.gameflare.com/embed/forest-adventure/',
      'pirate quest': 'https://www.gameflare.com/embed/pirate-quest/',
      'jungle explorer': 'https://www.gameflare.com/embed/jungle-explorer/',
      'underwater world': 'https://www.gameflare.com/embed/underwater-world/',
      'desert survival': 'https://www.gameflare.com/embed/desert-survival/',
      'mystery island': 'https://www.gameflare.com/embed/mystery-island/',
      'street racing': 'https://www.gameflare.com/embed/street-racing/',
      'drift racing': 'https://www.gameflare.com/embed/drift-racing/',
      'moto racing': 'https://www.gameflare.com/embed/moto-racing/',
      'car racing': 'https://www.gameflare.com/embed/car-racing/',
      'bmx racing': 'https://www.gameflare.com/embed/bmx-racing/',
      'monster truck': 'https://www.gameflare.com/embed/monster-truck/',
      'jeep racing': 'https://www.gameflare.com/embed/jeep-racing/',
      'boat racing': 'https://www.gameflare.com/embed/boat-racing/',
      'snowboard': 'https://www.gameflare.com/embed/snowboard/',
      'skateboard': 'https://www.gameflare.com/embed/skateboard/',
      'soccer star': 'https://www.gameflare.com/embed/soccer-star/',
      'basketball': 'https://www.gameflare.com/embed/basketball/',
      'baseball': 'https://www.gameflare.com/embed/baseball/',
      'tennis': 'https://www.gameflare.com/embed/tennis/',
      'cricket': 'https://www.gameflare.com/embed/cricket/',
      'golf': 'https://www.gameflare.com/embed/golf/',
      'bowling': 'https://www.gameflare.com/embed/bowling/',
      'boxing': 'https://www.gameflare.com/embed/boxing/',
      'ice hockey': 'https://www.gameflare.com/embed/ice-hockey/',
      'rugby': 'https://www.gameflare.com/embed/rugby/',
      'flappy bird': 'https://www.gameflare.com/embed/flappy-bird/',
      'breakout': 'https://www.gameflare.com/embed/breakout/',
      'pinball': 'https://www.gameflare.com/embed/pinball/',
      'galaga': 'https://www.gameflare.com/embed/galaga/',
    };

    // Try GameFlare first
    let url = gameflareUrls[gameTitle];
    if (url) {
      console.log('✅ Using GameFlare URL:', url);
      return url;
    }

    // Try embedUrl
    if (game.embedUrl) {
      console.log('✅ Using embedUrl:', game.embedUrl);
      return game.embedUrl;
    }

    // Try gameUrl
    if (game.gameUrl) {
      console.log('✅ Using gameUrl:', game.gameUrl);
      return game.gameUrl;
    }

    // Final fallback
    const fallback = `https://www.gameflare.com/embed/${gameTitle}/`;
    console.log('⚠️ Using fallback URL:', fallback);
    return fallback;
  }, [game]);

  const gameUrl = getGameUrl();

  // ===== If no game =====
  if (!game) {
    console.log('❌ No game provided to GamePlayer');
    return null;
  }

  // ===== Toggle Fullscreen =====
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // ===== Iframe Handlers =====
  const handleIframeLoad = () => {
    console.log('✅ Game loaded successfully');
    setIsLoading(false);
    setLoadError(false);
  };

  const handleIframeError = () => {
    console.log('❌ Game load error');
    setLoadError(true);
    setIsLoading(false);
  };

  // ===== Retry Loading =====
  const retryLoad = () => {
    console.log('🔄 Retrying load...');
    setIsLoading(true);
    setLoadError(false);
    setIframeKey(prev => prev + 1);
  };

  // ===== 🏠 GO TO HOME =====
  const goToHome = () => {
    console.log('🏠 Going to Home');
    document.body.style.overflow = 'unset';
    navigate('/');
  };

  // ===== 🔴 Close Handler =====
  const handleClose = () => {
    console.log('🔴 Close button clicked');
    onClose();
  };

  return (
    <div className={`game-player-overlay ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="game-player-container" ref={containerRef}>
        {/* ===== HEADER ===== */}
        <div className="game-player-header">
          <div className="game-player-title">
            <button className="back-btn" onClick={onClose} title="Go Back">
              <FaArrowLeft />
            </button>
            <div className="game-info">
              <span className="game-icon">🎮</span>
              <h2>{game.title}</h2>
              <span className="game-badge">{game.category}</span>
            </div>
          </div>

          <div className="game-player-controls">
            <button className="control-btn home-btn" onClick={goToHome} title="Go to Home">
              <FaHome />
            </button>
            <button className="control-btn" onClick={toggleFullscreen} title="Fullscreen">
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
            <button className="control-btn close-btn" onClick={handleClose} title="Close">
              <FaTimes />
            </button>
          </div>
        </div>

        {/* ===== GAME AREA ===== */}
        <div className="game-player-body">
          {/* Loading Screen */}
          {isLoading && !loadError && (
            <div className="game-loading">
              <div className="loading-spinner"></div>
              <p>Loading {game.title}...</p>
              <div className="loading-progress">
                <div className="progress-bar"></div>
              </div>
            </div>
          )}

          {/* Error Screen */}
          {loadError && (
            <div className="game-error">
              <span className="error-icon">😅</span>
              <h3>Oops! Game not loading</h3>
              <p>Don't worry, we're trying to fix it.</p>
              <button className="reload-btn" onClick={retryLoad}>
                <FaPlay /> Try Again
              </button>
              <button className="close-error-btn" onClick={onClose}>
                Close
              </button>
            </div>
          )}

          {/* Game Iframe */}
          <iframe
            key={iframeKey}
            ref={iframeRef}
            src={gameUrl}
            className="game-iframe"
            allowFullScreen
            title={game.title}
            frameBorder="0"
            scrolling="no"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ display: (isLoading || loadError) ? 'none' : 'block' }}
            allow="autoplay; fullscreen; gamepad; microphone; camera;"
            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          ></iframe>

          {/* Play Overlay */}
          {isLoading && !loadError && (
            <div className="play-overlay">
              <button className="play-overlay-btn" onClick={() => {
                console.log('▶️ Play Now clicked');
                setIsLoading(false);
                if (iframeRef.current) {
                  iframeRef.current.src = gameUrl;
                }
              }}>
                <FaPlay className="play-icon" />
                <span>Play Now</span>
                <small>Click to start playing</small>
              </button>
            </div>
          )}
        </div>

        {/* ===== FOOTER ===== */}
        <div className="game-player-footer">
          <div className="game-stats">
            <span>⭐ {game.rating} Rating</span>
            <span>🎯 {game.plays} Plays</span>
            <span>📂 {game.category}</span>
          </div>
          <div className="game-actions">
            <button className="action-btn" onClick={() => window.open(gameUrl, '_blank')}>
              <FaExpand /> Full Screen
            </button>
            <button className="action-btn share-btn" onClick={() => {
              if (navigator.share) {
                navigator.share({ title: game.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }
            }}>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;