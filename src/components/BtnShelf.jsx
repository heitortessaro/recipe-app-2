import React from "react";

export default function BtnShelf({ children }) {
  // {id, imageSrc, title, index, type}
  return (
    <div className='w-11/12 mx-auto md:w-10/12 pt-4 pb-14 md:py-2'>
      <div className='flex flex-wrap justify-evenly'>
        {children}
      </div>
    </div>
  )
}