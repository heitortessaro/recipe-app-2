import React from 'react';
import { useLocation } from 'react-router-dom';
import CardShelf from '../components/CardShelf';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

export default function ExploreIngredient() {
  const location = useLocation();
  const title = location.pathname.includes('foods') ? 'foods' : 'drinks';
  return (
    <div className='flex flex-col min-h-full'>
      <Header enableSearch={false} title="Explore Ingredients" />
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