import React from "react";
import { useNavigate } from "react-router-dom";
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';

export default function FooterMenu() {
  const navigate = useNavigate();
  return(
    <div className="fixed bottom-0 w-full bg-orange-200">
      <div className="w-full md:max-w-screen-md mx-auto flex justify-around">
        <button
          onClick={() => navigate('/foods')}
          className='btn btn-ghost hover:bg-secondary w-20 '
        >
          <img className="inline-block" src={mealIcon} alt="Profile" />
        </button>
        <button
          onClick={() => navigate('/explore')}
          className='btn btn-ghost hover:bg-secondary w-20 '
        >
          <img src={exploreIcon} alt="Profile" />
        </button>
        <button
          onClick={() => navigate('/drinks')}
          className='btn btn-ghost hover:bg-secondary w-20 '
        >
          <img src={drinkIcon} alt="Profile" />
        </button>        
      </div>
    </div>
  );
};