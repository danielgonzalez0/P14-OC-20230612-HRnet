import React from 'react';
import backgroundImage from './background.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main className="home-page">
      <div className="background">
        <img src={backgroundImage} alt="plant" />
      </div>
      <div className="home-content">
        <h1>Welcome to HRnet</h1>
        <h2>
          <span> Your portal</span>
          <span>to manage employees list</span>
        </h2>
        <p>Please select an action:</p>
        <ul className="btn-container">
          <NavLink to="/add">
            <li className="btn">Add employee</li>
          </NavLink>
          <NavLink to="/list">
            <li className="btn">View employees</li>
          </NavLink>
        </ul>
      </div>
    </main>
  );
};

export default Home;
