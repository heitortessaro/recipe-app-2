import React from "react";

export default function BtnShelf({ children }) {
  // {id, imageSrc, title, index, type}
  return (
    <div className="bg-base-300 grow">
      <div className='w-11/12 mx-auto md:w-10/12 pt-4 mb-16 md:py-2'>
        <div className='flex flex-wrap justify-evenly'>
          {children}
        </div>
      </div>
    </div>
  )
}