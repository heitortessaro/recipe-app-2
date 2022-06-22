import React from 'react';
import { useLocation } from 'react-router-dom';
import BtnShelf from '../components/BtnShelf';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import OverlayImageBtn from '../components/OverlayImageBtn';
import SearchBar from '../components/SearchBar';

const FOOD_INGREDIENT = 'https://images.unsplash.com/photo-1470549813517-2fa741d25c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5ncmVkaWVudHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60';
const FOOD_COUNTRY = 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0aW9ucyUyMG1hcHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60';
const FOOD_SURPRISE = 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGUlMjBvZiUyMGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

const DRINK_INGREDIENT = 'https://images.unsplash.com/photo-1551198297-094dd136d3e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRyaW5rc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60';
const DRINK_SURPRISE = 'https://images.unsplash.com/photo-1438557068880-c5f474830377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHN1cnByaXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60';

export default function MainPage() {
  const location = useLocation();
  const title = location.pathname.includes('foods') ? 'foods' : 'drinks';
  const suprise_me = title === 'foods' ? FOOD_SURPRISE : DRINK_SURPRISE;
  const ingredient = title === 'foods' ? FOOD_INGREDIENT : DRINK_INGREDIENT;
  const showCountry = title === 'foods' ? true : false;
  return (
    <div className='flex flex-col min-h-full'>
      <Header enableSearch={false} title="Explore" />
      <SearchBar />
      <BtnShelf>
        <OverlayImageBtn img={ingredient} destiny={`${location.pathname}/ingredients`} name='Explore By Ingredients' />
        <OverlayImageBtn img={suprise_me} destiny={`${location.pathname}/surprise`} name='Surprise Me' />
        {showCountry && (
          <OverlayImageBtn img={FOOD_COUNTRY} destiny={`${location.pathname}/nationalities`} name='By Nationality' />
        )}
      </BtnShelf>
      <FooterMenu />
    </div>
  );
}