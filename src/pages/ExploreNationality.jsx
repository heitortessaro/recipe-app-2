import React from 'react';
import { useLocation } from 'react-router-dom';
import CardShelf from '../components/CardShelf';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

export default function ExploreNationality() {
  const location = useLocation();
  const title = location.pathname.includes('foods') ? 'foods' : 'drinks';
  return (
    <div className='flex flex-col min-h-full'>
      <Header enableSearch={false} title="Explore Ingredients" />
      <div className='flex justify-center pt-2 bg-base-300'>
        <select class="select select-bordered w-60 mx-auto">
          <option disabled selected>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <CardShelf>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </CardShelf>
      <FooterMenu />
    </div>
  );
}