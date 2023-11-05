import '../App.css';
import { FaAngleDoubleRight } from 'react-icons/fa';

function RecipeCard({ recipe , getRecipe }) {
  const { cuisineType, image, label } = recipe;

  return (
    <div className="recipe-card p-2 min-h-[25rem] my-8 mx-5 rounded-lg">
      <img className="recipe-image" src={image} alt="recipe image" />
      <h3 className="recipe-label px-0 pt-1 pb-0 my-0 mx-2">{label}</h3>
      <p className="recipe-cuisineType p-2 capitalize font-bold">
        {cuisineType}
      </p>
      <button
        className="card-button mx-2 py-2 px-0 flex items-center w-32 justify-around border-2 border-solid border-transparent text-base bg-transparent cursor-pointer mt-0 mb-2  "
        onClick={() => {
          getRecipe(recipe);
        }}
      >
        <p>Get More Info</p>
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}

export default RecipeCard;
