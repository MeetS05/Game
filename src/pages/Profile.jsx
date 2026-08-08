import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaGamepad, FaHeart, FaHistory, FaCog, FaArrowLeft } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const user = {
    name: 'Gamer Pro',
    email: 'gamer@example.com',
    joinDate: 'Jan 2024',
    totalGames: 42,
    favorites: 12,
    level: 7,
    xp: 2480
  };

  return (
    <div className="profile-page">
      <div className="container-fluid">
        <div className="profile-wrapper">
          {/* Back Button */}
          <Link to="/" className="profile-back">
            <FaArrowLeft /> Back to Home
          </Link>

          <div className="profile-header">
            <div className="profile-avatar">
              <div className="avatar-circle">
                <FaUser />
              </div>
              <div className="profile-status">
                <h2>{user.name}</h2>
                <p>🎮 Gamer since {user.joinDate}</p>
              </div>
            </div>
            <div className="profile-stats-mini">
              <div className="stat-mini">
                <span className="stat-value">{user.totalGames}</span>
                <span className="stat-label">Games Played</span>
              </div>
              <div className="stat-mini">
                <span className="stat-value">{user.favorites}</span>
                <span className="stat-label">Favorites</span>
              </div>
              <div className="stat-mini">
                <span className="stat-value">Lv.{user.level}</span>
                <span className="stat-label">{user.xp} XP</span>
              </div>
            </div>
          </div>

          <div className="profile-tabs">
            <button 
              className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <FaUser /> Profile
            </button>
            <button 
              className={`tab-btn ${activeTab === 'games' ? 'active' : ''}`}
              onClick={() => setActiveTab('games')}
            >
              <FaGamepad /> Games
            </button>
            <button 
              className={`tab-btn ${activeTab === 'favorites' ? 'active' : ''}`}
              onClick={() => setActiveTab('favorites')}
            >
              <FaHeart /> Favorites
            </button>
            <button 
              className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              <FaHistory /> History
            </button>
            <button 
              className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <FaCog /> Settings
            </button>
          </div>

          <div className="profile-content">
            {activeTab === 'profile' && (
              <div className="profile-details">
                <div className="detail-item">
                  <label>Full Name</label>
                  <p>{user.name}</p>
                </div>
                <div className="detail-item">
                  <label>Email</label>
                  <p>{user.email}</p>
                </div>
                <div className="detail-item">
                  <label>Member Since</label>
                  <p>{user.joinDate}</p>
                </div>
                <div className="detail-item">
                  <label>Total Games Played</label>
                  <p>{user.totalGames}</p>
                </div>
                <div className="detail-item">
                  <label>Favorites</label>
                  <p>{user.favorites}</p>
                </div>
                <div className="detail-item">
                  <label>Level</label>
                  <p>{user.level}</p>
                </div>
              </div>
            )}
            
            {activeTab === 'games' && (
              <div className="games-history">
                <div className="game-history-item">
                  <div className="game-history-icon">🎮</div>
                  <div className="game-history-info">
                    <h4>Subway Surfers</h4>
                    <span>Played 2 hours ago</span>
                  </div>
                  <span className="game-history-time">2h</span>
                </div>
                <div className="game-history-item">
                  <div className="game-history-icon">⚔️</div>
                  <div className="game-history-info">
                    <h4>Among Us</h4>
                    <span>Played yesterday</span>
                  </div>
                  <span className="game-history-time">1d</span>
                </div>
                <div className="game-history-item">
                  <div className="game-history-icon">🧩</div>
                  <div className="game-history-info">
                    <h4>Candy Crush</h4>
                    <span>Played 3 days ago</span>
                  </div>
                  <span className="game-history-time">3d</span>
                </div>
                <div className="game-history-item">
                  <div className="game-history-icon">🏎️</div>
                  <div className="game-history-info">
                    <h4>PUBG Mobile</h4>
                    <span>Played 5 days ago</span>
                  </div>
                  <span className="game-history-time">5d</span>
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="favorites-empty-state">
                <span className="empty-icon">❤️</span>
                <h4>No Favorites Yet</h4>
                <p>Start adding games to your favorites!</p>
                <Link to="/games" className="btn-primary">Browse Games</Link>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="games-history">
                <div className="game-history-item">
                  <div className="game-history-icon">🎮</div>
                  <div className="game-history-info">
                    <h4>Minecraft</h4>
                    <span>Played 1 week ago</span>
                  </div>
                  <span className="game-history-time">1w</span>
                </div>
                <div className="game-history-item">
                  <div className="game-history-icon">⚔️</div>
                  <div className="game-history-info">
                    <h4>Fortnite</h4>
                    <span>Played 2 weeks ago</span>
                  </div>
                  <span className="game-history-time">2w</span>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="settings-options">
                <div className="setting-item">
                  <label>Dark Mode</label>
                  <div className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
                <div className="setting-item">
                  <label>Email Notifications</label>
                  <div className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
                <div className="setting-item">
                  <label>Game Updates</label>
                  <div className="toggle-switch">
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
                <button className="logout-btn">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;