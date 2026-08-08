import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({ city: 'Loading...' });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Get user's location and weather
    const getWeather = () => {
      // Try to get user's location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // Use free weather API without key (limited)
            fetchWeatherData(latitude, longitude);
          },
          () => {
            // If location denied, use mock data
            setWeather({
              temp: 28,
              description: 'Mostly cloudy',
              icon: '☁️'
            });
            setLocation({ city: 'Your City' });
            setLoading(false);
          }
        );
      } else {
        // Fallback mock data
        setWeather({
          temp: 28,
          description: 'Mostly cloudy',
          icon: '☁️'
        });
        setLocation({ city: 'Your City' });
        setLoading(false);
      }
    };

    const fetchWeatherData = async (lat, lon) => {
      try {
        // Using free weather API - Open-Meteo (no API key required)
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
        );
        const data = await response.json();
        
        if (data.current_weather) {
          const temp = Math.round(data.current_weather.temperature);
          const weatherCode = data.current_weather.weathercode;
          
          // Map weather codes to descriptions
          const weatherMap = {
            0: { desc: 'Clear sky', icon: '☀️' },
            1: { desc: 'Mainly clear', icon: '🌤️' },
            2: { desc: 'Partly cloudy', icon: '⛅' },
            3: { desc: 'Overcast', icon: '☁️' },
            45: { desc: 'Foggy', icon: '🌫️' },
            48: { desc: 'Foggy', icon: '🌫️' },
            51: { desc: 'Light drizzle', icon: '🌧️' },
            53: { desc: 'Moderate drizzle', icon: '🌧️' },
            55: { desc: 'Heavy drizzle', icon: '🌧️' },
            61: { desc: 'Light rain', icon: '🌧️' },
            63: { desc: 'Moderate rain', icon: '🌧️' },
            65: { desc: 'Heavy rain', icon: '🌧️' },
            71: { desc: 'Light snow', icon: '❄️' },
            73: { desc: 'Moderate snow', icon: '❄️' },
            75: { desc: 'Heavy snow', icon: '❄️' },
            80: { desc: 'Rain showers', icon: '🌧️' },
            81: { desc: 'Rain showers', icon: '🌧️' },
            82: { desc: 'Heavy rain showers', icon: '🌧️' },
            95: { desc: 'Thunderstorm', icon: '⛈️' },
          };
          
          const weatherInfo = weatherMap[weatherCode] || { desc: 'Cloudy', icon: '☁️' };
          
          setWeather({
            temp: temp,
            description: weatherInfo.desc,
            icon: weatherInfo.icon
          });
          setLocation({ city: 'Your City' });
          setLoading(false);
        }
      } catch (error) {
        // Fallback to mock data
        setWeather({
          temp: 28,
          description: 'Mostly cloudy',
          icon: '☁️'
        });
        setLocation({ city: 'Your City' });
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  if (loading) {
    return (
      <div className="weather-widget loading">
        <div className="weather-loader"></div>
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <div className="weather-content">
        <div className="weather-icon">
          {weather?.icon || '☁️'}
        </div>
        <div className="weather-info">
          <div className="weather-temp">
            {weather?.temp || 28}°C
          </div>
          <div className="weather-desc">
            {weather?.description || 'Mostly cloudy'}
          </div>
        </div>
        <div className="weather-divider"></div>
        <div className="weather-details">
          <span className="weather-location">
            📍 {location.city}
          </span>
          <span className="weather-time">
            {currentTime.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit'
            })}
          </span>
          <span className="weather-date">
            {currentTime.toLocaleDateString('en-US', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Weather;