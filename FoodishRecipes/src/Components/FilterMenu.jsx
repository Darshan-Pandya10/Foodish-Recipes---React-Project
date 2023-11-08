import React, { useState } from 'react';
import '../App.css';

const FilterMenu = ({handleFilter}) => {
  

  const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownChange = (event) => {
    handleFilter(event.target.value)
    setSelectedValue(event.target.value)
  };


  return (
    <>
      <div className="filter-menu  flex items-center justify-center w-fit mx-auto flex-wrap">
        <button className='filter-btn' onClick={handleDropdownChange} value=''>All</button>
        <button className='filter-btn' onClick={handleDropdownChange} value='breakfast'>Breakfast</button>
        <button className='filter-btn' onClick={handleDropdownChange} value='brunch'>Brunch</button>
        <button className='filter-btn' onClick={handleDropdownChange} value='lunch/dinner'>Lunch / Dinner</button>
        <button className='filter-btn' onClick={handleDropdownChange} value='teatime'>Teatime</button>

      </div>
    </>
  );
};

export default FilterMenu;
