import React from 'react';
import { useParams } from 'react-router-dom';
import FooterStartRecipe from '../components/FooterStartRecipe';
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
      <div className="bg-base-300 py-2">
        <p className="bg-base-100 w-5/6 sm:w-3/4 md:max-w-screen-lg rounded-md sm:rounded-box mx-auto p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat turpis ac sollicitudin viverra. Fusce fringilla molestie arcu, sit amet finibus dui. Nulla ullamcorper diam vitae turpis porta, eget rutrum lacus consequat. Vivamus aliquam massa neque, eu sodales orci fermentum ut. Quisque lorem magna, pharetra nec laoreet id, dignissim et purus. Phasellus in feugiat dui. Morbi urna diam, pulvinar nec tempus in, pellentesque vitae urna. Aenean nisi felis, vestibulum vel lacinia eleifend, tristique sed lectus. Nulla lacinia semper massa, sed varius ante lacinia vitae.

          Praesent vitae lacinia odio. Aenean porttitor augue est, ut ornare nulla cursus sed. Etiam et urna magna. Mauris finibus vel purus a auctor. Quisque iaculis hendrerit gravida. Sed elementum eros ut elit porta, sit amet euismod arcu porta. Aliquam maximus molestie mi.
        </p>
      </div>
      <Video URL="https://www.youtube.com/embed/r9jwGansp1E" />
      {/* <Carousel /> */}
      <FooterStartRecipe />
    </div>
  );
}