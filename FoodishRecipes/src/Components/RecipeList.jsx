import React, { useContext } from 'react'
import { RecipeContext } from './Home'
import RecipeCard from './RecipeCard'

function RecipeList() {
    const recipeData = useContext(RecipeContext)
    const recipes = recipeData.recipes.hits
    
  return (
      <div className="recipe-list  w-[85vw] flex flex-wrap items-center justify-around h-auto my-8 mx-auto pt-4">
      {recipes 
      ? 
      (recipes.map((recipeObj) => {
        return <RecipeCard recipeObj={recipeObj}/>
      })) 
      : 
      (
        <div className='recipe-list'>
            <h3>Search For Recipes</h3>
        </div>
      )      
      }
    </div>
  )
    }


export default RecipeList
