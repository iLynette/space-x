import React from 'react';
import { NavLink } from 'react-router-dom';

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
  <nav>
    <ul>
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
