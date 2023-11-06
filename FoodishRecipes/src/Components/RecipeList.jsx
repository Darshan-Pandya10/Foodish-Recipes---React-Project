import { useState , useContext } from 'react'
import { RecipeContext } from './Home'
import RecipeCard from './RecipeCard'
import ReactPaginate from 'react-paginate'
import RecipePopUp from './RecipePopUp'
import { v4 as uuidv4 } from 'uuid';


function RecipeList({filterValue ,loading ,searchPerformed}) {
    const recipeData = useContext(RecipeContext)
    const recipes = recipeData.recipes.hits

  // Pop Up Card logic 
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [popUpData, setPopUpData] = useState(null);

  function getRecipe(recipe) {
    setIsPopUpVisible(true);
    setPopUpData(recipe);
  }

  function closeRecipePopUp() {
    setIsPopUpVisible(false);
  }
    
  // Pagination logic
  const recipesPerPage = 6;
  const [pageNumber, setPageNumber] = useState(0);
  const pagesVisited = pageNumber * recipesPerPage;


  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Sorting logic
  if(recipes){
  const filterRecipeList = filterValue !== ''
      ? recipes.filter((recipeObj) => recipeObj.recipe.mealType[0] === filterValue)
      : recipes;
      console.log(filterRecipeList)

  const pageCount = Math.ceil(filterRecipeList.length / recipesPerPage);


  const displayRecipes = filterRecipeList.slice(
    pagesVisited,
    pagesVisited + recipesPerPage,
  );

  const recipesList =
    recipes && recipes.length !== 0 ? (
      displayRecipes.map((recipeObj) => {
        const id = uuidv4();
        const { recipe } = recipeObj;
        return (
          <RecipeCard
            recipe={recipe}
            key={id}
            id={id}
            getRecipe={getRecipe}
            closeRecipePopUp={closeRecipePopUp}
          />
        );
      })
    ) : (
      <div className="recipe-list">
        <h3 className="text-lg tracking-widest text-center text-black">
          Recipes not Found.
        </h3>
      </div>
    );

    
     if (searchPerformed && loading) {
    return <div className="recipe-list text-lg tracking-widest text-center text-black">
      <div class="loader"></div>
      </div>;
  }
    
  return (
    <div className="list-and-pagination pb-8">  
    <div className="recipe-list  w-[85vw] flex flex-wrap items-center justify-around h-auto my-8 mx-auto pt-4">
    
        {searchPerformed ? recipesList : null}


      {isPopUpVisible && (
          <RecipePopUp data={popUpData} closeRecipePopUp={closeRecipePopUp} />
        )}


    </div>
    {displayRecipes.length > 0 ? (
        <div className="pagination">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"previousBtn"}
            NextLinkClassName={"NextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      ) : null
  }
    </div>
  )
    }
  }


export default RecipeList
