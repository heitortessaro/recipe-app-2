import React from "react";
import { useNavigate } from "react-router-dom";

export default function FooterStartRecipe() {
  const navigate = useNavigate();
  return(
    <div className="fixed bottom-0 w-full bg-orange-200 hover:bg-orange-300 flex justify-around">
        <button
          onClick={() => navigate('/foods')}
          className='btn btn-ghost w-full md:text-lg '
        >
          Start Recipe
        </button>
    </div>
  );
};