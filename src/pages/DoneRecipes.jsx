import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import CardShelf from '../components/CardShelf';
import DoneRecipeCard from '../components/DoneRecipeCard';

export default function DoneRecipes() {
  return (
    <div className='flex flex-col min-h-full'>
      <Header enableSearch={false} title={'Done Recipes'} />
      {/* <Alert /> */}
      <div className="flex justify-center p-2 bg-orange-100">
          <button className="btn btn-primary btn-sm mx-2">All</button>
          <button className="btn btn-primary btn-sm mx-2">Foods</button>
          <button className="btn btn-primary btn-sm mx-2">Drinks</button>
      </div>
      <CardShelf>
        <DoneRecipeCard />
        <DoneRecipeCard />
        <DoneRecipeCard />
        <DoneRecipeCard />
        <DoneRecipeCard />
        <DoneRecipeCard />
      </CardShelf>
      <FooterMenu />
    </div>
  );
}