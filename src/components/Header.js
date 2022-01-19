import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navigation from './Navigation';
import '../css/Header.scss';
const Header = () => {
  return (
    <header>
      <div>
        <FontAwesomeIcon icon={['fa', 'cubes']} />
        <span> Header</span>
        <NavLink to="./private/">Dashboard</NavLink>
      </div>
    </header>
  );
};
export default Header;
