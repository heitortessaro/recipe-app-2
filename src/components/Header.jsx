import React from "react";
import { useNavigate } from "react-router-dom";
import profileIcon from '../images/profileIcon.svg'
import searchIcon from '../images/searchIcon.svg'

export default function Header({ enableSearch, title }) {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-orange-200 flex justify-center">
      <div className="w-full md:max-w-screen-lg grid grid-cols-4 place-items-center ">
        <button
          onClick={() => navigate('/profile')}
          className='p-2 btn btn-ghost hover:bg-primary w-20 '
        >
          <img src={profileIcon} alt="Profile" />
        </button>
        <h1 className="inline-block col-span-2 text-center text-3xl sm:text-4xl" >{title}</h1>
        {enableSearch && (
          <button
            onClick={() => navigate('/profile')}
            className='p-2 btn btn-ghost hover:bg-primary w-20 '
          >
            <img src={searchIcon} alt="Search" />
          </button>
        )}
      </div>
    </div>
  )
};