import React from "react";

export default function Video({ URL }) {
  // {id, imageSrc, title, index, type}
  return (
    <div className="bg-base-300 grow py-2">
      <div className="w-5/6 sm:w-3/4 md:max-w-screen-lg mx-auto">
        <div className="aspect-w-16 aspect-h-9">
          <iframe src={URL} allowFullScreen />
        </div>
      </div>
    </div>
  )
}