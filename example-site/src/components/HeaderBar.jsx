import Container from 'react-bootstrap/Container';

import { Component, useEffect, useState } from 'react';
import { BrowserRouter,NavLink, Routes, Route, Link} from 'react-router-dom';
import './HeaderBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function HeaderBar() {
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <div className='Navigation'>
      <div className='logo'>
        <Link to="/">Ryojun</Link>
      </div>
      <nav className='nav'>
        <FontAwesomeIcon className='fa-bars' icon={faBars} aria-hidden="true" onClick={() => setIsExpanded(!isExpanded)} />
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink exact activeClassName="active" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            <li>About</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
      
    </div>
  );
}

export default HeaderBar;