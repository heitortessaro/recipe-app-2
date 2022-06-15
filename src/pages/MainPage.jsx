import React from 'react';
import Header from '../components/Header';

export default function MainPage() {
  return (
    <div className=''>
      <Header enableSearch={true} title={'Drinks'}/>
      {/* <SearchBar /> 
      <Alert />
      <FooterMenu /> */}
      <div>
        Lista de receitas
        <div>RecipeCard</div>
      </div>
    </div>
  );
}