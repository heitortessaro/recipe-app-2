import React from 'react';
import { useParams } from 'react-router-dom';
// import Carousel from '../components/Carousel';
import IngredientsList from '../components/IngredientsList';


export default function Recipe() {
  const params = useParams();
  console.log(params.id);
  return (
    <div className='flex flex-col min-h-full'>
      <div>imgagem comida</div>
      <div>nome + botões</div>
      <IngredientsList />
      <div>description</div>
      <div> youtube video </div>
      <div className="bg-base-300 grow py-2">
        <div className="w-5/6 sm:w-3/4 md:max-w-screen-lg mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe src="https://www.youtube.com/embed/r9jwGansp1E" allowFullScreen />
          </div>
        </div>
      </div>
      {/* <Carousel /> */}
      <div>start button</div>
    </div>
  );
}