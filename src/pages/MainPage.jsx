import React from 'react';
import { useLocation } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import CardShelf from '../components/CardShelf';

export default function MainPage() {
  const location = useLocation();
  const title = location.pathname.includes('foods')? 'Foods' : 'Drinks';
  return (
    <div className='flex flex-col min-h-full'>
      <Header enableSearch={true} title={title}/>
      <SearchBar /> 
      {/* <Alert /> */}
      <CardShelf>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
      </CardShelf>
      <FooterMenu />
    </div>
  );
}