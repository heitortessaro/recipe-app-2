import React from "react";

export default function UsedIngredientsList() {
  const handleClick = ({target}) => {
    target.classList.toggle('line-through');
  }
  return (
    <div className="bg-base-300 grow py-2">
      <div>
        <p className="bg-orange-300 w-5/6 sm:w-3/4 md:max-w-screen-lg rounded-t-lg mx-auto p-2 pl-4 font-semibold">Click to check the used ingredient:</p>
      </div>
      <ul className="menu menu-compact bg-base-100 w-5/6 sm:w-3/4 md:max-w-screen-lg rounded-b-lg mx-auto">
        <li className="hover:bg-base-200 text-sm sm:text-base p-1 pl-4" onClick={handleClick}>Item 1</li>
        <li className="hover:bg-base-200 text-sm sm:text-base p-1 pl-4" onClick={handleClick}>Item 2</li>
        <li className="hover:bg-base-200 text-sm sm:text-base p-1 pl-4" onClick={handleClick}>Item 3</li>
      </ul>
    </div>
  )
}