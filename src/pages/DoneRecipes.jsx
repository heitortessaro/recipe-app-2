import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import CardShelf from '../components/CardShelf';

export default function DoneRecipes() {
  return (
    <div className='flex flex-col min-h-full'>
      <Header enableSearch={false} title={'Done Recipes'}/>
      {/* <Alert /> */}
      <CardShelf>
        <DoneRecipes />
        <DoneRecipes />
        <DoneRecipes />
        <DoneRecipes />
        <DoneRecipes />
        <DoneRecipes />
      </CardShelf>
      <FooterMenu />
    </div>
  );
}