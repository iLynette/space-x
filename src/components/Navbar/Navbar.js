import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoBW from '../../images/logoBW.png';
import logoCL from '../../images/logoCLB.png';
import styles from './Navbar.module.css';

const link = [
  {
    id: 1,
    path: '/',
    text: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
  },
  {
    id: 3,
    path: '/dragons',
    text: 'Dragons',
  },
  {
    id: 4,
    path: '/profile',
    text: 'MyProfile',
  },
];

const Navbar = () => {
  const [colored, setColored] = useState(false);
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.topic}>
          <img
            src={colored ? logoCL : logoBW}
            className={styles.logo}
            alt="travelers site logo"
            onMouseOver={() => setColored(!colored)}
            onMouseOut={() => setColored(!colored)}
            onFocus={() => 0}
            onBlur={() => 0}
          />
          <h1 style={{ fontSize: '2.1rem' }}>SPACE X</h1>
        </li>
        {link.map(({ id, path, text }) => (
          <li key={id}>
            <NavLink
              to={path}
              className="nav-link"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
                color: '#0079f9',
              })}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
