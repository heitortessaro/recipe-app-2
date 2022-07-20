import React from "react";

export default function Loading() {
  return (
      <div className="bg-base-300 grow text-center flex justify-center items-center">
        <span className="text-xl"> 
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    
  </svg>
          Loading... 
        </span>
      </div>
  )
}