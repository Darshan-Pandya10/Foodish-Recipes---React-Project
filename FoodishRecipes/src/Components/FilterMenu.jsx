import React, { useState } from 'react';
import '../App.css';

const FilterMenu = ({handleFilter}) => {
  

  const [selectedValue, setSelectedValue] = useState('');
  const mealTypeArray =  
  [{value : '' , label : 'All'},
  {value : 'breakfast' , label : 'Breakfast'},
  {value : 'brunch' , label : 'Brunch'},
  {value : 'lunch/dinner' , label : 'Lunch / Dinner'},
  {value : 'teatime' , label : 'Teatime'}
]

  const handleDropdownChange = (event) => {
    handleFilter(event.target.value)
    setSelectedValue(event.target.value)
  };

  return (
    <>
      <div className="filter-menu  flex items-center justify-center w-fit mx-auto flex-wrap">
        {mealTypeArray.map((mealType) => {
          const {value , label} = mealType
          return <button className='filter-btn' onClick={handleDropdownChange} value={value}>{label}</button>
        })}
      </div>
    </>
  );
};

export default FilterMenu;
