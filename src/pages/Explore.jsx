import React from 'react';
import BtnShelf from '../components/BtnShelf';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import OverlayImageBtn from '../components/OverlayImageBtn';
const FOOD = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
const DRINK = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRyaW5rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

export default function Explore() {
  return (
    <div className='flex flex-col min-h-full'>
      <Header enableSearch={false} title="Explore"/>
      <BtnShelf>
        <OverlayImageBtn img={FOOD} destiny='/explore/foods' name='Explore Foods'/>
        <OverlayImageBtn img={DRINK} destiny='/explore/drinks' name='Explore Drinks'/>
      </BtnShelf>
      <FooterMenu />
    </div>
  );
}