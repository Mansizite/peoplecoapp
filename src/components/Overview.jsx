import React, { useState, useEffect } from 'react';
import './Overview.css';

export default function Overview() {
  const [userCount, setUserCount] = useState(0);

  // Counter to simulate user growth
  useEffect(() => {
    const targetCount = 5000;
    const increment = 50;
    if (userCount < targetCount) {
      const timer = setInterval(() => {
        setUserCount((prevCount) => Math.min(prevCount + increment, targetCount));
      }, 50);
      return () => clearInterval(timer);
    }
  }, [userCount]);

  return (
    <div className="overview-container">
      <header className="overview-header">
        <h1 className="overview-title">Explore Our Platform</h1>
      </header>

      <section className="overview-intro-section">
        <p className="overview-intro">
          Welcome to our platform! Join our vibrant community and discover innovative features.
        </p>
      </section>

      <section className="overview-features">
        <h2 className="features-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Intuitive Design</h3>
          </div>
          <div className="feature-card">
            <h3>Top Security</h3>
          </div>
          <div className="feature-card">
            <h3>Rich Resources</h3>
          </div>
        </div>
      </section>

      <section className="overview-counter">
        <h2>Join Us Today</h2>
        <p className="user-count">{userCount}+ users and counting!</p>
      </section>

      <section className="overview-cta">
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
}
