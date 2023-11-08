import '../App.css'
import { PiMoonStarsFill } from 'react-icons/pi';
import { RiSunFill } from 'react-icons/ri';
// import { GiSpellBook } from 'react-icons/gi';
import {PiHamburgerBold} from 'react-icons/pi';
import {LuUtensilsCrossed} from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../App';


function Header() {
    const themeData = useContext(ThemeContext);
    const {theme , toggleTheme} = themeData;

    const [isNavbarVisible , setIsNavbarVisible] = useState(false);
    function toggleNavbar() {
    setIsNavbarVisible((prevIsNavbarVisible) => !prevIsNavbarVisible);
}

  return (
    <div className="header w-screen h-24 flex justify-between items-center">
      <a href="/"><h2 className="logo flex items-center justify-around left-0">
        Foodish Recipes
        <span className="logo-icon ml-1">
          {/* <GiSpellBook /> */}
        </span>
      </h2></a>
      <button className="hamburger-btn" onClick={toggleNavbar}>
      
     {isNavbarVisible ? <LuUtensilsCrossed size={26}/> : <PiHamburgerBold size={26}/>}
      
      </button>
    
     <nav className={`flex right-0 ${isNavbarVisible ? 'show-navbar' : 'hidden'}`}>
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
  )
}

export default Header
