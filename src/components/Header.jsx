import React from "react";
import { useNavigate } from "react-router-dom";
import profileIcon from '../images/profileIcon.svg'
import searchIcon from '../images/searchIcon.svg'

export default function Header({ enableSearch, title }) {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-orange-200">
      <div className="w-full md:max-w-screen-md mx-auto flex justify-around">
      <button
        onClick={() => navigate('/profile')}
        className='text-align-center p-2 btn btn-ghost hover:bg-primary '
      >
        <img src={profileIcon} alt="Profile" />
      </button>
      <h1 className="inline-block text-4xl" >{title}</h1>
      {enableSearch && (
        <button
          onClick={() => navigate('/profile')}
          className='text-align-center p-2 btn btn-ghost hover:bg-primary '
        >
          <img src={searchIcon} alt="Search" />
        </button>
      )}
      </div>
    </div>
  )
};