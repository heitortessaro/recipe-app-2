import React from "react";
import shareIcon from '../images/shareIcon.svg'
import heartIcon from '../images/whiteHeartIcon.svg'

export default function TopRecipeCard() {
  return (
    <div className='w-5/6 sm:w-3/4 md:max-w-screen-lg mx-auto my-2 md:flex'>
      <div
        style={{ backgroundImage: 'url("https://www.themealdb.com/images/media/meals/1525876468.jpg")' }}
        className="h-64 md:flex-none md:w-96 rounded-t-2xl md:rounded-none md:rounded-l-2xl flex justify-center items-center content-div bg-no-repeat bg-cover bg-center"
      />
      <div className="px-2 container mx-auto rounded-b-2xl bg-base-100 py-2 md:rounded-none md:rounded-r-2xl flex flex-col justify-center">
        <p className="text-center text-2xl font-semibold capitalize pb-2">Title! nove</p>
        <div className="card-actions flex-row justify-center">
          <button
            onClick={() => console.log('share')}
            className='btn btn-ghost hover:bg-secondary w-20 '
          >
            <img src={shareIcon} alt="Profile" />
          </button>
          <button
            onClick={() => console.log('favorite')}
            className='btn btn-ghost hover:bg-secondary w-20 '
          >
            <img src={heartIcon} alt="Profile" />
          </button>
        </div>
      </div>
    </div>
  )
};