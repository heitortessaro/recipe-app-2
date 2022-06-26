import React from "react";
import { useNavigate } from "react-router-dom";
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';

export default function FooterStartRecipe() {
  const navigate = useNavigate();
  return(
    <div className="fixed bottom-0 w-full bg-orange-200 hover:bg-orange-300 flex justify-around">
        <button
          onClick={() => navigate('/foods')}
          className='btn btn-ghost w-full '
        >
          Start Recipe
        </button>
    </div>
  );
};