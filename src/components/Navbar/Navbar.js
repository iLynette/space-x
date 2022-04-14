import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logoBW.png';
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

const Navbar = () => (
  <nav className={styles.container}>
    <ul className={styles.list}>
      <li className={styles.topic}>
        <img src={logo} className={styles.logo} alt="travelers site logo" />
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
export default Navbar;
