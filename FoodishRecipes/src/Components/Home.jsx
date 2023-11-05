import React, { useState, useRef, useEffect, createContext } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
export const RecipeContext = createContext(null);


function Home() {
  const [searchQuery, setSearchQuery] = useState(''); // State to control fetch request
  const [recipes, setRecipes] = useState([]);
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
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
    //   console.log(result);
      setRecipes(result);
    } catch (error) {
      console.error(error);
    }
    finally{

    }
  };

  function cleanUpFunc() {
    setSearchQuery(''), setSearchQuery('');
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
    // Update the searchQuery state to trigger the fetch in useEffect
    setSearchQuery(searchIngredient);
  };


  return (
    <RecipeContext.Provider value={{recipes}}>
    <div className='home w-screen'>
      <SearchBar onSearch={handleSearch} />
      <RecipeList />
    </div>
    </RecipeContext.Provider>
  );
}

export default Home;
