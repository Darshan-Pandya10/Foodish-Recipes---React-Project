import '../App.css';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { TbFlagPin } from "react-icons/tb";

function RecipeCard({ recipe , getRecipe }) {
  const { cuisineType, image, label } = recipe;

  return (
    <div className="recipe-card p-2 min-h-[25rem] my-8 mx-5 rounded-lg">
      <img className="recipe-image" src={image} alt="recipe image" />
      <h3 className="recipe-label px-0 pt-1 pb-0 my-0 mx-2">{label}</h3>
      <p className="recipe-cuisineType p-1 capitalize flex">
        <span className='mr-1'><TbFlagPin size={26} /></span>
        {cuisineType}
      </p>
      <button
        className="card-button -mx-1 py-1 px-1 flex items-center justify-around text-base bg-transparent cursor-pointer mt-0 mb-2"
        onClick={() => {
          getRecipe(recipe);
        }}
      >
        <p className='mx-1'>Get More Info</p>
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}

export default RecipeCard;
