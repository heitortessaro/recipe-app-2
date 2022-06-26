import React from 'react';
import { useParams } from 'react-router-dom';
// import Carousel from '../components/Carousel';
import IngredientsList from '../components/IngredientsList';
import Video from '../components/Video';


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
      <Video URL="https://www.youtube.com/embed/r9jwGansp1E" />
      {/* <Carousel /> */}
      <div>start button</div>
    </div>
  );
}