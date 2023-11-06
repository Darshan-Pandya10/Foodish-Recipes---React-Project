import React, { useState, useRef, useEffect, createContext } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import FilterMenu from './FilterMenu';
export const RecipeContext = createContext(null);


function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [filterValue , setFilterValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchPerformed , SetSearchPerformed] = useState(false);
  const isMounted = useRef(false);
  const api_id = '50c0683d';
  const api_key = 'cbbd8bf8c49fc90fca3e05462a8d77f4';
  const validInput = searchQuery.toLowerCase()
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${validInput}&app_id=${api_id}&app_key=${api_key}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };

  const fetchData = async () => {
    setLoading(true)
    SetSearchPerformed(true)

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setRecipes(result);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  function cleanUpFunc() {
    setSearchQuery(''),
    SetSearchPerformed(true)
  }


  useEffect(() => {
   if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if(searchQuery){
        fetchData();
    }
    return cleanUpFunc();
  }, [searchQuery]);

  const handleSearch = (searchIngredient) => {
    setSearchQuery(searchIngredient);
  };

  const handleFilter = (selectedValue) => {
    setFilterValue(selectedValue)
  }


  return (
    <RecipeContext.Provider value={{recipes}}>
    <div className='home w-screen'>

      <SearchBar 
      handleSearch={handleSearch} 
      />

      <FilterMenu 
      handleFilter={handleFilter} 
      />

      <RecipeList 
      filterValue={filterValue} 
      loading={loading}
      searchPerformed={searchPerformed}
      />

    </div>
    </RecipeContext.Provider>
  );
}

export default Home;
