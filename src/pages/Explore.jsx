import React from 'react';
import { useLocation } from 'react-router-dom';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function Explore() {
  const location = useLocation();
  const title = location.pathname.includes('foods')? 'Foods' : 'Drinks';
  return (
    <div className=''>
      <Header enableSearch={true} title={title}/>
      <SearchBar /> 
      
      <FooterMenu />
    </div>
  );
}