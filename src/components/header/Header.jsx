import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        <NavLink to="/">
          Wealth <br /> Health
        </NavLink>
      </div>

      <div className="nav">
        <p>Employee:</p>
        <ul>
          <li>
            <NavLink
              to="/add"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              Add
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/list"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              View
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
