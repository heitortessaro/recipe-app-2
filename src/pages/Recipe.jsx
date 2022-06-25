import React from 'react';
import { useParams } from 'react-router-dom';


export default function Recipe() {
  const params = useParams();
  console.log(params.id);
  return (
    <div className='flex flex-col min-h-full'>
      <div>imgagem comida</div>
      <div>nome + botões</div>
      <div>ingredientes (menu) </div>
      <div>description</div> 
      <div> youtube video </div>
      <div>Carousel</div>
      <div>start button</div>
    </div>
  );
}