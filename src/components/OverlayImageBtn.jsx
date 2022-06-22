import React from "react";
import { useNavigate } from "react-router-dom";

export default function OverlayImageBtn({ img, destiny, name }) {
  const navigate = useNavigate();
  return (
    <div 
      className="card m-4 w-60 lg:w-80 bg-base-100 shadow-xl cursor-pointer transform transition duration-200 hover:scale-110"
      onClick={() => navigate(destiny)}
    >
      <figure><img src={img} alt={name} /></figure>
      <div className="card-body p-2 w-full">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  )
}