import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import CardShelf from '../components/CardShelf';
import DoneRecipeCard from '../components/DoneRecipeCard';

export default function FavoriteRecipes() {
  return (
    <div className='flex flex-col min-h-full'>
      <Header enableSearch={false} title={'Favorite Recipes'} />
      {/* <Alert /> */}
      <div className="flex justify-center p-2 bg-orange-100">
          <button className="btn btn-primary btn-sm mx-2">All</button>
          <button className="btn btn-primary btn-sm mx-2">Foods</button>
          <button className="btn btn-primary btn-sm mx-2">Drinks</button>
      </div>
      <CardShelf>
        ,<div>It need to be finished.</div>
      </CardShelf>
      <FooterMenu />
    </div>
  );
}