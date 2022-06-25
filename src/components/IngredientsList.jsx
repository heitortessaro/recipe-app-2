import React from "react";

export default function IngredientsList() {
  // {id, imageSrc, title, index, type}
  return (
    <div className="bg-base-300 grow py-2">
      <ul className="menu menu-compact bg-base-100 w-3/4 rounded-md sm:rounded-box mx-auto">
        <li className="hover:bg-base-200 text-sm sm:text-base p-1 pl-4">Item 1</li>
        <li className="hover:bg-base-200 text-sm sm:text-base p-1 pl-4">Item 2</li>
        <li className="hover:bg-base-200 text-sm sm:text-base p-1 pl-4">Item 3</li>
      </ul>
    </div>
  )
}