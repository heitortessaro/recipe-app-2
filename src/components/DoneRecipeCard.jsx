import React from "react";
import shareIcon from '../images/shareIcon.svg'
// import { useNavigate } from "react-router-dom";

export default function DoneRecipeCard() {
  // {id, imageSrc, title, index, type}
  const teste = '21/03/48';
  // const navigate = useNavigate();
  return (
    <div
      className="card card-side m-2 w-60 bg-base-100 shadow-xl transform transition duration-200 hover:scale-110"
    >
      <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">New movie is released!</h2>
        <p>{`Done in: ${teste}`}</p>
        <div class="card-actions justify-end">
          <button
            onClick={() => console.log('share')}
            className='btn btn-ghost hover:bg-secondary w-20 '
          >
            <img src={shareIcon} alt="Profile" />
          </button>
        </div>
      </div>
    </div>
  )
}