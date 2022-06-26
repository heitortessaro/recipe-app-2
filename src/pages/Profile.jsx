import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function Profile() {
  return (
    <div className='flex flex-col min-h-full'>
      <Header enableSearch={false} title={'Profile'} />
      <div className="flex flex-col justify-center items-center p-2 bg-orange-100 grow">
        <h2>Usuário</h2>
        <button className="btn btn-primary btn-lg mx-2 transform transition duration-200 hover:scale-110">
          Done Recipes
        </button>
        <button className="btn btn-primary btn-lg mx-2 transform transition duration-200 hover:scale-110">
          Favorite Recipes
        </button>
        <button className="btn btn-primary btn-lg mx-2  transform transition duration-200 hover:scale-110">
          Logout
        </button>
      </div>
      <FooterMenu />
    </div>
  );
}