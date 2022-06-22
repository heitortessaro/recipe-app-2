import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard() {
  // {id, imageSrc, title, index, type}
  const navigate = useNavigate();
  return(
    <div 
      className="card m-2 w-60 bg-base-100 shadow-xl cursor-pointer transform transition duration-200 hover:scale-110"
      onClick={() => navigate('/teste')}
    >
      <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
      <div className="card-body p-3 w-full">
        <p className="text-center text-xl font-semibold capitalize">Title! nove</p>
      </div>
    </div>
  )
}