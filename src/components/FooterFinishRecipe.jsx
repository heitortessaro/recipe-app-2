import React from "react";
import { useNavigate } from "react-router-dom";

export default function FooterFinishRecipe() {
  const navigate = useNavigate();
  return(
    <div className="fixed bottom-0 w-full bg-red-200 hover:bg-red-400 flex justify-around">
        <button
          onClick={() => navigate('/foods')}
          className='btn btn-ghost w-full md:text-lg '
        >
          Finish
        </button>
    </div>
  );
};