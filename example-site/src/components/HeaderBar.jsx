import Container from 'react-bootstrap/Container';

import { Component, useEffect, useState } from 'react';
import { BrowserRouter,NavLink, Routes, Route, Link} from 'react-router-dom';
import './HeaderBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';
import Navigation from "react-sticky-nav";




function HeaderBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const MenuBar = [
    {Name:"Home",LinkTo:"/"},
    {Name:"About",LinkTo:"/about"},
    {Name:"Contact",LinkTo:"/contact"},
  ]
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > 3){
        setVisible(false)
    }else{
        setVisible(true)
    }

    // setPrevScrollPos(currentScrollPos)
  }
  useEffect( () => {
    console.log(visible)
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <Navigation className={`Navigation ${visible ? 'Nav-up ' : 'Nav-down'} `}>
      <div className='logo'>
        <Link to="/">Ryojun</Link>
      </div>
      <nav className='nav'>
        <FontAwesomeIcon className='fa-bars' icon={faBars} aria-hidden="true" onClick={() => setIsExpanded(!isExpanded)} />
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>

          
          {
            MenuBar.map((item)=>{
              return <NavLink to={item.LinkTo} key={uuidv4()}><li>{item.Name}</li></NavLink>
            })
          }


        </ul>
      </nav>
      
    </Navigation>
  );
}

export default HeaderBar;