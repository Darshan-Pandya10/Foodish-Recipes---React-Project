import React, { useState , useContext } from 'react';
import LightHeroImage from '../assets/Images/LightHeroImage.jpeg';
import DarkHeroImage from '../assets/Images/DarkHeroImage.jpeg';
import { ThemeContext } from '../App';
import { BiSolidSearch } from 'react-icons/bi';
import '../App.css'

function SearchBar({ handleSearch }) {
  const themeData = useContext(ThemeContext);
  const { theme, toggleTheme } = themeData;
  const [ingredient, setIngredient] = useState('');

  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(ingredient);
    setIngredient('');
  };

  // hero image background

  const lightThemeBg = {
    backgroundImage: `url(${LightHeroImage})`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    opacity: `${0.85}`,
  };

  const darkThemeBg = {
    backgroundImage: `url(${DarkHeroImage})`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    opacity: `${0.85}`,
  };

  return (
   <div
        className="search-bar flex flex-col items-center mx-auto mb-12"
        style={theme === 'light' ? lightThemeBg : darkThemeBg}
      >
        <div className="intro text-center m-4">
          <h1 className="heading-intro">"Hey there! Feeling hungry?</h1>
          <h3 className="sub-heading"> You've come to the right place!</h3>
        </div>
      <form className="flex items-center justify-between my-o mx-auto bg-white pl-2 pr-0 py-o" onSubmit={handleSubmit}>
        <input
          className="p-2 bg-white text-[1.2rem] tracking-widest cursor-pointer"
          type="text"
          placeholder="Search by ingredient(s)"
          value={ingredient}
          onChange={handleInputChange}
        />
        <button 
        className="search-btn p-4 border-none outline-none curson-pointer"
        type="submit">
        <BiSolidSearch size={26} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
