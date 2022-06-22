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
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Who shot first?</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
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