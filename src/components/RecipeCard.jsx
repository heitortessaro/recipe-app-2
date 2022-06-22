import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard() {
  // {id, imageSrc, title, index, type}
  const navigate = useNavigate();
  return(
    <div 
      class="card m-2 w-60 bg-base-100 shadow-xl cursor-pointer "
      onClick={() => navigate('/teste')}
    >
      <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
      <div class="card-body p-3 w-full">
        <p class="text-center text-xl font-semibold capitalize">Title! nove</p>
      </div>
    </div>
  )
}