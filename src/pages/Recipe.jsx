import React from 'react';
import { useParams } from 'react-router-dom';
import FooterStartRecipe from '../components/FooterStartRecipe';
// import Carousel from '../components/Carousel';
import IngredientsList from '../components/IngredientsList';
import Video from '../components/Video';
import shareIcon from '../images/shareIcon.svg'
import heartIcon from '../images/whiteHeartIcon.svg'

export default function Recipe() {
  const params = useParams();
  console.log(params.id);
  return (
    <div className='flex flex-col min-h-full bg-base-300 pt-2'>

      {/* <div className="card md:card-side w-5/6 sm:w-3/4 md:max-w-screen-lg bg-base-100 mx-auto my-2">
        <figure><img src="https://www.themealdb.com/images/media/meals/1525876468.jpg" alt="Album" className='max-h-96' /></figure>
        <div className="card-body">
          <p className="text-center text-2xl font-semibold capitalize">Title! nove</p>
          <div className="card-actions flex-row justify-center">
            <button
              onClick={() => console.log('share')}
              className='btn btn-ghost hover:bg-secondary w-20 '
            >
              <img src={shareIcon} alt="Profile" />
            </button>
            <button
              onClick={() => console.log('favorite')}
              className='btn btn-ghost hover:bg-secondary w-20 '
            >
              <img src={heartIcon} alt="Profile" />
            </button>
          </div>
        </div>
      </div> */}
      <div className='w-5/6 sm:w-3/4 md:max-w-screen-lg mx-auto my-2 md:flex'>
        <div
          style={{ backgroundImage: 'url("https://www.themealdb.com/images/media/meals/1525876468.jpg")' }}
          className="h-64 md:flex-none md:w-96 rounded-t-2xl md:rounded-none md:rounded-l-2xl flex justify-center items-center content-div bg-no-repeat bg-cover bg-center"
        />
        <div className="px-2 container mx-auto rounded-b-2xl bg-base-100 py-2 md:rounded-none md:rounded-r-2xl flex flex-col justify-center">
          <p className="text-center text-2xl font-semibold capitalize pb-2">Title! nove</p>
          <div className="card-actions flex-row justify-center">
            <button
              onClick={() => console.log('share')}
              className='btn btn-ghost hover:bg-secondary w-20 '
            >
              <img src={shareIcon} alt="Profile" />
            </button>
            <button
              onClick={() => console.log('favorite')}
              className='btn btn-ghost hover:bg-secondary w-20 '
            >
              <img src={heartIcon} alt="Profile" />
            </button>
          </div>
        </div>
      </div>

      {/* <div className=" w-5/6 sm:w-3/4 md:max-w-screen-lg bg-base-100 mx-auto my-2">
        <div className='container max-h-96 '>
          <img src="https://www.themealdb.com/images/media/meals/1525876468.jpg" alt="Album" className='object-cover' />
        </div>
        <div className=" p-8 z-10">
          <p className="text-center text-2xl font-semibold capitalize">Title! nove</p>
          <div className="card-actions flex-row justify-center">
            <button
              onClick={() => console.log('share')}
              className='btn btn-ghost hover:bg-secondary w-20 '
            >
              <img src={shareIcon} alt="Profile" />
            </button>
            <button
              onClick={() => console.log('favorite')}
              className='btn btn-ghost hover:bg-secondary w-20 '
            >
              <img src={heartIcon} alt="Profile" />
            </button>
          </div>
        </div>
      </div> */}



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