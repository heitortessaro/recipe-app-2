import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({id, imageSrc, title, type}) {
  const navigate = useNavigate();
  return(
    <div 
      className="card m-2 w-60 bg-base-100 shadow-xl cursor-pointer transform transition duration-200 hover:scale-105"
      onClick={() => navigate(`/${type}/${id}`)}
    >
      <figure><img src={imageSrc} alt={title} /></figure>
      <div className="card-body p-3 w-full">
        <p className="text-center text-xl font-semibold capitalize">{title}</p>
      </div>
    </div>
  )
}