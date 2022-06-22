import React from "react";

export default function CardShelf({children}) {
  // {id, imageSrc, title, index, type}
  return(
    <div className='w-11/12 mx-auto md:w-10/12 py-2 md:py-2'>       
        <div className='flex flex-wrap justify-evenly'>
          {children}
        </div>
      </div>
  )
}