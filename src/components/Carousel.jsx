import React from "react";

export default function Carousel() {
  const tempArray = [
    "https://api.lorem.space/image/drink?w=400&h=300&hash=A89D0DE6",
    'https://api.lorem.space/image/drink?w=400&h=300&hash=500B67FB',
    "https://api.lorem.space/image/drink?w=400&h=300&hash=8B7BCDC2",
    "https://api.lorem.space/image/drink?w=400&h=300&hash=225E6693",
    "https://api.lorem.space/image/drink?w=400&h=300&hash=9D9539E7"
  ]
  // {id, imageSrc, title, index, type}
  function nextSlide() {
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('-translate-x-full');

    let nextSlide = activeSlide.nextElementSibling;
    nextSlide.classList.remove('translate-x-full');
    nextSlide.classList.add('translate-x-0');
  }

  function previousSlide() {
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('translate-x-full');

    let previousSlide = activeSlide.previousElementSibling;
    previousSlide.classList.remove('-translate-x-full');
    previousSlide.classList.add('translate-x-0');
  }
  return (
    // <div className="bg-base-300 grow py-2">
    //   <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
    //     <div className="p-4 space-x-4 carousel carousel-center bg-neutral rounded-box mt-4">
    //       {tempArray.map((e,i) => {
    //         return(
    //           <div key={`carousel-$${i}`} className="carousel-item">
    //           <img
    //             src={e}
    //             alt="foto"
    //             width="200"
    //             className="mr-2 rounded"
    //             />
    //         </div> 
    //         )
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div class="relative">
      <div class="absolute inset-0 w-screen h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">Hello</div>
      <div class="absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">There</div>
      <div class="absolute inset-0 w-screen h-screen bg-teal-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">Booya!</div>
      <div onclick="nextSlide()" class="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black cursor-pointer">&#x276F;</div>
      <div onclick="previousSlide()" class="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black cursor-pointer">&#x276E;</div>
    </div >
  )
}