import React, { useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { ThemeContext } from '../App';
import { PiMoonStarsFill } from 'react-icons/pi';
import { RiSunFill } from 'react-icons/ri';
import { PiHamburgerBold } from 'react-icons/pi';
import { LuUtensilsCrossed } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

function Header() {
  const themeData = useContext(ThemeContext);
  const { theme, toggleTheme } = themeData;

  return (
    <div className="header w-screen h-24 flex justify-between items-center">
      <a href="/">
        <h2 className="logo flex items-center justify-around left-0">
          Foodish Recipes
          <span className="logo-icon ml-1"></span>
        </h2>
      </a>
     
        <nav className='flex right-0'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          {theme === 'light' ? (
            <button onClick={toggleTheme}>
              <RiSunFill />
            </button>
          ) : (
            <button onClick={toggleTheme}>
              <PiMoonStarsFill />
            </button>
          )}
        </nav>
    </div>
  );
}

export default Header;
