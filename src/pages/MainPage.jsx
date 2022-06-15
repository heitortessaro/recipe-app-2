import React from 'react';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function MainPage() {
  return (
    <div className=''>
      <Header enableSearch={true} title={'Drinks'}/>
      {/* <SearchBar /> 
      <Alert /> */}
      <div>
        Lista de receitas
        <div>RecipeCard</div>
      </div>
      <FooterMenu />
    </div>
  );
}